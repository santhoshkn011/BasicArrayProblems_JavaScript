let numberArray = new Array();


function generateRandomNumber() {
    return Math.floor(Math.random()*899) + 100; //random 3 digit number
}

console.log("Ten random 3 digit numbers in Array: ")
for (let index = 0; index < 10; index++) {
    numberArray.push(generateRandomNumber());
}
console.log(numberArray);

numberArray.sort();
console.log("The Sorted Array is:")
for (let index = 0; index < 10; index++) {
}
console.log(numberArray);

console.log("Second Largest Element : " + numberArray[8]);
console.log("Second Smallest Element : " + numberArray[1]);