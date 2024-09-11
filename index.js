const arr = [1, 2, 3, 4, 5, 6];

//Calls

//forEach
// arr.myForEach((item, index, self) => {
//   console.log(item, index, self);
// });

//map
// const mapo = arr.myMap((item, index, self) => {
//     if(index <= 2){
//         return item * 2;
//     }
// });
// console.log(mapo);

//filter
// const filtero = arr.myFilter(
//     (item, index, self) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// }
// );
// console.log(filtero);

//find
const findo = arr.myFind((item, index, self) => {
  return item > 6;
});
console.log(findo);
