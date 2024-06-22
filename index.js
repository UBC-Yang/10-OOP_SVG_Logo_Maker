// Import all necessary files for application
const inquirer = require('inquirer');
const fs = require('fs');
const {circle, square, triangle} = require('./lib/shapes');

// Array of questions for user input
const questions = [
    // Enter text for the logo. (Must npt be more than 3 characters)
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter text for the logo. (Must npt be more than 3 characters)'
    },
    // Enter a text color
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color'
    },
    // Select a shape for the logo (Use arrow keys): circle, square, triangle
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo. (Use arrow keys)',
        choices: [
            'circle',
            'square',
            'triangle'
        ]
    },
    // Enter a shape color
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color'
    }
];

// Function write the SVG file from user input
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log('LOGO.svg generated')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
}

// Function call to initialize app
init();



    