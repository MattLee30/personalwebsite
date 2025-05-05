export const FernSketch = (p, sketchRef) => {
  let x = 0;
  let y = 0;
  const nMax = 2500; // Reduced from 25000 to 2500 for slower speed

  const F1 = [[0.00, 0.00, 0.00], [0.00, 0.16, 0.00], [0.00, 0.00, 1.00]];
  const F2 = [[0.85, 0.04, 0.00], [-0.04, 0.85, 1.60], [0.00, 0.00, 1.00]];
  const F3 = [[0.20, -0.26, 0.00], [0.23, 0.22, 1.60], [0.00, 0.00, 1.00]];
  const F4 = [[-0.15, 0.28, 0.00], [0.26, 0.24, 0.44], [0.00, 0.00, 1.00]];

  sketchRef.current = {
    reset: () => {
      x = 0;
      y = 0;
      p.clear();
      p.background(255);
    }
  };

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(255);
    p.frameRate(10); // Set a lower frame rate (30 FPS) for a slower sketch
  };

  p.draw = () => {
    for (let i = 0; i < nMax; i++) {
      drawPoint();
      nextPoint();
    }
  };

  const drawPoint = () => {
    p.colorMode(p.HSB, 1.0);
    p.stroke(y / 9.9983, 255, 255);
    p.strokeWeight(2);

    const px = p.map(x, -2.182, 2.6558, 0, p.width);
    const py = p.map(y, 0, 9.9983, p.height, 0);

    p.point(px, py);
  };

  const nextPoint = () => {
    const nodeCoordinates = [[x], [y], [1]];
    const matrix = matrixChooser();
    const result = matrixMultiply(matrix, nodeCoordinates);
    x = result[0];
    y = result[1];
  };

  const matrixMultiply = (m1, m2) => {
    return [
      m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0] + m1[0][2] * m2[2][0],
      m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0] + m1[1][2] * m2[2][0],
      m1[2][0] * m2[0][0] + m1[2][1] * m2[1][0] + m1[2][2] * m2[2][0]
    ];
  };

  const matrixChooser = () => {
    const r = Math.random();
    if (r < 0.01) return F1;
    if (r < 0.86) return F2;
    if (r < 0.93) return F3;
    return F4;
  };
};
