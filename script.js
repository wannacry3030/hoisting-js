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
  firstName: 'Jonas',
  year: 1996,
  calcAge3: function () {
    console.log(this);
    console.log(2023 - this.year);

    //solução 1
    //   const self = this; //self or that
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    //solução 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    //essa solução so funciona pq a função usa o this keyword do parent scope
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge3();

//arguments keyword
var addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(3, 6, 7, 9);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 7);
//porem ja nao utilizamos esse argumento no JS moderno, pois ja utilizamos opções mais modernas
