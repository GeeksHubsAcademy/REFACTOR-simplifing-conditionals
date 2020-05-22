// function isRed(fruit: string) {
//   if (fruit) {
//     if (fruit === 'apple') {
//       return true;
//     } else if (fruit === 'apple') {
//       return true;
//     } else if (fruit === 'strawberry') {
//       return true;
//     } else {
//         return false;

//     }
//   } else {
//     throw new Error('No fruit!');
//   }
// }

// CONSOLIDAR CONDICIONALES
// function isRed(fruit: string) {
//   if (fruit) {
//     if (fruit === 'apple' || fruit === 'strawberry') {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     throw new Error('No fruit!');
//   }
// }

// CRITERIO MULTIPLE
// function isRed(fruit: string) {
//   if (fruit) {
//     const redFruits = [
//       'apple',
//       'strawberry',
//       'cherry',
//       'cranberries',
//     ];
//     if (redFruits.includes(fruit)) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     if (!fruit) throw new Error('No fruit!');
//   }
// }

// EXTRAE LA CONDICIÓN
const list = ['apple', 'strawberry', 'cherry', 'cranberries'];
const isInTheList = (item) => list.includes(item);

// function isRed(fruit: string) {
//   if (fruit) {

//     if (isInTheList(fruit)) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     if (!fruit) throw new Error('No fruit!');
//   }
// }

// function isRed(fruit: string) {
//   if (!fruit) throw new Error('No fruit!');
//   if (isInTheList(fruit)) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isRed(fruit: string) {
  if (!fruit) throw new Error('No fruit!');
  if (!isInTheList(fruit)) return false;
  return true;
}

console.log(isRed('apple')); // true
console.log(isRed('')); // throws
