let offset = 0; 
let size = 500;
const reps = 2; 
let rafID:number;

function draw(reps: number){
        offset = 0;
        let result = [];
        for(let i=0;i<reps;i++){
            let x = Math.random()*size
            let y = Math.random()*size
            let x2 = Math.random()*size
            let y2 = Math.random()*size
            let rand = Math.floor(Math.random()*8);
            let cpx1 = Math.random()*size;
            let cpx2 = Math.random()*size;
            let cpy1 = Math.random()*size;
            let cpy2 = Math.random()*size;
            switch (rand) {
                case 1:
                    x=0;
                    y2=0;
                    break;
                case 2:
                    x=0;
                    y2=size;
                    break;
                case 3:
                    x=size;
                    y2=size;
                    break;
                case 4:
                    x=size;
                    y2=0;
                    break;
                case 5:
                    x2=0;
                    y=0;
                    break;
                case 6:
                    x2=0;
                    y=size;
                    break;
                case 7:
                    x2=size;
                    y=size;
                    break;
                default:
                    x2=size;
                    y=0;
                    break;
            }
            result.push([x,y,x2,y2,cpx1,cpy1,cpx2,cpy2])
        }

    return result
}

export function petalCoords(reps:number){
    let result = [];
    for(let i=0;i<reps;i++){
        let x:number = Math.random()*500;
        let y:number = Math.random()*500;
        let rotation:number = Math.random()*Math.PI*2;
        let size:number = Math.random()*50;
        result.push([x,y,rotation,size]);
    }
    return result
}
export function petal(x:number,y:number,rotation:number,size:number,ctx: CanvasRenderingContext2D){
    ctx.fillStyle = "violet";
    ctx.beginPath();
    ctx.ellipse(x,y,size,size*0.3,rotation,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "black";
}

export default draw