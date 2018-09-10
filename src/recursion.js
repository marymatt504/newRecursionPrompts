/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {

    if (n < 0){
        return null;
    }

    if ( n === 0 || n === 1){
        return 1;
    }

    if (n > 1){
        return n * (factorial(n-1));
    }

};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

    if (array.length === 0){
        return 0;
    }

    if (array.length === 1){
        return array[0];
    }

    if (array.length > 1){
        return array[0] + sum(array.slice(1));
    }

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

var testArr = ([1, [2,3]]);



var arraySum = function(array) {
    
    if (typeof array === 'number'){
        return array;
    }
    
    if (array.length === 0){
        return 0;
    }

    if (array.length === 1 && typeof array[0] === 'number'){
        return array[0];
    }

    if (array.length === 1 && typeof array[0] !== 'number'){
        return arraySum(array[0]);
    }

    if (array.length > 1){
        return arraySum(array[0]) + arraySum(array.slice(1));
    }
};

var result = arraySum(testArr);
result

// 4. Check if a number is even.
var isEven = function(n) {
    if (n === 0 || n === 2 || n === -2){
        return true;
    }

    if (n === 1 || n === -1){
        return false;
    }

   if (n > 2){
       return isEven(n-2);
   }

   if (n < -2){
       return isEven(n+2);
   }


};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 1 || n === -1 || n === 0){
        return 0;
    }

    if (n > 1){
        return n - 1 + sumBelow(n-1);
    }

    if (n < 1){
        return n + 1 + sumBelow(n+1);
    }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    var result = []; 
    // if the variable is function scoped, each time I call the function
    // in recurssion, I'm creating a new variable,then it only returns the
    // outside variable

    if (x === y || (x + 1) === y || (y + 1) === x){
        return result;
    }

    if (x + 2 === y){
        result.push((x+1));
    }

    if (y + 2 === x){
        result.push((y+1));
    }

    if (y > (x + 2)){
        result.push(x + 1);
        // result.push(range((x+1), y));
        result = result.concat(range((x+1), y));
    }    

    if (x > (y + 2)){
        result.push(x-1);
        result = result.concat(range((x - 1), y));
    }

    return result;


};

