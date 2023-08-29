//Write a program that uses filter to remove all negative numbers from an array of numbers.
//EXAMPLE-1
let num: number[] = [1, -2, 3, -4, 5, -6, 7, -8, 9];

num = num.filter((removeNegative: number) => {
    if (removeNegative >= 0) {
        return num;
    }


});
console.log(num);

//EXAMPLE-2
let _n: number[] = [43, 53, -543, -64, -112, 647, 342, 3 - 32, 63];
_n = _n.filter((removeNeg: number) => {
    if (removeNeg >= 0) {
        return _n;
    }
})
console.log(_n);


//Write a program that uses filter to remove all positive numbers from an array of numbers.
//EMAMPLE-1

let numb: number[] = [9423, -31, 32, -123, -2331, -313, 54];

numb = numb.filter((removePositive: number) => {
    if (removePositive <= 0) {
        return numb;
    }
})
console.log(numb);

//EXAMPLE-2

let n2: number[] = [43, 53, -543, -64, -112, 647, 342, 3 - 32, 63];
n2 = n2.filter((remove: number) => {
    if (remove <= 0) {
        return n2;
    }
})
console.log(n2);
