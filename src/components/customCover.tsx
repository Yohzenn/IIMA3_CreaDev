import Album from "./albumSection";
import { useState } from "react";

function CustomCover() {
  const [reps, setReps] = useState<number>(3);
  const [repsP, setRepsP] = useState<number>(4);

  return (
    <div id="cover" className="lg:my-20 w-11/12 md:w-2/3 mx-auto">
      <h2 className="uppercase text-5xl! gradient-heading my-20 tracking-widest flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
        <span>
          {"CUSTOMIZE".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </span>{" "}
        <span>
          {"YOUR".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </span>{" "}
        <span>
          {"COVER".split("").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </span>
      </h2>

      <div className="flex justify-center items-center flex-col md:flex-row gap-20">
        <Album reps={reps} repsP={repsP} className="w-[360px] h-[360px]" />

        <div className="w-[360px] font-primetime text-center">
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

      <div className="flex justify-center gap-10 mt-10">
        <div className="flex items-center gap-2">
          <label className="font-poppins">Nombre de courbes : {reps}</label>
          <input
            type="range"
            min={0}
            max={10}
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="font-poppins">Nombre de pétales : {repsP}</label>
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
  );
}

export default CustomCover;
