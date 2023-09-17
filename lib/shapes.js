
function generateShapes(data) {
  const { shape, letters, textColor, shapeColor } = data;
  if (shape === "circle") {
    return renderCircle(data);
  } else if (shape === "square") {
    return renderSquare(data);
  } else {
    return renderTriangle(data);
  }

  function renderCircle (data) {
    return `
    <svg version="1.1" width="300" height="200">
      <circle cx="150" cy="100" r="50" fill="${shapeColor}"/>
      <text x="150" y="100" font-size="30" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${letters}</text>
    </svg>
    `
  }
  
  function renderSquare (data) {
    return `
    <svg version="1.1" width="300" height="200">
      <rect x="100" y="75" width="100" height="100" fill="${shapeColor}"/>
      <text x="150" y="125" font-size="30" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${letters}</text>
    </svg>
    `
  }
  
  function renderTriangle (data) {
    return `
    <svg version="1.1" width="300" height="200">
      <polygon points="150,50 250,150 50,150" fill="${shapeColor}"/>
      <text x="150" y="120" font-size="30" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${letters}</text>
    </svg>
    `
  }

}

module.exports = generateShapes;