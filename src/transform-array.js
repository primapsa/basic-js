const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(value) {
  if (!Array.isArray(value))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let copy = [].concat(...value);

  value.forEach((element, index, arr) => {
    let controlCheck = isControl(element);
    if (controlCheck.isFound) {
      if (controlCheck.target == "prev" && index == 0) {
        deleteControl(index, copy);
      } else if (controlCheck.target == "next" && index == arr.length - 1) {
        deleteControl(index, copy);
      } else {
        let change = applyControl(element, copy, index);
      }
    }
  });

  function deleteControl(position, target) {
    target.splice(position, 1);
  }

  function isControl(el) {
    el = String(el);
    let regexp = /--(?<methode>double|discard){1}-(?<target>next|prev){1}/i;
    let result = el.match(regexp);
    let obj = {};
    obj.isFound = Boolean(result?.groups);
    obj.method = result?.groups?.methode || null;
    obj.target = result?.groups?.target || null;

    return obj;
  }

  function applyControl(el, target, position) {
    el = String(el);
    el = el.slice(2);
    let control = el.split("-");
    let operation = "";
    let controlEvent = control[0];
    let controlTarget = control[1];
    switch (controlEvent) {
      case "double":
        controlTarget == "next"
          ? target.splice(position, 1, target[position + 1])
          : position - 1 !== null
          ? target.splice(position, 1, target[position - 1])
          : "";
        break;
      case "discard":
        controlTarget == "next"
          ? target.splice(position, 2, null, null)
          : target.splice(position - 1, 2, null, null);
        break;
    }
  }
  return copy.filter((el) => !!el);
}


module.exports = {
  transform,
};