var answer = range(3,7);
answer

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0){
        return 1;
    }

    if (exp === 1){
        return base;
    }

    if (exp === -1){
        return 1/base;
    }

    if (exp > 1){
        return base * exponent(base, exp - 1);
    }

    if (exp < -1){
        return 1/(exponent(base, exp * -1));
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 2 || n === 1){
        return true;
    }
    if (n > 2){
        return powerOfTwo(n/2);
    } else {
        return false;
    }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    var newStr = '';
    if (string.length === 0 || string.length === 1){
        return string;
    }

    if (string.length > 1){
        newStr += string[string.length - 1];
        newStr += reverse(string.slice(0,string.length - 1));
    }

    return newStr;
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    string = string.toLowerCase();
    string = string.split(' ').join('');
    
    if (string.length === 0 || string.length === 1){
        return true;
    }

    if (string[0] !== string[string.length - 1]){
        return false;
    }

    return palindrome(string.slice(1,string.length-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
function modulo(x,y){

    if (y === 0){
        return NaN;
    }
    
    if (x === y || x === 0){
        return 0;
    }

    if (x > y && x > 0 && y > 0 && x - y < y){
        return x - y;
    }

    if (x > y && x > 0 && y > 0 && x - y >= y){
        return modulo(x-y,y);
    } 

    if (x < y && x > 0 && y > 0){
        return x;
    } 

    if (x > 0 && y < 0){
        if (-y > x){ 
            return x;
        }else { 
            return modulo(x, -y); 
        }
    }

    if (x < 0 && y > 0){
        if (-x < y){ 
            return x;
        }else {
            return -modulo(-x, y); 
        }
    }

    if (x < 0 && y < 0){
        if (-x < -y){
            return x;
        } else {
            return -modulo(-x,-y);
        }
    }

}

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    if (x === 0 || y === 0){
        return 0;
    }

    if (x === 1){
        return y;
    }

    if (y === 1){
        return x;
    }

    if (x > 0 && y > 0){
        return x + multiply(x, y - 1);
    }

    if (x < 0 && y < 0){
        return multiply(-x,-y);
    }

    if ((x < 0 && y > 0) || (x > 0 && y < 0)){
        return -multiply(-x,y);
    }

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

    var count  = 0;

    if (x === 0 && y === 0){
        return NaN;
    }

    if (x === 0){
        return 0;
    }

   if (x === y){
       return 1;
   }

   if (x > y && (x > 0 && y > 0)){ 
       count = 1 + divide(x-y, y);
   }

   if (-x > -y && (x < 0 && y < 0)){ 
    count = 1 + divide(-x+y, -y);
    }

    if (-x < -y && (x < 0 && y < 0)){ 
        return 0;
        }

    if (x > y && ((x > 0 && y < 0) || (x < 0 && y > 0))){ 
        count = -(1 + divide(-x-y, y));
    }

   if (x < y){
       return 0;
   }

   return count;


};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

    if (x === y) return x;
    if (x === 0) return y;
    if (y === 0) return x; 
    if ( x === 1 || y === 1) return 1;
    if (x < 0 || y < 0) return null;

    return gcd(y, x - (y * (Math.floor(x/y))));
}

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) return true;
    if (str1.length !== str2.length) return false;
    if (str1.length === 1){
        if (str1[0] === str2[0]){
        return true;
        } else {
        return false;
        }
    }
    if (str1.length > 1){
        if (str1[0] === str2[0]){
            return compareStr(str1.slice(1), str2.slice(1));
        } else {
            return false;
        }
    }
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    if (str.length === 0) return [];
    if (str.length === 1) {
        let arr = [];
        arr.push(str[0]);
        return arr;
    }
    if (str.length > 1){
        let arr = [];
        arr.push(str[0]);
        arr = arr.concat(createArray(str.slice(1)));
        return arr;
    }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length === 0 || array.length === 1) return array;

    if (array.length > 1){
        var newArr = [];
        newArr.push(array.pop());
        return newArr.concat(reverseArr(array));
    }

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0) return [];
    if (length === 1){
        var arr = [];
        arr.push(value);
        return arr;
    }
    if (length < 0) return null;
    if (length > 1){
        var newArr = [];
        newArr.push(value);
        return newArr.concat(buildList(value, length - 1));
    }

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {

    if (n === 0) return [];
    if (n === 1) return [n.toString()];

    if (n > 1){
        if (n % 15 === 0){
            var arr = ['FizzBuzz'];
            return fizzBuzz(n - 1).concat(arr);    
        }
        if (n % 5 === 0){
            var arr = ['Buzz'];
            return fizzBuzz(n - 1).concat(arr); 
        }
        if (n % 3 === 0){
            var arr = ['Fizz'];
            return fizzBuzz(n - 1).concat(arr); 
        }
        var arr = [n.toString()];
        return fizzBuzz(n - 1).concat(arr);
    }
    
};

// 20. Count the occurence of a value in a list.

var countOccurrence = function(array, value) {

    if (array.length === 0) return 0;
    if (array.length === 1){
        var occurrence = 0;
        if (array[0] === value){
            occurrence++;
        }
        return occurrence;
    }
    if (array.length > 1){
        var occurrence = 0;
        if (array[0] === value){
            occurrence++;
        }
        return occurrence + countOccurrence(array.slice(1), value);
    }

};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    
    if (array.length === 0) return [0];
    if (array.length === 1){
        var resultArr = [];
        resultArr.push(callback(array[0]));
        return resultArr;
    }
    if (array.length > 1){
        var resultArr = [];
        resultArr.push(callback(array[0]));
        return resultArr.concat(rMap(array.slice(1), callback));
    }

};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, targetKey) {

    function isObject(val){
        if (Array.isArray(val) || val === null) return false;
        if (typeof val === "function" || typeof val === 'string' || typeof val === 'number' || typeof val === 'undefined') return false;
        if (typeof val === 'boolean' || typeof val === 'symbol') return false;
        else {
            return true;
        }
    }

    if (Object.keys(obj).length === 0) return 0;
    if (Object.keys(obj).length > 0){
        var count = 0;
        
        for (var key in obj){
            if (key === targetKey){
                count ++;
            }
            if (isObject(obj[key])){
                count = count + countKeysInObj(obj[key], targetKey);
            }
        }
        return count;
    }

};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, targetValue) {
    
    function isObject(val){
        if (Array.isArray(val) || val === null) return false;
        if (typeof val === "function" || typeof val === 'string' || typeof val === 'number' || typeof val === 'undefined') return false;
        if (typeof val === 'boolean' || typeof val === 'symbol') return false;
        else {
            return true;
        }
    }
    
    if (Object.keys.length === 0) return {};
    if (Object.keys.length > 0){
        var count = 0;
        for (var key in obj){
            if (obj[key] === targetValue){
                count++;
            }
            if (isObject(obj[key])) {
                count = count + countValuesInObj(obj[key], targetValue);
            }
        }
        return count;
    }


};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

    function isObject(val){
        if (Array.isArray(val) || val === null) return false;
        if (typeof val === "function" || typeof val === 'string' || typeof val === 'number' || typeof val === 'undefined') return false;
        if (typeof val === 'boolean' || typeof val === 'symbol') return false;
        else {
            return true;
        }
    }

    if (Object.keys(obj).length === 0) return 0;
    if (Object.keys(obj).length > 0){
        
        for (var key in obj){
            if (key === oldKey){ // update first level keys
                obj[newKey] = obj[key];
                delete obj[key];
            }
            if (isObject(obj[key])){ // if value at the key is an object, run recurssion to check for inner keys
                replaceKeysInObj(obj[key], oldKey, newKey);
            }
        }
        return obj;
    }

};


// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    var result = [];
    var innerArr = [];
    if (n <= 0) return null;
    if (n === 1) return [0,1];
    if (n > 1){
        innerArr.push(fibonacci(n - 1)[fibonacci(n-1).length - 1] + fibonacci(n - 1)[fibonacci(n-1).length - 2]);
        result = fibonacci(n - 1).concat(innerArr);
        return result;
    }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    var fibArr = [];
    var innerArr = [];
    if (n === 0) return 0;
    if (n < 0) return null;
    if (n === 1) return [0,1][n];
    if (n > 1){
        innerArr.push(fibonacci(n - 1)[fibonacci(n-1).length - 1] + fibonacci(n - 1)[fibonacci(n-1).length - 2]);
        fibArr = fibonacci(n - 1).concat(innerArr);
        return fibArr[n];
    }
};


// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    var resultArr = [];
    if (array.length === 0) return [];
    
    if (array.length > 0){
        resultArr.push(array[0].toUpperCase());
        resultArr = resultArr.concat(capitalizeWords(array.slice(1)));
        return resultArr;
    }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    var resultArr = [];
    if (array.length === 0) return [];
    
    if (array.length > 0){
        var wordArr = array[0].split('');
        wordArr[0] = wordArr[0].toUpperCase();
        var wordCapitalizedJoined = wordArr.join('');
        resultArr.push(wordCapitalizedJoined);

        resultArr = resultArr.concat(capitalizeFirst(array.slice(1)));
        return resultArr;
    }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

    function isEven(num){
        if (num % 2 === 0) return true;
        return false;
    }

    function isObject(val){
        if (Array.isArray(val) || val === null) return false;
        if (typeof val === "function" || typeof val === 'string' || typeof val === 'number' || typeof val === 'undefined') return false;
        if (typeof val === 'boolean' || typeof val === 'symbol') return false;
        else {
            return true;
        }
    }

    var sum = 0;

    for (var key in obj){
        if (isEven(key[0])){ // same here 
            sum = sum + key[0]; // or just key, not sure since this is technically a string?
        };
        if (isObject(obj[key])){
            sum = sum + nestedEvenSum(obj[key]);
        }
        if (typeof obj[key] === 'number'){ 
            if (isEven(obj[key])){
                sum = sum + obj[key];
            }
        }
    }
    
    return sum;

};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    var result = [];
    
    if (array.length === 0) return [];
    if (array.length > 0){
        if (typeof array[0] === 'number'){
            result.push(array[0]);
        }
        if (Array.isArray(array[0])){
            result = result.concat(flatten(array[0]));
        }
        result = result.concat(flatten(array.slice(1)));
    }

    return result;
};



// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, resultObj = {}) {
    if (str.length === 0) return {};
    if (str.length > 0){
        if (resultObj[str[0]]){
            resultObj[str[0]]++;
        }else {
            resultObj[str[0]] = 1;
        }
        letterTally(str.slice(1), resultObj);
        return resultObj;
    }
    
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

// run through and check for consecutive duplicates, if something follows itself, delete it
// then call the function again on the returned string, several times until there are no more duplicates
// at which point you should return 

var compress = function(inputArr){

    // base case -- there are no consecutive duplicates

    var noDupTest = function(testArr){
        var result = true;
        testArr.forEach((ele, index, arr) => {
            if (ele === arr[index - 1]){
                result = false;
            }
        });
        return result;
    } // return false if there are still duplicates 

    if (inputArr.length === 1 || inputArr.length === 0) return inputArr;

    if (noDupTest(inputArr)) return inputArr;

    else {
        
        var interimArr= [];

        inputArr.forEach((num, index, arr) => {
            if (num !== arr[index - 1]){
                interimArr.push(num);
            }
        });

        return compress(interimArr);

    }


}


