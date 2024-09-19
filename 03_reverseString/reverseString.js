const reverseString = function(string) {
    // Split the string into an array of characters
    const charArray = string.split('');
    
    // Reverse the array
    const reversedArray = charArray.reverse();
    
    // Join the array back into a string
    const reversedString = reversedArray.join('');
    
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
