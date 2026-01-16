import { initCanvas } from "../services/canvas";
import draw, { petalCoords } from "../services/cover";
import { useEffect, useRef } from "react";
import { petal } from "../services/cover";

function Album({
  reps,
  repsP,
  className,
  bgColor = "#000000",
  curveColor = "violet",
  petalColor = "violet",
}: {
  reps: number;
  repsP: number;
  className: string;
  bgColor?: string;
  curveColor?: string;
  petalColor?: string;
}) {
  const size = 500;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  //const [reps, setReps] = useState<number>(4);
  //const [repsP, setRepsP] = useState<number>(5);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = initCanvas(canvas);
    const coords = draw(reps);
    const petalcoords = petalCoords(repsP);
    let x: number;
    let y: number;
    let cpx1: number;
    let cpy1: number;
    let cpx2: number;
    let cpy2: number;
    let x2: number;
    let y2: number;
    let xP: number;
    let yP: number;
    let sizeP = 0;
    let rotation: number;
    let offset = 0;
    let rafID: number;
    ctx.lineWidth = 2;
    function animate() {
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);
      for (let i = 0; i < reps; i++) {
        x = coords[i][0];
        y = coords[i][1];
        x2 = coords[i][2];
        y2 = coords[i][3];
        cpx1 = coords[i][4];
        cpy1 = coords[i][5];
        cpx2 = coords[i][6];
        cpy2 = coords[i][7];
        ctx.beginPath();
        ctx.setLineDash([5, 15]);
        ctx.lineDashOffset = 0;
        ctx.strokeStyle = curveColor;
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
        ctx.stroke();

        // Trait noir (animé)
        ctx.beginPath();
        ctx.setLineDash([1000, 1000]);
        ctx.lineDashOffset = offset;
        ctx.strokeStyle = bgColor;
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
        ctx.stroke();
        /*[
                    x, y,
                    x2, y2,
                    cpx1, cpy1,
                    cpx2, cpy2,
                    ] = draw();*/
      }
      for (let i = 0; i < repsP; i++) {
        sizeP = petalcoords[i][3];
        xP = petalcoords[i][0];
        yP = petalcoords[i][1];
        rotation = petalcoords[i][2];
        petal(xP, yP, rotation, sizeP, ctx, petalColor);
      }
      // Trait violet (fixe)

      offset += 4;

      if (offset < 1200) {
        rafID = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(rafID);
      ctx.clearRect(0, 0, size, size);
    };
  }, [reps, repsP, bgColor, curveColor, petalColor]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className={className}
      />
    </>
  );
}

export default Album;
