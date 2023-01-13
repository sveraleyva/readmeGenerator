// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is your github username?",
    name: "title",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  return fs.writeFileSync(fileName, markdown);
}

// TODO: Create a function to initialize app
function init() {
  inquire.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
