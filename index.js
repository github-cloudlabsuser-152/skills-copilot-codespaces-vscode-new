// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript

const sentence = "Hello, world!";
const reversedSentence = sentence.split("").reverse().join("");
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

const data = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson"
];

const names = data.map(item => {
    const reversedName = item.split("").reverse().join("");
    const capitalizedName = reversedName.charAt(0).toUpperCase() + reversedName.slice(1);
    return capitalizedName;
});

console.log(names);

const namesArray = data.map(item => item.map(obj => obj.name));
const flattenedNames = namesArray.flat();
const extractedNames = flattenedNames.map(name => name.split(" ")[0]);
console.log(extractedNames);

