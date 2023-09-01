"use strict";
//Write a program that uses filter to remove all negative numbers from an array of numbers.
//EXAMPLE-1
let num = [1, -2, 3, -4, 5, -6, 7, -8, 9];
num = num.filter((removeNegative) => {
    if (removeNegative >= 0) {
        return num;
    }
});
console.log(num);
//EXAMPLE-2
let _n = [43, 53, -543, -64, -112, 647, 342, 3 - 32, 63];
_n = _n.filter((removeNeg) => {
    if (removeNeg >= 0) {
        return _n;
    }
});
console.log(_n);
//EXAMPLE-3
let negNum = [313, 34, -2342, -24, 2424, 242, -5435, -463, 633, -53];
negNum = negNum.filter((_remove) => {
    if (_remove >= 0) {
        return negNum;
    }
});
console.log(negNum);
//Write a program that uses filter to remove all positive numbers from an array of numbers.
//EMAMPLE-1
let numb = [9423, -31, 32, -123, -2331, -313, 54];
numb = numb.filter((removePositive) => {
    if (removePositive <= 0) {
        return numb;
    }
});
console.log(numb);
//EXAMPLE-2
let n2 = [43, 53, -543, -64, -112, 647, 342, 3 - 32, 63];
n2 = n2.filter((remove) => {
    if (remove <= 0) {
        return n2;
    }
});
console.log(n2);
var positiveNumber = [284, -242, 2, -242, -242, 3242, 24, -542, 432];
positiveNumber = positiveNumber.filter((removeNumber) => {
    if (removeNumber <= 0) {
        return positiveNumber;
    }
});
console.log(positiveNumber);
