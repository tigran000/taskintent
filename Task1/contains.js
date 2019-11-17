import flattenObject from "./flattenObject";
function contains(Store, target) {
  const allObjectValues = Object.values(flattenObject(Store));
  return allObjectValues.some(el => {
    if (typeof el === "function") {
      return el.toString() === target.toString();
    }
    return el === target;
  });
}

export default contains;
