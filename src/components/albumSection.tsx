import { initCanvas } from "../services/canvas";
import draw, { petalCoords } from "../services/cover";
import { useEffect, useRef } from "react";
import { petal } from "../services/cover";

function Album({
  reps,
  repsP,
  className,
  bgImage,
  curveColor = "violet",
  petalColor = "violet",
}: {
  reps: number;
  repsP: number;
  className: string;
  bgImage?: string;
  curveColor?: string;
  petalColor?: string;
}) {
  const size = 500;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bgImageRef = useRef<HTMLImageElement | null>(null);

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

    // Charger l'image de background
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = bgImage || "";
    bgImageRef.current = img;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      // Dessiner la couleur de fond
      ctx.fillStyle = "#170c10";
      ctx.fillRect(0, 0, size, size);

      // Dessiner l'image de background avec opacité 10% et comportement object-cover
      if (bgImageRef.current && bgImageRef.current.complete) {
        ctx.globalAlpha = 0.3;

        // Calculer les dimensions pour object-cover
        const imgRatio = bgImageRef.current.width / bgImageRef.current.height;
        const canvasRatio = size / size; // 1:1

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
          // Image plus large que le canvas
          drawHeight = size;
          drawWidth = size * imgRatio;
          offsetX = -(drawWidth - size) / 2;
          offsetY = 0;
        } else {
          // Image plus haute que le canvas
          drawWidth = size;
          drawHeight = size / imgRatio;
          offsetX = 0;
          offsetY = -(drawHeight - size) / 2;
        }

        ctx.drawImage(
          bgImageRef.current,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight
        );
        ctx.globalAlpha = 1.0;
      }

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

        // Trait animé
        ctx.beginPath();
        ctx.setLineDash([1000, 1000]);
        ctx.lineDashOffset = offset;
        ctx.strokeStyle = "#6a3f4a";
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
        ctx.stroke();
      }

      for (let i = 0; i < repsP; i++) {
        sizeP = petalcoords[i][3];
        xP = petalcoords[i][0];
        yP = petalcoords[i][1];
        rotation = petalcoords[i][2];
        petal(xP, yP, rotation, sizeP, ctx, petalColor);
      }

      offset += 4;

      if (offset < 1200) {
        rafID = requestAnimationFrame(animate);
      }
    };

    if (bgImage) {
      img.onload = () => {
        animate();
      };
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(rafID);
      ctx.clearRect(0, 0, size, size);
    };
  }, [reps, repsP, bgImage, curveColor, petalColor]);

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
