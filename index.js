const fs = require('fs');
  const inquirer = require('inquirer');
  const { Circle, Square, Triangle } = require('./lib/shapes');
  
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
      message: 'Pick a color for the text. It can be a color name or hexadecimal.',
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
      message: 'Pick a color for the shape. It can be a color name or hexadecimal.',
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
    });
  }
  
  // Function to initialize the application
  function init() {
    inquirer
      .prompt(questions)
      .then(data => {
        const { shape, letters, textColor, shapeColor } = data;
  
        // Check if the number of letters exceeds the limit (3)
        if (letters.length > 3) {
          console.error('Number of letters cannot exceed 3.');
          return;
        }
  
        let shapeObj;
  
        switch (shape) {
          case 'Circle':
            shapeObj = new Circle(letters, textColor, shapeColor);
            break;
          case 'Square':
            shapeObj = new Square(letters, textColor, shapeColor);
            break;
          case 'Triangle':
            shapeObj = new Triangle(letters, textColor, shapeColor);
            break;
          default:
            console.error('Invalid shape.');
            return;
        }
  
        const dataShapes = shapeObj.generateShape();
        writeToFile('logo.svg', dataShapes);
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      });
  }
  
  init();