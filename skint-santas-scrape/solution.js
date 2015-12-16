function getInput() {
    var inputFile = process.argv[2],
        fs = require('fs');
    return JSON.parse(fs.readFileSync(inputFile));
}

function outputAnswer(answer) {
    answer.forEach(function (solution) {
        console.log(
            Object.keys(solution).reduce(function (carry, key) {
                carry += carry ? ', ' : '';
                return carry + key + ' ' + solution[key];
            }, '')
        );
    });
}

function goShopping(market, goal) {
    if(goal < 0) return [];
    if(goal == 0) return [{}];
    if(Object.keys(market).length == 0) return [];

    market = JSON.parse(JSON.stringify(market));
    var item = Object.keys(market)[0],
        price = market[item],
        take = goShopping(market, goal - price).map(
            function (answer) {
                if(answer[item]) {
                    answer[item] += 1
                } else {
                    answer[item] = 1;
                }
                return answer;
            });

    delete market[item];
    return take.concat(goShopping(market, goal));
}

outputAnswer(goShopping(getInput(), 500));

