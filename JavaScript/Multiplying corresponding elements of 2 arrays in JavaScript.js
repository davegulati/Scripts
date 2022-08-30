/* davegulati.com */

// Original string
let originalString = "40 1 3 4 20 | 8 19 2 39 9";

// Delimiters
let firstDelimiter = "|";
let secondDelimiter = " ";

// First split
let tempArray = originalString.split(firstDelimiter);

// Remove whitespace
let tempString1 = tempArray[0].trim();
let tempString2 = tempArray[1].trim();

// Second split
let array1 = tempString1.split(secondDelimiter);
let array2 = tempString2.split(secondDelimiter);

// Function to multiply corresponding elements of two arrays
function multiplyCorrespondingElements(array1, array2) {
    array1.forEach(function (element, index, array) {
        let result = array1[index] * array2[index];
        console.log(result);
    })
}
