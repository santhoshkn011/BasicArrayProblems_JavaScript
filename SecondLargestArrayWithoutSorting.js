let numberArray = new Array();
let largestNumber = 100;
let secondLargestNumber = 100;
let smallestNumber = 999;
let secondSmallestNumber = 999;

function generateRandomNumber() {
    return Math.floor(Math.random()*899) + 100; //random 3 digit number
}

console.log("Ten random 3 digit numbers in Array: ")
for (let index = 0; index < 10; index++) {
    numberArray.push(generateRandomNumber());
}
console.log(numberArray);

for (index = 0; index < numberArray.length; index++) {
    let currentElement = numberArray[index];
    if (currentElement > largestNumber)
        largestNumber = currentElement;

    if (currentElement < smallestNumber)
        smallestNumber = currentElement;
}

console.log("Largest Element : " + largestNumber);
console.log("Smallest Element : " + smallestNumber);

for (index = 0; index < numberArray.length; index++) {
    let currentElement = numberArray[index];
    if (currentElement > secondLargestNumber && currentElement < largestNumber)
        secondLargestNumber = currentElement;

    if (currentElement < secondSmallestNumber && currentElement > smallestNumber)
        secondSmallestNumber = currentElement;
}

console.log("Second Largest Element : " + secondLargestNumber);
console.log("Second Smallest Element : " + secondSmallestNumber);