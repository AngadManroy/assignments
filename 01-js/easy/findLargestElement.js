/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0){
        return undefined;
    }

    const largestNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

    return largestNumber;
    
}

module.exports = findLargestElement;