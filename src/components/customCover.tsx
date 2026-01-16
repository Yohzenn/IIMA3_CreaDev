import Album from "./albumSection";
import { useState } from "react";

const bgColors = ["#000000", "#170c10", "#f79aaf", "#6a3f4a"];
const curveColors = ["#ee82ee", "#f79aaf", "#ffffff", "#ffd700"];
const petalColors = ["#ee82ee", "#f79aaf", "#ffffff", "#ff69b4"];

function CustomCover() {
  const [reps, setReps] = useState<number>(3);
  const [repsP, setRepsP] = useState<number>(4);
  const [bgColor, setBgColor] = useState<string>(bgColors[0]);
  const [curveColor, setCurveColor] = useState<string>(curveColors[0]);
  const [petalColor, setPetalColor] = useState<string>(petalColors[0]);
  const [appliedReps, setAppliedReps] = useState<number>(3);
  const [appliedRepsP, setAppliedRepsP] = useState<number>(4);
  const [appliedBgColor, setAppliedBgColor] = useState<string>(bgColors[0]);
  const [appliedCurveColor, setAppliedCurveColor] = useState<string>(
    curveColors[0]
  );
  const [appliedPetalColor, setAppliedPetalColor] = useState<string>(
    petalColors[0]
  );

  const handleGenerate = () => {
    setAppliedReps(reps);
    setAppliedRepsP(repsP);
    setAppliedBgColor(bgColor);
    setAppliedCurveColor(curveColor);
    setAppliedPetalColor(petalColor);
  };

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
        <Album
          reps={appliedReps}
          repsP={appliedRepsP}
          bgColor={appliedBgColor}
          curveColor={appliedCurveColor}
          petalColor={appliedPetalColor}
          className="w-[360px] h-[360px]"
        />

        <div className="w-[360px] font-primetime text-center">
          <div>
            <h3 className="mb-5">Logo color:</h3>
            <div className="flex gap-8 justify-center mb-5">
              <div className="bg-white w-14 h-14 "></div>
              <div className="bg-white w-14 h-14 "></div>
              <div className="bg-white w-14 h-14 "></div>
              <div className="bg-white w-14 h-14 "></div>
            </div>

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

            <h3 className="mb-5">Petal Color:</h3>
            <div className="flex gap-8 justify-center mb-5">
              {petalColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setPetalColor(color)}
                  className={`w-14 h-14 rounded-md cursor-pointer border-2 transition-all ${
                    petalColor === color
                      ? "border-pink-light scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <h3 className="mb-5">Background:</h3>
            <div className="flex gap-8 justify-center mb-5">
              {bgColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setBgColor(color)}
                  className={`w-14 h-14 rounded-md cursor-pointer border-2 transition-all ${
                    bgColor === color
                      ? "border-pink-light scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
  );
}

export default CustomCover;
