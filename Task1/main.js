import contains from "./contains";

const target = {};

const Store = {
  prop1: { prop1: 1 },
  prop2: function() {},
  prop3: {
    prop1: {
      prop1: {
        prop1: [0, 1, { prop1: "Hello" }],
        prop2: target,
        prop3: {
          prop1: Math.random
        }
      }
    }
  }
};
console.log(contains(Store, target));
console.log(contains(Store, "Hello"));
console.log(contains(Store, Object));
console.log(contains(Store, function() {}));
console.log(contains(Store, Math.random));
