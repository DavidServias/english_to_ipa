let Data = require("./en_US.json");
Data = Data["en_US"][0];

function convertToIpa(inputString) {
    let result = ''; // stores the ipa result for each word.
    let inputWords = inputString.split(" ");  // separate string into words   
    let outputString = "";
    // convert each word, and add result to outputString.
    inputWords.forEach(function(word) {
        word = word.toLowerCase().replace(/[^a-z]/g, ''); //to lowercase
        // remove punctuation
        if (Data[word] !== undefined) {
            result = Data[word]; // get ipa
            result = result.slice(1); // remove openingslashes 
            result = result.slice(0, result.indexOf("/")); // remove final slash
            outputString += result + " ";
        };
    });
     
    return outputString;
}

// get string from command line args or somewhere
let args = process.argv.slice(2);
let inputString = args.join(" ");
let outputString = convertToIpa(inputString);

console.log(outputString);
