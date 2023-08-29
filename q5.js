"use strict";
/*Give an array temperature in Celsius [0,10,20,30,40] use the map method to create a new array
where each temperature is converted to Fahrenheit using the formula (celsius*9/5)+32.*/
let temperature = [0, 10, 20, 30, 40];
let ans = temperature.map((temp) => {
    return (temp * 9 / 5) + 32;
});
console.log(ans);
