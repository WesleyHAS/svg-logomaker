class Shape {
  constructor (width, height) {
    this.width = width;
    this.height = height;
  }
}

const circle = new Shape();
const square = new Shape(110, 110);
const triangle = new Shape();


function renderCircle () {
  return `
  <svg version="1.1"
    width="${width}" height="${height}"

    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${shapeColor}"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

  </svg>
  `
}

function renderSquare () {
  return `
  <svg version="1.1"
    width="${width}" height="${height}"

    <rect width="${width}" height="${height}}" fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

  </svg>
  `
}

function renderRectangle () {
  return `
  <svg version="1.1"
  width="${width}" height="${height}"

  <rect width="${width}" height="${height}}" fill="${shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

  </svg>
  `
}

function renderText () {
  return `
  <svg version="1.1"
  width="${width}" height="${height}"

  <text x="${x}" y="${y}" font-size="${fontSize}" text-anchor="${textAnchor}" fill="${textColor}">${text}</text>

  </svg>
  `
}

module.exports = shapes;