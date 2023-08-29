/*Given an array of strings["Apple","banana","cherry","date"] use the filter method to create 
a new array containing only the fruits with more than 5 characters.*/

let fruits: string[] = [
    "Apple",
    "banana",
    "cherry",
    "date"];

let result = fruits.filter((fruit: string) => {
    if (fruit.length > 5) {
        return fruit;

    }
})
console.log(result);


