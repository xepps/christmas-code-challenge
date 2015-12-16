function getInput() {
    return {
        "people": parseInt(process.argv[2]),
        "plants": parseInt(process.argv[3])
    };
}

function outputAnswer(answer) {
    console.log(answer);
}

var input = getInput(),
    weeks = 0,
    fruits = 0;

while(fruits < input.people) {
    weeks += 1;
    fruits += input.plants;
    input.plants += fruits;
}

outputAnswer(weeks + 1);
