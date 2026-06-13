const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
const mongoose = require("mongoose");
const Service = require("../modeles/Service.modele");

const services = [
  {
    title: "Programmation Web",
    slug: "programmation-web",
    shortDescription:
      "Nous développons des sites web modernes, rapides et entièrement sur mesure pour répondre aux besoins spécifiques de votre activité. Chaque projet est conçu avec une attention particulière portée à la performance, l'expérience utilisateur et l'évolutivité.",
    description:
      "Nous développons des sites web modernes, rapides et entièrement sur mesure pour répondre aux besoins spécifiques de votre activité. Chaque projet est conçu avec une attention particulière portée à la performance, l'expérience utilisateur et l'évolutivité.",
    icon: "code2",
    category: "Création Site Web",
    price: 5000,
    features: [
      "Développement front-end moderne & responsive",
      "Interfaces fluides et optimisées UX/UI",
      "Intégration de fonctionnalités dynamiques",
      "Code propre, scalable et maintenable",
    ],
    status: "active",
  },
  {
    title: "Solutions AI",
    slug: "solutions-ai",
    shortDescription:
      "Nous développons des solutions d'intelligence artificielle modernes, performantes et entièrement adaptées aux besoins de votre activité. Chaque projet est conçu avec une attention particulière portée à l'automatisation, l'expérience utilisateur et l'innovation digitale.",
    description:
      "Nous développons des solutions d'intelligence artificielle modernes, performantes et entièrement adaptées aux besoins de votre activité. Chaque projet est conçu avec une attention particulière portée à l'automatisation, l'expérience utilisateur et l'innovation digitale.",
    icon: "brain",
    category: "SOLUTIONS D'INTELLIGENCE ARTIFICIELLE",
    price: 6000,
    features: [
      "Développement d'agents IA intelligents & automatisés",
      "Chatbots IA fluides et optimisés UX/UI",
      "Intégration d'API IA et fonctionnalités avancées",
      "Solutions scalables, sécurisées et maintenables",
    ],
    status: "active",
  },
  {
    title: "Identité Visuelle",
    slug: "identite-visuelle",
    shortDescription:
      "Nous créons des identités visuelles modernes et mémorables qui reflètent parfaitement l'image et les valeurs de votre marque. Chaque création est pensée pour garantir cohérence, impact visuel et reconnaissance professionnelle.",
    description:
      "Nous créons des identités visuelles modernes et mémorables qui reflètent parfaitement l'image et les valeurs de votre marque. Chaque création est pensée pour garantir cohérence, impact visuel et reconnaissance professionnelle.",
    icon: "palette",
    category: "IDENTITE VISUELLE",
    price: 3500,
    features: [
      "Création de logos uniques & professionnels",
      "Conception de chartes graphiques modernes",
      "Design de supports marketing & réseaux sociaux",
      "Identité visuelle cohérente, créative et évolutive",
    ],
    status: "active",
  },
  {
    title: "ADS Marketing",
    slug: "ads-marketing",
    shortDescription:
      "Nous créons des campagnes publicitaires digitales performantes pour développer votre visibilité, attirer de nouveaux clients et maximiser vos résultats. Chaque stratégie est conçue avec une approche orientée performance, conversion et croissance.",
    description:
      "Nous créons des campagnes publicitaires digitales performantes pour développer votre visibilité, attirer de nouveaux clients et maximiser vos résultats. Chaque stratégie est conçue avec une approche orientée performance, conversion et croissance.",
    icon: "megaphone",
    category: "GOOGLE ADS & META ADS",
    price: 4000,
    features: [
      "Création et gestion de campagnes Meta Ads & Google Ads",
      "Ciblage précis et optimisation des performances",
      "Visuels publicitaires modernes et impactants",
      "Stratégies marketing orientées conversion & ROI",
    ],
    status: "active",
  },
  {
    title: "Création AI",
    slug: "creation-ai",
    shortDescription:
      "Nous concevons des créations basées sur l'intelligence artificielle pour donner vie à vos idées avec innovation, rapidité et créativité. Chaque projet est pensé pour offrir un rendu moderne, impactant et adapté à votre image de marque.",
    description:
      "Nous concevons des créations basées sur l'intelligence artificielle pour donner vie à vos idées avec innovation, rapidité et créativité. Chaque projet est pensé pour offrir un rendu moderne, impactant et adapté à votre image de marque.",
    icon: "sparkles",
    category: "INTELLIGENCE ARTIFICIELLE",
    price: 4500,
    features: [
      "Génération de contenus visuels & designs par IA",
      "Création de vidéos et visuels publicitaires IA",
      "Production de contenus créatifs pour réseaux sociaux",
      "Solutions IA innovantes, rapides et personnalisées",
    ],
    status: "active",
  },
  {
    title: "Social Media",
    slug: "social-media",
    shortDescription:
      "Stratégie éditoriale, production de contenu et community management. On transforme vos abonnés en ambassadeurs.",
    description:
      "Stratégie éditoriale, production de contenu et community management. On transforme vos abonnés en ambassadeurs.",
    icon: "share2",
    category: "COMMUNAUTE & ENGAGEMENT",
    price: 3000,
    features: [
      "Stratégie & ligne éditoriale",
      "Production photo, vidéo, motion",
      "Community management 7j/7",
      "Influence & partenariats créateurs",
    ],
    status: "active",
  },
  {
    title: "SEO & Référencement",
    slug: "seo-referencement",
    shortDescription:
      "Audit technique, stratégie de contenu et optimisation SEO pour améliorer votre visibilité sur Google.",
    description:
      "Audit technique, stratégie de contenu et optimisation SEO pour améliorer votre visibilité sur Google.",
    icon: "search",
    category: "Visibilité Organique",
    price: 2500,
    features: [
      "Audit SEO technique complet",
      "Recherche de mots-clés",
      "Optimisation on-page",
      "Stratégie backlinks",
    ],
    status: "active",
  },
];

async function seed() {
  try {
    console.log("Connexion à MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("Connecté à MongoDB");

    // Supprimer les services existants (gérer les conflits de slug)
    await Service.deleteMany({});
    console.log("Anciens services supprimés");

    // Insérer les 7 services
    const created = await Service.create(services);
    console.log(`${created.length} services insérés avec succès !`);
    
    created.forEach((s) => {
      console.log(`  - ${s.title} (slug: ${s.slug})`);
    });

    await mongoose.connection.close();
    console.log("Terminé !");
    process.exit(0);
  } catch (err) {
    console.error("Erreur:", err.message);
    process.exit(1);
  }
}

seed();