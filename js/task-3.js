// 1 варіант
// function filterArray(numbers, value) {
//   const totalArray1 = [];
//   for (element of numbers) {
//     if (element > value) {
//       totalArray1.push(element);
//     }
//   }
//   return totalArray1;
// }

// 2 варіант
function filterArray(numbers, value) {
  const totalArray1 = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > value) {
      totalArray1.push(numbers[i]);
    }
  }
  return totalArray1;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
