const fs = require('fs');
const shapes = require('./lib/shapes');
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
      name: 'text-color',
      message: 'Pick a color for the text. It can be color name or hexadecimal.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape.',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shape-color',
      message: 'Pick a color for the shape. It can be color name or hexadecimal.',
    },
  ];

  function init() {
    inquirer.prompt(questions)
  };


  init();