const Animal = {
  runs: true,
  walk: function () {
    console.log("walking");
  },
};
const Cat = {
  __proto__: Animal,
};
console.log(
  "Animal",
  Animal,
  "Animal.__proto__",
  Animal.__proto__,
  "Cat",
  Cat,
  "Cat.__proto__",
  Cat.__proto__,
  "Cat.__proto__.__proto__",
  Cat.__proto__.__proto__
);

function Birds() {
  (this.runs = false),
    (this.fly = function () {
      console.log("flying");
    });
}
console.log(Animal, new Birds(), Birds.prototype, new Object());
/*
    if a object is created using constructor function, then [[prototype]] = { constructor : (points to the function itself) , prototype  }

    if using object literal, then __proto__ has parent
*/
