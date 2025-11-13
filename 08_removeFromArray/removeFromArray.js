const removeFromArray = function(arr, ...args) {
    // return the elements not from ...args
    return arr.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
