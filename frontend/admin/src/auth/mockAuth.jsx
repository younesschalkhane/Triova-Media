const users = [
  {
    email: "sabrikawtar17@gmail.com",
    password: "123456",
    role: "admin",
    permissions: ["services"],
  },
  {
    email: "Fatihaidbrahim90@gmail.com",
    password: "Fatiha1234",
    role: "admin",
    permissions: ["orders"],
  },
  {
    email: "Hasnaaelasbihani12@gmail.com",
    password: "Hasnaa1234",
    role: "admin",
    permissions: ["devis"],
  },
  {
    email: "chalkhane.youness@hotmail.com",
    password: "Youness1234",
    role: "superadmin",
    permissions: ["services", "orders", "devis", "users"],
  },
];

export const ROUTE_PERMISSIONS = {
  "/": null,
  "/services": "services",
  "/client": "orders",
  "/contact": "users",
  "/devis": "devis",
};

export const authenticate = (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();

  return (
    users.find(
      (u) =>
        u.email.toLowerCase() === normalizedEmail && u.password === password
    ) || null
  );
};

export const getCurrentUser = () => {
  try {
    const stored = localStorage.getItem("adminUser");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

export const hasPermission = (user, permission) => {
  if (!user) return false;
  if (user.role === "superadmin") return true;
  return user.permissions?.includes(permission) ?? false;
};

export const canAccessRoute = (user, path) => {
  if (!user) return false;
  if (user.role === "superadmin") return true;
  if (path === "/") return false;

  const permission = ROUTE_PERMISSIONS[path];
  if (!permission) return true;

  return hasPermission(user, permission);
};

export const getDefaultRoute = (user) => {
  if (!user || user.role === "superadmin") return "/";

  const firstPermission = user.permissions?.[0];
  const route = Object.entries(ROUTE_PERMISSIONS).find(
    ([, permission]) => permission === firstPermission
  );

  return route?.[0] ?? "/";
};

export const logout = () => {
  localStorage.removeItem("adminUser");
};
