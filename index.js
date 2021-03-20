//import needed packages
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//Questions Array to be get needed data
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
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
    {
        type: 'input',
        name: 'systems',
        message: 'What systems and technology was used?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?',
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
function writeToFile(filetype, data) {
    fs.writeFile(filetype, data, (err) =>
        err ? console.log(err) : console.log('Created your README!')
    )
}


// function that runs it all
function init() {
    //using inquirer, 
    //have our questioins go through node to collect our data
    inquire
        .prompt(questions)
        //then take the data and pass through write to file
        .then((data) => {
            let markdownPageContent = generateMarkdown(data);
            console.log(markdownPageContent);
            const filename = 'README.md' ;
            writeToFile(filename, markdownPageContent);
        })
}

// run function to get it started
init()
