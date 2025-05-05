export const BallBouncer = (p, sketchRef) => {
    let balls = [];
    let draggedBall = null;
    let offsetX, offsetY;
    let initialX, initialY;
  
    sketchRef.current = {
      reset: () => {
        balls = [];
        p.clear();
        p.background(30);
      }
    };
  
    p.setup = () => {
      p.createCanvas(400, 400);
      p.frameRate(60);  // Set the frame rate for smoother animation
    };
  
    p.draw = () => {
      p.background(30);
  
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          balls[i].checkCollision(balls[j]);
        }
      }
  
      for (let ball of balls) {
        ball.update();
        ball.display();
      }
    };
  
    p.mousePressed = () => {
      for (let ball of balls) {
        if (ball.isMouseOver()) {
          draggedBall = ball;
          offsetX = p.mouseX - ball.x;
          offsetY = p.mouseY - ball.y;
          initialX = p.mouseX; 
          initialY = p.mouseY;
          return;
        }
      }
      balls.push(new Ball(p.mouseX, p.mouseY));
    };
  
    p.mouseDragged = () => {
      if (draggedBall) {
        draggedBall.x = p.mouseX - offsetX;
        draggedBall.y = p.mouseY - offsetY;
      }
    };
  
    p.mouseReleased = () => {
      if (draggedBall) {
        let speedX = (p.mouseX - initialX) * 0.1; 
        let speedY = (p.mouseY - initialY) * 0.1;
        draggedBall.setVelocity(speedX, speedY);
        draggedBall = null;
      }
    };
  
    class Ball {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = p.random(-3, 3);
        this.vy = p.random(-3, 3);
        this.radius = 25;
      }
  
      update() {
        if (!draggedBall || draggedBall !== this) {
          this.x += this.vx;
          this.y += this.vy;
        }
  
        this.applyFriction();
  
        if (this.x - this.radius < 0 || this.x + this.radius > p.width) {
          this.vx *= -1;
          this.vx -= 0.5;  // Slow down a little after hitting the wall
        }
  
        if (this.y - this.radius < 0 || this.y + this.radius > p.height) {
          this.vy *= -1;
          this.vy -= 0.5;  // Slow down a little after hitting the wall
        }
      }
  
      applyFriction() {
        this.vx *= 0.99;  // Apply some friction in the horizontal direction
        this.vy *= 0.99;  // Apply some friction in the vertical direction
      }
  
      display() {
        p.fill(0, 150, 255);
        p.noStroke();
        p.ellipse(this.x, this.y, this.radius * 2);
      }
  
      isMouseOver() {
        let d = p.dist(p.mouseX, p.mouseY, this.x, this.y);
        return d < this.radius;
      }
  
      checkCollision(other) {
        let d = p.dist(this.x, this.y, other.x, other.y);
        if (d < this.radius * 2) {
          let angle = p.atan2(other.y - this.y, other.x - this.x);
          let targetX = this.x + p.cos(angle) * this.radius * 2;
          let targetY = this.y + p.sin(angle) * this.radius * 2;
          let ax = (targetX - other.x) * 0.05;
          let ay = (targetY - other.y) * 0.05;
          
          this.vx -= ax;
          this.vy -= ay;
          other.vx += ax;
          other.vy += ay;
        }
      }
  
      setVelocity(vx, vy) {
        this.vx = vx;
        this.vy = vy;
      }
    }
  };
  