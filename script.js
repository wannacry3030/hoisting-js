'use strict';

// VARIAVEIS
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'lucas';
// let job = 'developer';
// const year = 1996;

// // FUNÇÕES
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

//THIS KEYWORD
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAge(1996);

// console.log(this);

// const calcAge2 = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAge2(1996);

// const jonas = {
//   year: 1996,
//   calcAge3: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };
// jonas.calcAge3();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge3 = jonas.calcAge3;
// matilda.calcAge3();

// const f = jonas.calcAge3;
// f();

const jonas = {
  year: 1996,
  calcAge3: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
console.log(jonas);
