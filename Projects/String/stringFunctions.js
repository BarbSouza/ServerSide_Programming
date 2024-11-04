//Start by manipulating a simple string

let str = "Hello World";

//extact a substring from the string
let substring = str.substring(0, 5);

//replace a word
let newstr = str.replace("World", "Universe");

//make the str lowercase
let lowercase = str.toLowerCase();

console.log("Original String: ", str);
console.log("Substring: ", substring);
console.log("New String: ", newstr);
console.log("LowerCase: ", lowercase);

//Search and Replace
const originalStory = `The quick brown fox jumps over the lazy dog
                        The quick brown fox is know for its agility`

console.log(originalStory);

//perform the search and replace

//changes all matches (//g)
const manipulatedstory = originalStory.replace(/quick/g, "slow");
//Changes just the first match
const manipulatedstory1 = originalStory.replace("quick", "slow");

console.log(manipulatedstory);
console.log(manipulatedstory1);
