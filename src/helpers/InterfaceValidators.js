export const type = (type, defaultValue = null, shape = []) => [
  type,
  defaultValue,
  [...shape]
];
export const validate = (CONTRACT, value) => {
  switch (CONTRACT[0]) {
    case "array":
      if (typeof value === "object" && Array.isArray(value)) {
        if (CONTRACT[2][0] === "interface") {
          return value.filter(val => val instanceof CONTRACT[2][1]);
        }

        return value.filter(
          val =>
            typeof val === CONTRACT[2][0] ||
            CONTRACT[2][0] === undefined ||
            CONTRACT[2][0] === "any"
        );
      }

      return CONTRACT[1];
    case "object":
      if (typeof value === "object") {
        if (CONTRACT[2][0] === "interface") {
          return value instanceof CONTRACT[2][1] ? value : CONTRACT[1];
        }

        return value instanceof CONTRACT[2][0] ||
          CONTRACT[2][0] === undefined ||
          CONTRACT[2][0] === "any"
          ? value
          : CONTRACT[1];
      }

      return CONTRACT[1];
    default:
      return typeof value === CONTRACT[0] ||
        CONTRACT[0] === undefined ||
        CONTRACT[0] === "any"
        ? value
        : CONTRACT[1];
  }
};
