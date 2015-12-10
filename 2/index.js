function getInput() {
    var inputFile = process.argv[2],
        fs = require('fs');
    return JSON.parse(fs.readFileSync(inputFile));
}

console.log(getInput());

/*
    Pass your answer in the form:
    [
        {a: 1, b: 2, c: 3},
        {c: 2, d: 4}
        ...
    ]
 */
function outputAnswer(answer) {
    answer.forEach(function (solution) {
        console.log(
            Object.keys(solution).reduce(function (carry, key) {
                carry += carry ? ', ' : '';
                return carry + key + ' ' + solution[key];
            }, '')
        );
    })
}
