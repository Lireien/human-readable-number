module.exports = function toReadable(number) {
    const beforeTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const stringNum = number.toString();
    
    if (number === 0) return "zero";
    // if (number < 20) return beforeTwenty[number];
    if (number < 100) return getNumberUpToAHundred(number);
    if (number < 1000) {
        let answ;
        if (number % 100 === 0) {
            answ = `${beforeTwenty[stringNum[0]]} hundred`;
        } else {
            answ = `${
                beforeTwenty[stringNum[0]]
            } hundred ${getNumberUpToAHundred(number % 100)}`;
        }
        return answ;
    }

    function getNumberUpToAHundred(number) {
        const stringNum = number.toString();
        if (number < 20) return beforeTwenty[number];
        if (number % 10 === 0) {
            return dozens[stringNum[0]];
        }
        return `${dozens[stringNum[0]]} ${beforeTwenty[stringNum[1]]}`;
    }
};
