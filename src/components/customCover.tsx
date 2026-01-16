import Album from "./albumSection";
import { useState } from "react";
import Logo_White from "../assets/img/Logo_White.png";
import Logo_Terciary from "../assets/img/Logo_Terciary.png";
import Logo_TerciaryDark from "../assets/img/Logo_TerciaryDark.png";
import Logo_Pink from "../assets/img/Logo_Pink.png";

const bgColors = ["#000000", "#170c10", "#f79aaf", "#6a3f4a"];
const curveColors = ["#f79aaf", "#ffd700", "#ffffff", "#8e4256"];
const petalColors = ["#f79aaf", "#ffd700", "#ffffff", "#8e4256"];
const logoColors = [
  { color: "#f79aaf", label: "Pink", image: Logo_Pink },
  { color: "#8e4258", label: "Terciary", image: Logo_Terciary },
  { color: "#6a3f4a", label: "TerciaryDark", image: Logo_TerciaryDark },
  { color: "#ffffff", label: "White", image: Logo_White },
];

function CustomCover() {
  const [reps, setReps] = useState<number>(3);
  const [repsP, setRepsP] = useState<number>(20);
  const [bgColor, setBgColor] = useState<string>(bgColors[0]);
  const [curveColor, setCurveColor] = useState<string>(curveColors[0]);
  const [petalColor, setPetalColor] = useState<string>(petalColors[0]);
  const [logoColor, setLogoColor] = useState<string>(logoColors[0].color);
  const [appliedReps, setAppliedReps] = useState<number>(3);
  const [appliedRepsP, setAppliedRepsP] = useState<number>(4);
  const [appliedBgColor, setAppliedBgColor] = useState<string>(bgColors[0]);
  const [appliedCurveColor, setAppliedCurveColor] = useState<string>(
    curveColors[0]
  );
  const [appliedPetalColor, setAppliedPetalColor] = useState<string>(
    petalColors[0]
  );
  const [appliedLogoColor, setAppliedLogoColor] = useState<string>(
    logoColors[0].color
  );

  const handleGenerate = () => {
    setAppliedReps(reps);
    setAppliedRepsP(repsP);
    setAppliedBgColor(bgColor);
    setAppliedCurveColor(curveColor);
    setAppliedPetalColor(petalColor);
    setAppliedLogoColor(logoColor);
  };

  const getLogoImage = () => {
    return (
      logoColors.find((item) => item.color === appliedLogoColor)?.image ||
      Logo_Pink
    );
  };

  return (
    <div id="cover" className="lg:my-20 w-11/12 md:w-2/3 mx-auto">
      <h2 className="uppercase text-5xl! gradient-heading my-20 tracking-widest flex flex-col flex-wrap lg:flex-row items-center gap-2 lg:gap-4">
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
        <div className="relative">
          <Album
            reps={appliedReps}
            repsP={appliedRepsP}
            bgColor={appliedBgColor}
            curveColor={appliedCurveColor}
            petalColor={appliedPetalColor}
            className="md:size-1/2"
          />
          <img
            src={getLogoImage()}
            className="absolute origin-bottom top-1/2 right-4 w-1/2 -translate-y-1/2"
          />
        </div>

        <div className="w-1/2 text-center">
          <div className="flex flex-col">
            <h3 className="mb-5">Logo color :</h3>
            <div className="flex gap-8 justify-center mb-5">
              {logoColors.map((item) => (
                <button
                  key={item.color}
                  onClick={() => setLogoColor(item.color)}
                  className={`w-14 h-14 rounded-md cursor-pointer border-2 transition-all ${
                    logoColor === item.color
                      ? "border-pink-light scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: item.color }}
                  title={item.label}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-5">Curve Color :</h3>
            <div className="flex gap-8 justify-center mb-5">
              {curveColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setCurveColor(color)}
                  className={`w-14 h-14 rounded-md cursor-pointer border-2 transition-all ${
                    curveColor === color
                      ? "border-pink-light scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-5">Petal Color :</h3>
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
          </div>

          <div className="flex flex-col">
            <h3 className="mb-5">Background :</h3>
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

          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col gap-2 w-60">
              <label>No. of curves : {reps}</label>
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-linear-to-r from-pink-dark to-pink-light rounded-full transition-all duration-100"
                  style={{ width: `${(reps / 10) * 100}%` }}
                />
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={reps}
                  onChange={(e) => setReps(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-60">
              <label className="font-poppins">No. of Petals : {repsP}</label>
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-linear-to-r from-pink-dark to-pink-light rounded-full transition-all duration-100"
                  style={{ width: `${(repsP / 10) * 100}%` }}
                />
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={repsP}
                  onChange={(e) => setRepsP(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleGenerate}
          className="font-primetime text-xl px-8 py-3 rounded-full! border-none! bg-linear-to-r from-pink-dark to-pink-light hover:scale-105 transition-transform shadow-lg shadow-pink-dark/50"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default CustomCover;
