const palindromes = function (str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return reversedStr === cleanedStr;
};

// Do not edit below this line
module.exports = palindromes;
