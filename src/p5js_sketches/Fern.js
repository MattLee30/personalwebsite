let x = 0;
let y = 0;
let nMax = 25000;

let F1 = [[0.00, 0.00, 0.00],
          [0.00, 0.16, 0.00],
          [0.00, 0.00, 1.00]];

let F2 = [[0.85, 0.04, 0.00],
          [-0.04, 0.85, 1.60],
          [0.00, 0.00, 1.00]];

let F3 = [[0.20, -0.26, 0.00],
          [0.23, 0.22, 1.60],
          [0.00, 0.00, 1.00]];

let F4 = [[-0.15, 0.28, 0.00],
          [0.26, 0.24, 0.44],
          [0.00, 0.00, 1.00]];

class coordinateMatrix {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getMatrix() {
    return [[this.x], [this.y], [1]]; 
  }
}

function matrixMultiply(matrix1, matrix2) {
  const result = [0, 0, 0]; 
  for (let i = 0; i < 3; i++) {
    result[i] = 0;
    for (let j = 0; j < 3; j++) {
      result[i] += matrix1[i][j] * matrix2[j][0]; 
    }
  }

  return result;
}

function matrixChooser() {
  let probChoice = Math.random();

  if (probChoice < 0.01) {
    return F1;
  } else if (probChoice < 0.86) {
    return F2;
  } else if (probChoice < 0.93) {
    return F3;
  } else {
    return F4;
  }
}

export const FernSketch = (p) => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(255);
  };

  p.drawPoint = () => {
    p.colorMode(p.HSB, 1.0);
    p.stroke(y / 9.9983, 255, 255);
    p.strokeWeight(2);

    let px = p.map(x, -2.182, 2.6558, 0, p.width);
    let py = p.map(y, 0, 9.9983, p.height, 0);

    p.point(px, py);
  };

  p.nextPoint = () => {
    let nodeCoordinates = new coordinateMatrix(x, y).getMatrix();
    let matrixChoice = matrixChooser();

    let matrixCalc = matrixMultiply(matrixChoice, nodeCoordinates);

    x = matrixCalc[0];
    y = matrixCalc[1];
  };

  p.draw = () => {
    for (let i = 0; i < nMax; i++) {
      p.drawPoint();
      p.nextPoint();
    }
  };
};
