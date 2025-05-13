import { useEffect, useRef } from "react";
import p5 from "p5";
import pi_img from "../assets/Rpi-pnk-icon.png"

const P5Practice = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawP5Obj = (p5Obj: p5) => {
      let box: Box;
      let img: p5.Image;

      class Box {
        x: number;
        y: number;
        color: string;
        height: number;
        width: number;
        speedX: number;
        speedY: number;

        constructor() {
          this.color = "red";
          this.height = 75;
          this.width = 75;
          this.x = p5Obj.random(this.width, p5Obj.windowWidth);
          this.y = p5Obj.random(this.height, p5Obj.windowHeight);
          this.speedX = 3;
          this.speedY = 3;
        }

        move() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.y <= 0 || this.y > p5Obj.height - this.height) {
            this.speedY = -1 * this.speedY;
          }

          if (this.x <= 0 || this.x > p5Obj.width - this.width) {
            this.speedX = -1 * this.speedX;
          }
        }
        preload(){
          img = p5Obj.loadImage(pi_img)
        }

        display() {
          // p5Obj.fill(34, 75, 150);
          p5Obj.image(img, this.x, this.y, this.width, this.height);
        }
      }

      p5Obj.setup = () => {
        const canvas = p5Obj.createCanvas(
          p5Obj.windowWidth,
          p5Obj.windowHeight
        );
        box = new Box();
        box.preload();
        canvas.parent(sketchRef.current!);
      };

      p5Obj.draw = () => {
        p5Obj.background(0,0,0);

        box.move();
        box.display();
      };

      p5Obj.windowResized = () => {
        p5Obj.resizeCanvas(p5Obj.windowWidth, p5Obj.windowHeight);
      };
    };

    const myP5Sketch = new p5(drawP5Obj);

    return () => {
      myP5Sketch.remove();
    };
  }, []);

  return <div ref={sketchRef} className="background"></div>;
};

export default P5Practice;
