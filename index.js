const x = 56;
const sumOfDigits = (num) => {
    const digits = num.toString().split('');
    return digits.reduce((acc, digit) => acc + parseInt(digit), 0);
};

const result = sumOfDigits(x);
console.log(result); // Output: 11

let hello = "hell0"
