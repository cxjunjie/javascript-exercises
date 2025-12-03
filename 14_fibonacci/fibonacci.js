const fibonacci = (countArg) => {
    // treat input as trash, so sanitize first
    // START OF SANITIZATION
    let count
    if (typeof countArg !== "number") {
        // if not number, parse it as an integer
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    // END OF SANITIZATION

    // INDEX
    // 1, 2, 3, 4, 5, 6, 7,  8

    // VALUE
    // 1, 1, 2, 3, 5, 8, 13, 21

    // let firstPrev = 1;
    // let secondPrev = 0;

    // for (let i = 2; i <= count; i++) {
    //     let current = firstPrev + secondPrev;
    //     secondPrev = firstPrev;
    //     firstPrev = current;
    // }

    // return firstPrev;

    const fib = [0, 1];
    // create the full array of fib sequence until count
    // insert element from the second index onwards
    // loop will stop at count index
    for (let i = 2; i <= count; i++) {
        // add prev 2 values
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[count];

};

// Do not edit below this line
module.exports = fibonacci;