// using recurssion and default variable ...
// var compress = function(inputArr, resultArr = []){

//     if (inputArr.length === 0) return resultArr;
//     if (inputArr.length === 1) return inputArr;
//     if (inputArr.length > 1){
//         // if input array [0] does not equal the last value in result arr, push it into result arr
//         if (inputArr[0] !==  resultArr[resultArr.length - 1]){ 
//             resultArr.push(inputArr[0]);
//         }
        
//         compress(inputArr.slice(1), resultArr);
//         return resultArr;
//     }

// }


// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]


var augmentElements = function(array, newNum) {
    if (array.length === 0) return array;

    if (array.length > 0){
        
        array[0].push(newNum);
        augmentElements(array.slice(1), newNum);
        return array;
    }
    
};

var augResult = augmentElements([[],[3],[7]], 5);
augResult 


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(inputArr){

    // base case -- there are no consecutive zero duplicates

    var noDupTest = function(testArr){
        var result = true;
        testArr.forEach((ele, index, arr) => {
            if (ele === 0 && arr[index - 1] === 0){
                result = false;
            }
        });
        return result;
    } // return false if there are duplicate zeroes 

    if (inputArr.length === 1 || inputArr.length === 0) return inputArr;

    if (noDupTest(inputArr)) return inputArr;

    else {
        
        var interimArr= [];

        inputArr.forEach((num, index, arr) => {
            if (num !== 0) interimArr.push(num);
            
            if (num === 0 && num !== arr[index - 1]){
                interimArr.push(num);
            }
        });

        return minimizeZeroes(interimArr);

    }

}

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array) {
    var resultArr = array.slice();
    
    if (resultArr.length === 0) return resultArr;
    
    if (resultArr.length === 1){
        if (resultArr[0] === 0) return resultArr;
        if (resultArr[0] < 0){
            resultArr[0] = resultArr[0] * -1;
            return resultArr;
        }
        if (resultArr[0] > 0){
            return resultArr;
        } 
    }

    if (resultArr.length > 1){ // will be able to delete abouve and make this > 0
        if (resultArr[0] < 0){
            resultArr[0] = resultArr[0] * -1;
        }
        if (resultArr[1] > 0){
            resultArr[1] = resultArr[1] * -1;
        }
        return resultArr.slice(0,2).concat(alternateSign(resultArr.slice(2)));
    }

};


var alternateResult = alternateSign([2,7,8,3,1,4]);
alternateResult

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    
    var arrOfWords = str.split(' ');
    arrOfWords


    if (arrOfWords.length === 0) return str;

    if (arrOfWords.length === 1){
        if (arrOfWords[0] === '0'){
            arrOfWords[0] = 'zero';
        }
        if (arrOfWords[0] === '1'){
            arrOfWords[0] = 'one';
        }
        if (arrOfWords[0] === '2'){
            arrOfWords[0] = 'two';
        }
        if (arrOfWords[0] === '3'){
            arrOfWords[0] = 'three';
        }
        if (arrOfWords[0] === '4'){
            arrOfWords[0] = 'four';
        }
        if (arrOfWords[0] === '5'){
            arrOfWords[0] = 'five';
        }
        if (arrOfWords[0] === '6'){
            arrOfWords[0] = 'six';
        }
        if (arrOfWords[0] === '7'){
            arrOfWords[0] = 'seven';
        }
        if (arrOfWords[0] === '8'){
            arrOfWords[0] = 'eight';
        }
        if (arrOfWords[0] === '9'){
            arrOfWords[0] = 'nine';
        } 
        return arrOfWords[0];
    }

    if (arrOfWords.length > 1){
        var interimEle = arrOfWords[0]


        if (arrOfWords[0] === '0'){
            arrOfWords[0] = 'zero';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
            // resultStr = arrOfWords.join(' ');
            // return resultStr[0].concat(numToText(resultStr.slice(1)));
        }
        if (arrOfWords[0] === '1'){
            arrOfWords[0] = 'one';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '2'){
            arrOfWords[0] = 'two';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '3'){
            arrOfWords[0] = 'three';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '4'){
            arrOfWords[0] = 'four';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '5'){

            arrOfWords[0] = 'five';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '6'){
            arrOfWords[0] = 'six';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '7'){
            arrOfWords[0] = 'seven';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        }
        if (arrOfWords[0] === '8'){
            arrOfWords[0] = 'eight';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
            // resultStr = arrOfWords.join(' ');
            // return resultStr[0].concat(numToText(resultStr.slice(1)));
        }
        if (arrOfWords[0] === '9'){
            arrOfWords[0] = 'nine';
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
        } else { // if the first element in the words array is not a number, move out without changing it
            return (arrOfWords[0] + ' ').concat(numToText(arrOfWords.slice(1).join(' ')));
            

        }
    }
};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.

