// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "title",
  },
  {
    type: "list",
    message: "what license do you want for your readme?",
    name: "license",
    choices: ["none", "MIT", "APM", "Bower"],
  },
  {
    type: "input",
    message: "enter the description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "enter installation instructions",
    name: "intallation",
  },
  {
    type: "input",
    message: "enter usage information",
    name: "usageInfo",
  },
  {
    type: "input",
    message: "enter your contribution guidelines:",
    name: "contributing",
  },
  {
    type: "input",
    message: "enter the tests",
    name: "tests",
  },
  {
    type: "input",
    message: "what is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "what is your email?",
    name: "email",
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
