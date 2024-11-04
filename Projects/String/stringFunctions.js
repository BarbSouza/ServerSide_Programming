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

//Function to validate email format

function validateEmail(email){

    const emailRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(email)){
        return email.toLowerCase();
    } else {
        return "Invalid email format!";
    }
}

//Manipulating and formatting data from external sources, such as CSV files or databases

//Simulate the CSV Data Structure
//Using Templates Literals
const csvData = `"John Doe", 30, "John.Doe@example.com"
"Jane Smith", 25, "Jane_Smith@example.com"
"Michael Johnson", 37, "michaelJohnson@example.com"`;

//Function to process this data
function processCSVData(data) {
    //Splitting the CSV data by lines and then by commas (columns and rows)
    const rows = data.split('\n'); //its seperated by line break
    const formattedData = rows.map(row => {
        //Iterating and mapping all the values in the rows
        //"Michael Johnson", 37, "michaelJohnson@example.com" csv ,
        const columns = row.split(',');
        //C and R "Michael Johnson" == [0, 2]
        //c and r
        return {
            // return a key value pair data structure]
            name: columns[0].replace(/"/g, '').trim(),
            //name == C0 and R0 == "John Doe" -> "" = John Doe
            age: parseInt(columns[1]),
            email: columns[2].replace(/"/g, '').trim()
            //Name: John Doe
            //Age: 30
            //Email: John.Doe@example.com
        };
    });
    return formattedData; // contais the C and R matrix as Key:Value
}

const formattedcsvData = processCSVData(csvData);

console.log("Formatted Data: ", formattedcsvData)

const userEmail = "John.Doe@example.com";

const formattedEmail = validateEmail(userEmail);

console.log(userEmail);
console.log(formattedEmail);


// Perform a value input dynamically from a variable reference

let name = "Mike Tyson";
let age = 60;

//Create a String that can be formatted
let formattedString = `My name is ${name} and I am ${age} years old`

console.log(formattedString);
