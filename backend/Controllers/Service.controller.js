const Service = require("../modeles/Service.modele");
const slugify = require("../utils/slugify");
const {
  validateServiceBody,
  validateObjectId,
  parseFeatures,
} = require("../middleware/validateService");

function sendSuccess(res, data, message = "Succès.", statusCode = 200) {
  return res.status(statusCode).json({ success: true, message, data });
}

function sendError(res, message, statusCode = 400, errors = null) {
  const payload = { success: false, message };
  if (errors) payload.errors = errors;
  return res.status(statusCode).json(payload);
}

async function generateUniqueSlug(title, excludeId = null) {
  let baseSlug = slugify(title);
  if (!baseSlug) baseSlug = "service";

  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const query = { slug };
    if (excludeId) query._id = { $ne: excludeId };
    const existing = await Service.findOne(query);
    if (!existing) return slug;
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
}

exports.getAllServices = async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 10));
    const search = (req.query.search || "").trim();
    const status = req.query.status;

    const filter = {};

    if (status && status !== "all") {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { shortDescription: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    const total = await Service.countDocuments(filter);
    const services = await Service.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return res.status(200).json({
      success: true,
      message: "Services récupérés avec succès.",
      data: services,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit) || 1,
      },
    });
  } catch (err) {
    return sendError(res, err.message, 500);
  }
};

exports.getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) {
      return sendError(res, "Service introuvable.", 404);
    }
    return sendSuccess(res, service, "Service récupéré avec succès.");
  } catch (err) {
    return sendError(res, err.message, 500);
  }
};

exports.createService = async (req, res) => {
  try {
    const errors = validateServiceBody(req.body);
    if (errors.length > 0) {
      return sendError(res, "Données invalides.", 400, errors);
    }

    const slug = req.body.slug
      ? slugify(req.body.slug)
      : await generateUniqueSlug(req.body.title);

    const service = await Service.create({
      title: req.body.title.trim(),
      slug,
      shortDescription: req.body.shortDescription.trim(),
      description: req.body.description.trim(),
      icon: req.body.icon.trim(),
      image: req.body.image || "",
      category: req.body.category.trim(),
      price: Number(req.body.price) || 0,
      features: parseFeatures(req.body.features),
      status: req.body.status || "active",
    });

    return sendSuccess(res, service, "Service créé avec succès.", 201);
  } catch (err) {
    if (err.code === 11000) {
      return sendError(res, "Ce slug existe déjà.", 400);
    }
    return sendError(res, err.message, 400);
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!validateObjectId(id)) {
      return sendError(res, "Identifiant invalide.", 400);
    }

    const errors = validateServiceBody(req.body, { isUpdate: true });
    if (errors.length > 0) {
      return sendError(res, "Données invalides.", 400, errors);
    }

    const updateData = { ...req.body };

    if (updateData.title) updateData.title = updateData.title.trim();
    if (updateData.shortDescription) updateData.shortDescription = updateData.shortDescription.trim();
    if (updateData.description) updateData.description = updateData.description.trim();
    if (updateData.category) updateData.category = updateData.category.trim();
    if (updateData.icon) updateData.icon = updateData.icon.trim();
    if (updateData.features !== undefined) {
      updateData.features = parseFeatures(updateData.features);
    }

    if (updateData.slug) {
      updateData.slug = slugify(updateData.slug);
    } else if (updateData.title) {
      updateData.slug = await generateUniqueSlug(updateData.title, id);
    }

    const updated = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return sendError(res, "Service introuvable.", 404);
    }

    return sendSuccess(res, updated, "Service mis à jour avec succès.");
  } catch (err) {
    if (err.code === 11000) {
      return sendError(res, "Ce slug existe déjà.", 400);
    }
    return sendError(res, err.message, 400);
  }
};

exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    if (!validateObjectId(id)) {
      return sendError(res, "Identifiant invalide.", 400);
    }

    const deleted = await Service.findByIdAndDelete(id);
    if (!deleted) {
      return sendError(res, "Service introuvable.", 404);
    }

    return sendSuccess(res, null, "Service supprimé avec succès.");
  } catch (err) {
    return sendError(res, err.message, 500);
  }
};

exports.uploadServiceImage = async (req, res) => {
  try {
    if (!req.file) {
      return sendError(res, "Aucune image fournie.", 400);
    }

    const imageUrl = `/uploads/services/${req.file.filename}`;
    return sendSuccess(res, { imageUrl }, "Image uploadée avec succès.", 201);
  } catch (err) {
    return sendError(res, err.message, 400);
  }
};
