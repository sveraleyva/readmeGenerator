// packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    choices: ["none", "MIT", "APM", "Bower", ],
  },
  {
    type: "input",
    message: "enter the description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "enter installation instructions",
    name: "installation",
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

// function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  return fs.writeFileSync(fileName, markdown);
}

// function to initialize app
function init() {
  inquire.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

init();
