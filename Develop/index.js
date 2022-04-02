// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else 
          {
            console.log('Please provide us your name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        },
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter your email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else 
        {
          console.log('Please provide your email address!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project? (Required)',
        validate: (projectNameInput) => {
            if (projectNameInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps required to install and run your project.',
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide the steps for installation!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how to use your project.',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide instructions for usage!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'contributing',
        message:
            'Provide the name(s) of the people who contributed on this project.',
        validate: (contributingInput) => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please provide the names of collaborators!');
            }
        },
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide the tests for your application with examples',
      validate: (testsInput) => {
        if (testsInput) {
            return true;
        } else {
            console.log('Please provide the tests!');
        }
    },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use on your project?',
        choices: [
          "MIT License",
          "Boost Software License 1.0",
          "The Unlicense",
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
        ],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw new Error(err);

    console.log("README created! Check it out in the dist folder of the directory.")
  });
}

// TODO: Create a function to initialize app
function init() {
  // Uses the questions created above to drive the inquirer
  inquirer.prompt(questions)
  .then((answers) => {
    // Answers from the questions go on to create the README
    writeToFile("professionalREADME.md", answers);
  });
}

// Function call to initialize app
init();
