import Album from "./albumSection";
import { useState } from "react";

function CustomCover () {
    const [reps,setReps] = useState<number>(3);
    const [repsP,setRepsP] = useState<number>(4);

    return (
        <div className="">
            <h1 className="text-center font-[primetime] text-6xl m-20">Custom Your Cover</h1>
            <div className="flex justify-around ">
                <Album reps={reps} repsP={repsP} className="w-[360px] h-[360px]" />
                <div className="w-4 h-[382px] bg-white"></div>
                <div className="w-[360px] font-[primetime] text-center">
                    <div>
                        <h3 className="mb-5">Logo color:</h3>
                            <div className="flex gap-8 justify-center mb-5">
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                        </div>

                        <h3 className="mb-5">Cover:</h3>
                            <div className="flex gap-8 justify-center mb-5">
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                        </div>

                        <h3 className="mb-5">Background:</h3>
                            <div className="flex gap-8 justify-center mb-5">
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                            <div className="bg-white w-14 h-14 "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="flex justify-around gap-2">
                    <label className="font-[poppins]">Nombre de courbes : {reps}</label>

                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={reps}
                        onChange={(e) => setReps(Number(e.target.value))}
                    />
                </div>
                <div className="flex justify-around gap-2">
                    <label className="font-[poppins]">Nombre de pétales : {repsP}</label>

                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={repsP}
                        onChange={(e) => setRepsP(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
}


export default CustomCover