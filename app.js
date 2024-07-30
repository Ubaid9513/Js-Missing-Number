let arr = [11, 13, 14, 15, 17, 20];
let missing = [];
for (var i = 0; i < arr.length; i++) {
  let diff = arr[i + 1] - arr[i];
  if (diff > 1) {
    for (var j = 1; j < diff; j++) {
      arr.splice(i + j,0,arr[i] + j)
    missing.push(arr[i] + j);
    }
  }
}
console.log(arr);
console.log(missing);

// var arr = [11, 13, 14, 15, 17, 21];
// var mis = [];
// for (var i = 0; i < arr.length; i++) {
//   var diff = arr[i + 1] - arr[i];
//   if (diff > 1) {
//     for (var j = 1; j < diff; j++) {
//       console.log(arr[i] + j);
//       mis.push(arr[i] + j);
//       arr.splice(i + j,0,arr[i] + j)
//     }
//   }
// }
// console.log(arr);
// console.log(mis);