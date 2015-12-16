function getInput() {
    var inputFile = process.argv[2],
        fs = require('fs');
    return JSON.parse(fs.readFileSync(inputFile));
}

function outputAnswer(answer) {
    Object.keys(answer).forEach(function (key) {
        console.log(key + ': ' + answer[key]);
    });
}

function removeFromArrayByValue(array, value) {
    array.splice(array.indexOf(value), 1);
    return array;
}

var input = getInput(),
    availableMen = [],
    availableWomen = [],
    pairs = {};

Object.keys(input).forEach(function (person) {
    if (person == person.toUpperCase()) {
        availableMen.push(person);
    } else {
        availableWomen.push(person)
    }
});

while(availableMen.length) {
    var man = availableMen[0],
        woman = input[man].splice(0,1)[0];
    if (availableWomen.indexOf(woman) > -1) {
        pairs[woman] = man;
        removeFromArrayByValue(availableWomen, woman);
        removeFromArrayByValue(availableMen, man);
    } else {
        var rival = pairs[woman];
        if (input[woman].indexOf(man) < input[woman].indexOf(rival)) {
            availableMen.push(rival);
            removeFromArrayByValue(availableMen, man);
            pairs[woman] = man;
        }
    }
}

outputAnswer(pairs);
