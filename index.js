const fs = require('fs');
const generateShapes = require('./lib/shapes');
const inquirer = require('inquirer');

// Define an array of questions for the user
const questions = [
    {
      type: 'input',
      name: 'letters',
      message: 'Add up to 3 letters for your logo.',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Pick a color for the text. It can be color name or hexadecimal.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape.',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Pick a color for the shape. It can be color name or hexadecimal.',
    },
  ];

  // Function to write data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('SVG created.');
    }
  })
};

// Function to initialize the application
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const dataShapes = generateShapes(data);
      writeToFile('logo.svg', dataShapes);
    })
    .catch((err) => {
      console.error('Something went wrong:', err.message);
    });
};

  init();