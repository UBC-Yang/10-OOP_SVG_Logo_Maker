// Import all necessary files for application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Array of questions for user input
const questions = [
    // Enter text for the logo. (Must npt be more than 3 characters)
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter text for the logo. (Must npt be more than 3 characters)',
        validate: input => input.length <= 3 || 'Text must be 3 characters or fewer.'
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

// Function to generate SVG content
function generateSVG({logoText, textColor, shape, shapeColor}) {
    let shapeInstance;

    switch (shape) {
        case 'circle':
            shapeInstance = new Circle();
            break;
        case 'square':
            shapeInstance = new Square();
            break;
        case 'triangle':
            shapeInstance = new Triangle();
            break;
    }

    shapeInstance.setColor(shapeColor)

    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="120" fill="${textColor}" text-anchor="middle" font-size="65px">${logoText}</text>
    </svg>
    `.trim();
}

// Function write the SVG file from user input
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('LOGO.svg generated')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const svgContent = generateSVG(answers);
        writeToFile('examples/logo.svg', svgContent);
    }).catch(error => {
        console.error("An error occurred:", error);
    });
}

// Function call to initialize app
init();



    