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
// const reduceo = arr.myReduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// }, 1);
// console.log(reduceo);

let p1 = { name: "Rishabh", age: 33 };
let p2 = { name: "Kapil", age: 55 };
function greet(active, city) {
  console.log(`Hello ${this.name}! your age is ${this.age}. ${active} ${city}`);
}
//function prototype
//call - calls a function with the given reference with comma saperated args
// greet.myCall(p2, false);

//apply - calls a function with the given reference with an array of args
// greet.myApply(p2, [true,"Delhi"]);

//bind - calls a function with the given reference with comma saperated args and can be stored in a variable
const bindCall = greet.myBind(p2, true);
bindCall("Delhi");
