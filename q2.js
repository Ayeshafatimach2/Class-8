"use strict";
//Give an array of numbers [1,2,3,4,5], use the map method to create a new array where each number is multiplied by 2.
let number = [3, 6, 4, 7, 8, 2, 9, 4];
let multiply = number.map((entry) => {
    return entry * 2;
});
console.log(multiply);
//Give an array of numbers [1,2,3,4,5], use the map method to create a new array where each number is multiplied by 5.
let number2 = [23, 425, 434, 234, 86, 35, 75];
let multiply2 = number2.map((entry2) => {
    return entry2 * 5;
});
console.log(multiply2);
//Give an array of numbers [1,2,3,4,5], use the map method to create a new array where each number is multiplied by 15.
let number3 = [1, 2, 3, 4, 5];
let multiply10 = number3.map((entre) => {
    return entre * 15;
});
console.log(multiply10);
