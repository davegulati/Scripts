/* davegulati.com */

// Original string
let originalString = "hello world";

// Delimiter
let delimiter = " ";

// Split string into an array using the declared delimiter
let tempArray = originalString.split(delimiter);

// Capitalise each word (element) in the string (tempArray)
tempArray.forEach(capitaliseFirstLetter);

// Function to capitalise first letter of a given word
function capitaliseFirstLetter(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.substring(1);
}

// All the elements of the tempArray are joined together with the delimiter (space)
let newString = tempArray.join(delimiter);
