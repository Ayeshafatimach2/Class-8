/*Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together 
to create a new array containing the doubled values of odd numbers.*/

let numbers3: number[] = [3, 6, 9, 12, 15, 18];
let numbers4 = numbers3.filter((element) => element % 2 !== 0)
    .map((oddNumb) => oddNumb * oddNumb);
console.log(numbers4);

/*Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together
to create a new array containing the doubled values of even numbers.*/

let numbers5: number[] = [3, 6, 9, 12, 15, 18];
let numbers6 = numbers3.filter((element) => element % 2 == 0)
    .map((evenNumb) => evenNumb * evenNumb);
console.log(numbers6);

