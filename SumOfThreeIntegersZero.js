const prompt = require("prompt-sync")();
let integerArray = new Array();
let flag = 1;
let arraySize = prompt("Enter the size of the array : ");

console.log("Enter " + arraySize + " array values : ");
for (let index = 0; index < arraySize; index++) {
    integerArray[index] = parseInt(prompt());
}
console.log("The Array is : " + integerArray);

for (let firstIndex = 0; firstIndex < integerArray.length - 2; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < integerArray.length - 1; secondIndex++) {
        for (let thirdIndex = secondIndex + 1; thirdIndex < integerArray.length; thirdIndex++) {
            if (integerArray[firstIndex] + integerArray[secondIndex] + integerArray[thirdIndex] == 0) {
                console.log("Found Triplet");
                console.log("Elements are: " + integerArray[firstIndex] + " " + integerArray[secondIndex] + " " + integerArray[thirdIndex]);
                flag = 0;
            }
        }
    }
}

if (flag == 1)
    console.log("Triplet whose sum is 0 does not exist");