
function generateShapes(data) {

  if (data.shape === "circle") {
    renderCircle();
  } else if (data.shape === "square") {
    renderSquare();
  } else {
    renderRectangle();
  }
  
  function renderCircle (data) {
    return `
    <svg version="1.1" width="300" height="200">
      <circle cx="150" cy="100" r="50" fill="${data.shape-color}"/>
      <text x="150" y="100" font-size="24" fill="${data.text-color}" text-anchor="middle" alignment-baseline="middle">${data.letters}</text>
    </svg>
    `
  }
  
  function renderSquare (data) {
    return `
    <svg version="1.1" width="300" height="200">
      <rect x="100" y="75" width="100" height="100" fill="${data.shape-color}"/>
      <text x="150" y="125" font-size="24" fill="${data.text-color}" text-anchor="middle" dominant-baseline="middle">${data.letters}</text>
    </svg>
    `
  }
  
  function renderRectangle (data) {
    return `
    <svg version="1.1" width="300" height="200">
      <rect x="50" y="50" width="200" height="100" fill="${data.shape-color}"/>
      <text x="150" y="100" font-size="24" fill="${data.text-color}" text-anchor="middle" dominant-baseline="middle">${data.letters}</text>
    </svg>
    `
  }

}

module.exports = generateShapes;