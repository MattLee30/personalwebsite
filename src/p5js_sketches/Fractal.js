export const Fractal = (p, sketchRef) => {
    let escapeTimes;
    let fractalImage;
    let colorShift = 0;
    const maxIterations = 100;
  
    sketchRef.current = {
      reset: () => {
        computeFractal();
        p.redraw();
      }
    };
  
    p.setup = () => {
      p.createCanvas(400, 400); // or use windowWidth/windowHeight if you prefer
      p.pixelDensity(1);
      p.noLoop();
      escapeTimes = new Array(p.width * p.height);
      fractalImage = p.createImage(p.width, p.height);
      computeFractal();
      p.redraw();
    };
  
    p.draw = () => {
      fractalImage.loadPixels();
  
      for (let x = 0; x < p.width; x++) {
        for (let y = 0; y < p.height; y++) {
          const n = escapeTimes[x + y * p.width];
          const [r, g, b] = getColor(n);
          const i = 4 * (x + y * p.width);
          fractalImage.pixels[i + 0] = r;
          fractalImage.pixels[i + 1] = g;
          fractalImage.pixels[i + 2] = b;
          fractalImage.pixels[i + 3] = 255;
        }
      }
  
      fractalImage.updatePixels();
      p.image(fractalImage, 0, 0);
      colorShift = (colorShift + 1) % 360;
      setTimeout(() => p.redraw(), 40); // Animate only color
    };
  
    function computeFractal() {
      for (let x = 0; x < p.width; x++) {
        for (let y = 0; y < p.height; y++) {
          let a = p.map(x, 0, p.width, -2.5, 1);
          let b = p.map(y, 0, p.height, -1, 1);
          let ca = a;
          let cb = b;
  
          let n = 0;
          while (n < maxIterations) {
            let aa = a * a - b * b;
            let bb = 2 * a * b;
            a = aa + ca;
            b = bb + cb;
            if (a * a + b * b > 16) break;
            n++;
          }
  
          escapeTimes[x + y * p.width] = n;
        }
      }
    }
  
    function getColor(n) {
      if (n === maxIterations) return [0, 0, 0];
      const hue = (n * 5 + colorShift) % 360;
      return hsvToRgb(hue, 1, 1);
    }
  
    function hsvToRgb(h, s, v) {
      const c = v * s;
      const x = c * (1 - Math.abs((h / 60) % 2 - 1));
      const m = v - c;
      let r = 0, g = 0, b = 0;
  
      if (h < 60)      [r, g, b] = [c, x, 0];
      else if (h < 120)[r, g, b] = [x, c, 0];
      else if (h < 180)[r, g, b] = [0, c, x];
      else if (h < 240)[r, g, b] = [0, x, c];
      else if (h < 300)[r, g, b] = [x, 0, c];
      else             [r, g, b] = [c, 0, x];
  
      return [
        Math.floor((r + m) * 255),
        Math.floor((g + m) * 255),
        Math.floor((b + m) * 255)
      ];
    }
  };
  