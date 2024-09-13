const arr = [1, 2, 3, 4, 5, 6];

//Calls

//forEach
// arr.myForEach((item, index, self) => {
//   console.log(item, index, self);
// });

//map  -  returns new array
// const mapo = arr.myMap((item, index, self) => {
//     if(index <= 2){
//         return item * 2;
//     }
// });
// console.log(mapo);

//filter - returns new array
// const filtero = arr.myFilter(
//     (item, index, self) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// }
// );
// console.log(filtero);

//find - returns very first found value if condition satisfy
// const findo = arr.myFind((item, index, self) => {
//   return item > 6;
// });
// console.log(findo);

//some - returns true if the condition satisfy on very first index
// const someo = arr.mySome((item, index, self) => {
//   return item === 5;
// });
// console.log(someo);

//every - returns true if all the items in the array satisfy the given condition
// const everyo = arr.myEvery((item, index, self) => {
//   return item < 9;
// });
// console.log(everyo);

//reduce - returns only single value after accomodating all array items
const reduceo = arr.myReduce((accumulator, currentValue) => {
  return accumulator * currentValue;
}, 1);
console.log(reduceo);
