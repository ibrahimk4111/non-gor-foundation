const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
};
export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
    forgetPassword: `${ROOTS.AUTH}/forget-password`,
    verifyPassword: `${ROOTS.AUTH}/verify-password`,
    newPassword: `${ROOTS.AUTH}/new-password`,
  },
  home: "/",
  gallery: {
    iftarDistribution: "/gallery/iftar-distribution",
    orphan: "/gallery/orphan",
    qurbani: "/gallery/qurbani",
    foodDistribution: "/gallery/food-distribution",
    tubeWellDistribution: "/gallery/tube-well-distribution",
    reliefDistribution: "/gallery/relief-distribution",
    vanDistribution: "/gallery/van-distribution",
    winterClothing: "/gallery/winter-clothing",
  },
};
