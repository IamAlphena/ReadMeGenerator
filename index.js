// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'overview',
        message: 'Give a sentance or two explaining your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select the appropriate licences',
        choices: [//find licesnces
        ]
      },
      {
        type: 'input',
        name: 'systems',
        message: 'What systems and technology was used?',
      },
      {
        type: 'input',
        name: 'credit',
        message: 'Who all contributed to this project, and any other credits needed?',
      },
      {
        type: 'input',
        name: 'use',
        message: 'Explain how to use your application',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
