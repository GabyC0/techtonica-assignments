//Challenge 1:
// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.


//pseudo
//declare a function -> 1 param(num)
//condition -> num divisible by 3
//return true if it is
//return false if not

//Test Cases
//in: 3 out: true
//in: 1 out: false
//in: 0 out: true
//in: 9 out: true
//in: -3 out: true
//in: "3" out: "not a valid input"
//in: "4" out: "not a valid input"

function divisibleBy3(num) {

    if(typeof num != 'number') {
        return 'Not a valid input';
    } else if (num % 3 === 0) {
        return true;
     } else if (!num % 3 === 0) {
         return false;
      }
}

 console.log(divisibleBy3(3)); //true
 console.log(divisibleBy3(1)); //false
 console.log(divisibleBy3(0)); //true
 console.log(divisibleBy3(9)); //true
 console.log(divisibleBy3(-3)); //true
 console.log(divisibleBy3(-1)); //false
 console.log(divisibleBy3("3")); //"Not a valid input"
 console.log(divisibleBy3("4")); //"Not a valid input"




//Challenge 2:
// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

//pseudo
//declare a function that takes a string
//find the length of the string
//return length

//Test Cases
//in: world out: 5
//in: hello world out: 11
//in: I out: 1
//in: "" out: 0
//in: 3 out: "not a string"

function lengthOfStr(str) {

     if(typeof str !== 'string') {
         console.log("Not a string")
     } else {
        console.log(str.length);
     }
}

lengthOfStr('world'); //5
lengthOfStr('hello world'); //11
lengthOfStr('I'); //1
lengthOfStr(''); //0
lengthOfStr(3); //Not a string




//Challenge 3: 
// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")


//pseudo
//create an array of numbers
//return the first item
//return the last item using slice
//add new item to end using push
//add an array to the array using shift
//return first item in first item of array

let arrOfNums = [5, 10, 15, 20];

console.log(arrOfNums[0]); //5
console.log(arrOfNums.slice(-1)); //20
//or console.log(arrOfNums[3]);
console.log(arrOfNums.push(25)); //[5, 10, 15, 20, 25];
    console.log(arrOfNums);
console.log(arrOfNums.unshift([1,2,3,4])); //[ [ 1, 2, 3, 4 ], 5, 10, 15, 20, 25 ]
    console.log(arrOfNums);
console.log(arrOfNums[0][0]); //1




//Challenge 4:
// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.


//pseudo
//declare a function 
//declare a variable with current time
//declare a variable witih midnight time
//subtract times
//return amount

function timeSinceMidnight() {
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
        console.log(currentTime);
    let midnight = new Date(2022, 1, 3,00,00,00).getTime();
        console.log(midnight);
    let timeDiff = currentDate - midnight;
        return timeDiff/(1000 * 60);
}

timeSinceMidnight();
