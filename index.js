// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// importing the generateMarkdown function
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'please type in the exact name of your github repository',
    },
    {
        type: 'input',
        name: 'description',
        message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

        - What was your motivation?
        - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
        - What problem does it solve?
        - What did you learn?
        
        `,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'which license would you like to add to your README?',
        choices: ['MIT','Apache_2.0','GPLv3','BSD_3'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'please provide an email address you would like people to use to reach out with questions about your project.'
    },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
       err ? console.log(err) : console.log('successfully created readme file.')
    );
}

// function to initialize app
function init() {
    inquirer
    .prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
