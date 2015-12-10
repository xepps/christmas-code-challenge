function getInput() {
    var inputFile = process.argv[2],
        fs = require('fs');
    return JSON.parse(fs.readFileSync(inputFile));
}

/*
   Pass your answer in the form:
   {
      A: 'b',
      B: 'c'
   }
 */
function outputAnswer(answer) {
    Object.keys(answer).forEach(function (key) {
        console.log(key + ': ' + answer[key]);
    });
}
