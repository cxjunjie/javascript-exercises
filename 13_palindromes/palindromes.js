const palindromes = (str) => {
    // helper to check whether str
    // is only alphanumeric
    const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanStr = str
        .toLowerCase()
        .split("")
        .filter(char => alphaNum.includes(char))
        .join("")

    const reversedStr = cleanStr.split("").reverse().join("");

    return cleanStr === reversedStr;
}

// Do not edit below this line
module.exports = palindromes;
