const getItemsString = function (array) {
  // Write code under this line
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${[i + 1]} - ${array[i]}\n`;
  }
  return result;
};
console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(getItemsString([5, 10, 15]));

// 1 - Mango
// 2 - Poly
// 3 - Ajax
// 4 - Lux
// 5 - Jay
// 6 - Kong

// 1 - 5
// 2 - 10
// 3 - 15
