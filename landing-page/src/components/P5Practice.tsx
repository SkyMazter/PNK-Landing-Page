import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Practice = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const drawP5Obj = (p5Obj: p5) => {
        let box:Box ;
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
          this.height = 50;
          this.width = 50;
          this.x = 50;
          this.y = 50;
          this.speedX = 4;
          this.speedY = 4;
        }

        move() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.y <= 0 || this.y > p5Obj.height) {
            this.speedY = -1 * (this.speedY)
          }

          if (this.x <= 0 || this.x > p5Obj.width) {
            this.speedX = -1 * (this.speedX)
          }
        }

        display() {
          p5Obj.fill(120, 255, 68, 150);
          p5Obj.rect(this.x, this.y, this.width, this.height);
        }
      }

      p5Obj.setup = () => {
        const canvas = p5Obj.createCanvas(
          p5Obj.windowWidth,
          p5Obj.windowHeight
        );
        box = new Box()
        canvas.parent(sketchRef.current!);
      };

      p5Obj.draw = () => {
        p5Obj.background(500,500,500)
        

        box.move()
        box.display()
      };

      p5Obj.windowResized = () => {
        p5Obj.resizeCanvas(p5Obj.windowWidth, p5Obj.windowHeight)
      }
    };

    const myP5Sketch = new p5(drawP5Obj)

    return ()=>{
        myP5Sketch.remove()
    }
  }, []);

  return <div ref={sketchRef} style={{
    height: "100vh",
    width: '100vw'
  }}></div>;
};

export default P5Practice;
