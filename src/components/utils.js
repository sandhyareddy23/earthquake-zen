export const capitalize = (profile) =>
  profile
    .split(/(?=[A-Z])/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
