let agents = [];
let numAgentsPerClick = 500;
let trailMap;
let trailData;

export const Slime = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.pixelDensity(1);
    p.width = p.windowWidth;
    p.height = p.windowHeight;
    trailMap = p.createGraphics(p.width, p.height);
    trailMap.background(0);
    trailData = new Float32Array(p.width * p.height).fill(0); 
  };

  p.draw = () => {
    p.background(0);

    // Update and draw agents
    for (let agent of agents) {
      agent.update();
    }

    // Decay the trail over time
    for (let i = 0; i < trailData.length; i++) {
      trailData[i] *= 0.95;
    }

    trailMap.loadPixels();
    for (let i = 0; i < trailData.length; i++) {
      let brightness = p.constrain(trailData[i], 0, 255);
      let pixelIndex = i * 4;
      trailMap.pixels[pixelIndex] = brightness;
      trailMap.pixels[pixelIndex + 1] = brightness;
      trailMap.pixels[pixelIndex + 2] = brightness;
      trailMap.pixels[pixelIndex + 3] = 255;
    }
    trailMap.updatePixels();

    p.image(trailMap, 0, 0);
  };

  p.mouseClicked = () => {
    if (p.mouseY > 0 && p.mouseY < p.height) {
      for (let i = 0; i < numAgentsPerClick; i++) {
        let angle = p.random(p.TWO_PI);
        let startX = p.mouseX;
        let startY = p.mouseY;
        agents.push(new Agent(startX, startY, angle));
      }
    }
  };

  class Agent {
    constructor(x, y, angle) {
      this.pos = p.createVector(x, y);
      this.angle = angle;
      this.sensorAngleOffset = p.PI / 4;
      this.sensorDistance = 10;
      this.stepSize = 2;
    }

    update() {
      let sensorCenter = this.sense(0);
      let sensorLeft = this.sense(this.sensorAngleOffset);
      let sensorRight = this.sense(-this.sensorAngleOffset);

      if (sensorCenter > sensorLeft && sensorCenter > sensorRight) {
      } else if (sensorLeft > sensorRight) {
        this.angle += 0.3;
      } else if (sensorRight > sensorLeft) {
        this.angle -= 0.3;
      } else {
        this.angle += p.random(-0.3, 0.3);
      }

      this.pos.x += p.cos(this.angle) * this.stepSize;
      this.pos.y += p.sin(this.angle) * this.stepSize;

      let index = p.int(this.pos.y) * p.width + p.int(this.pos.x);
      if (index >= 0 && index < trailData.length) {
        trailData[index] = p.min(trailData[index] + 50, 255);
      }
    }

    sense(offsetAngle) {
      let sensorAngle = this.angle + offsetAngle;
      let sensorX = p.int(this.pos.x + p.cos(sensorAngle) * this.sensorDistance);
      let sensorY = p.int(this.pos.y + p.sin(sensorAngle) * this.sensorDistance);

      if (sensorX >= 0 && sensorX < p.width && sensorY >= 0 && sensorY < p.height) {
        let index = sensorY * p.width + sensorX;
        return trailData[index];
      }
      return 0;
    }
  }
};
