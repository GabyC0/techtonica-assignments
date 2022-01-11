//1. Hello Object
// Write the code, one line for each action:

// 1.Create an empty object user.
let user = {};
// 2.Add the property name with the value John.
user.name = "John";
console.log(user.name);
// 3.Add the property surname with the value Smith.
user.surname = "Smith";
// 4.Change the value of the name to Pete.
user.name = "Pete";
console.log(user.name);
// 5.Remove the property name from the object.
delete user.name;
console.log(user.name);

//2. Check for emptyness

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
   for (let key in obj) {
    return false;
   }
    return true;
}
// Should work like that:

 let schedule = {};
 console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
 //alert( isEmpty(schedule) ); // false

 //3. Sum object properties
 //We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
    let totalSum = 0;
    for (let key in salaries) {
        totalSum += salaries[key];
    }

console.log(totalSum);