// If the node is an element node, (i think the tests are only testing for 
// element nodes) the nodeName property will return the tag name
// i think it wants us to check number of times a given tag occurs in the DOM

// input is a tag that looks like a string
// and a node

// output is a number

var tagCount = function(tag, node = document.documentElement) {

    var count = 0;

    if (node.childNodes){

        if (node.childNodes.length === 0) return 0;
        if (node.childNodes.length > 0){

            node.childNodes.forEach((firstLevelChild, ind, arr) => {

                // check the first child for the tag 
                if (firstLevelChild.nodeName === tag.toUpperCase()){
                    count ++; 
                }
        
                // check to see if the first child has children of its own, if so, check them
                if (firstLevelChild.childNodes.length > 0){
                    count = count + tagCount(tag, firstLevelChild);
                }

            });
    
        }

    }

    return count;


};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

// base case is when there is only one number left in the array
// in each turn you choose a guess that divides the set of reasonalbe guesses into two ranges of roughly the same size
// returns if it is too high or too low; allows you to eliminate about half ot he reasonable guesses
// should guess half way between the mix and max to divide in two; min + max / 2 = halfway point/your guess 

// inputs: the array we are searching, the value we're looking for, the min index for searching range, the max index for searching range
// output: index where the target is located in the array

var binarySearch = function(array, target, min = 0, max = array.length - 1) {
    let currentGuess = Math.floor((min + max)/2);
    
    if (array[currentGuess] === target){
        return array.indexOf(array[currentGuess]);
    }
    
    if (min === max) return null;
        
    if (target < array[currentGuess]){
        return binarySearch(array, target, min, currentGuess - 1); 
    }
        
    if (target > array[currentGuess]){
        return binarySearch(array, target, currentGuess + 1, max);
    } else {
        return null;
    }

};

// var test5 = binarySearch([-4,-3,-2,-1,0,1,2,3], -2); // 2
// test5
// var test4 = binarySearch([-4,-3,-2,-1,0,1,2,3], 2); // 6
// test4
// var test3 = binarySearch([-5,-4,-3,-2,-1], -2); // 3
// test3
// var firstTestArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// var test1 = binarySearch(firstTestArr, 5); // 5
// test1
// var test2 = binarySearch([1,2,3,4,5,6], 8); // null
// test2

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms

// input is an unsorted array
// output is the array sorted

// reasoning: it's easier to sort to sorted arrays than one unsorted one
// once we have the 2 sorted arrays, we'll compare the items one by one and add the smaller one first in the
// result array

var mergeSort = function(array) {
    
    if (array.length === 0 || array.length === 1) return array;

    let middle = Math.floor((0 + array.length - 1) / 2);
    let leftHalf = array.slice(0, middle + 1);
    let rightHalf = array.slice(middle + 1);

    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
    
};

function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  } // will merge two sorted arrays into one


// 40. Deeply clone objects and arrays.

// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false b/c as opposed to reguarly shallow copy by reference, obj2 has it's own allocation to memory
var clone = function(input) {
    if (Array.isArray(input)){
        if (input.length === 0) return input;
        
        var resultArr = [];
        
        input.forEach((ele, index, arr) => {
            if (typeof ele === 'number' || typeof ele === 'string' || ele === null 
            || ele === undefined || typeof ele === 'boolean'){ // if these data types, do copy by value, regularly
                resultArr.push(ele);
            } else if (Array.isArray(ele) || typeof ele === 'object'){
                resultArr.push(clone(ele));
            } 
        });

        return resultArr;

    } else {

        if (Object.keys(input).length === 0) return input;
        
        var resultObj = {};
    
        for (var key in input){
            if (typeof input[key] === 'number' || typeof input[key] === 'string' || input[key] === null || input[key] === undefined || typeof input[key] === 'boolean'){ // if these data types, do copy by value, regularly
                resultObj[key] = input[key];
            } else if (Array.isArray(input[key]) || typeof input[key] === 'object'){
                console.log(input[key]); 
                resultObj[key] = clone(input[key]);
            }
        }

        return resultObj;
    }

};

