import { initCanvas } from "../services/canvas";
import draw, { petalCoords } from "../services/cover";
import { useEffect,useRef,useState } from "react";
import { petal } from "../services/cover";

function Album() {
    const size = 500;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [reps, setReps] = useState<number>(4);
    const [repsP, setRepsP] = useState<number>(5);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = initCanvas(canvas);
        let coords = draw(reps);
        let petalcoords = petalCoords(repsP);
        let x:number;
        let y:number;
        let cpx1:number;
        let cpy1:number;
        let cpx2:number;
        let cpy2:number;
        let x2:number;
        let y2:number;
        let xP:number;
        let yP:number;
        let sizeP = 0;;
        let rotation:number;
        let offset = 0;
        let rafID: number;
        function animate() {
            ctx.clearRect(0, 0, size, size);
            ctx.fillRect(0,0,size,size);
            for(let i=0;i<reps;i++){
                x=coords[i][0];
                y=coords[i][1];
                x2=coords[i][2];
                y2=coords[i][3];
                cpx1=coords[i][4];
                cpy1=coords[i][5];
                cpx2=coords[i][6];
                cpy2=coords[i][7];
                ctx.beginPath();
                ctx.setLineDash([5, 15]);
                ctx.lineDashOffset = 0;
                ctx.strokeStyle = "violet";
                ctx.moveTo(x, y);
                ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
                ctx.stroke();
                
                // Trait noir (animé)
                ctx.beginPath();
                ctx.setLineDash([1000, 1000]);
                ctx.lineDashOffset = offset;
                ctx.strokeStyle = "black";
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
                for(let i=0;i<repsP;i++){
                    sizeP = petalcoords[i][3];
                    xP = petalcoords[i][0];
                    yP = petalcoords[i][1];
                    rotation = petalcoords[i][2];
                    petal(xP,yP,rotation,sizeP, ctx);
                }
                // Trait violet (fixe)
                
    offset += 2;

    if (offset < 1200) {
      rafID = requestAnimationFrame(animate);
    }
  }

  animate();

  return () => {
    cancelAnimationFrame(rafID);
    ctx.clearRect(0, 0, size, size);
  };
}, [reps,repsP]);


        return (
            <>
                <canvas ref={canvasRef} width={size} height={size} />
                <div>
                    <label>Nombre de courbes : {reps}</label>

                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={reps}
                        onChange={(e) => setReps(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Nombre de pétales : {repsP}</label>

                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={repsP}
                        onChange={(e) => setRepsP(Number(e.target.value))}
                    />
                </div>
            </>
        );
}

export default Album