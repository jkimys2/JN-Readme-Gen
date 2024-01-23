// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a valid email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please provide a name for your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description for your project:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Your project needs a description! Please enter a description."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps to installing your project?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a value!");
          return false;
        }
      },
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions on how your project is used:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Let users know how to use your project!");
            return false;
          }
        },
      },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Would you like to include a license?",
      default: false,
    },
    {
      type: "list",
      name: "license",
      message: "Which licenses would you like to include?",
      choices: ["CC0", "GNU", "MIT"],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
        type: "input",
        name: "contributing",
        message: "How can other users contribute to your project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a way others can help contribute!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "tests",
        message: "How can uesrs test your application?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Let users know how they can test your app!");
            return false;
          }
        },
      },
  ]),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
