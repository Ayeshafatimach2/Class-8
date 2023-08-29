"use strict";
/*Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together
to create a new array containing the squares of even numbers.*/
let numbers = [43, 42, 1, 5, 32, 99, 7, 4, 2];
let squareEven = numbers.filter((element) => element % 2 == 0).map((element) => element ** 2);
console.log(squareEven);
/*Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together
to create a new array containing the squares of odd numbers.*/
let numbers2 = [43, 42, 1, 5, 32, 99, 7, 4, 2];
let squareOdd = numbers2.filter((element2) => element2 % 2 !== 0).map((element2) => element2 ** 2);
console.log(squareOdd);
