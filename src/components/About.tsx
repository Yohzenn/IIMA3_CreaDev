import skins from "../assets/img/victory_skins.png";

export default function About() {
  return (
    <div
      id="about"
      className="my-20 w-2/3 mx-auto flex flex-col justify-center items-center"
    >
      <h2 className="uppercase text-5xl! gradient-heading my-20 tracking-widest">
        {"ABOUT".split("").map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ))}
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <img
          src={skins}
          alt="BlackPink concept skins for Valorant"
          className="lg:max-w-2/5"
        />
        <div className="flex flex-col gap-4 text-justify font-medium">
          <h3 className="font-family-primetime text-pink-light text-3xl!">
            In your area, Agent.
          </h3>
          <p>
            <em className="skewed-bg font-family-primetime">
              <span>
                BLA<span className="inline-block scale-x-[-1]">C</span>KPI
                <span className="inline-block scale-x-[-1]">N</span>K
              </span>
            </em>{" "}
            infiltrates the{" "}
            <span className="font-family-valorant">vAlorant</span> universe for{" "}
            <span className="font-family-valorant lowercase">VCT 2026</span>,
            shattering the line between music and gaming.
          </p>
          <p>
            Unlock the limited-edition{" "}
            <em className="skewed-bg font-family-primetime">
              <span>
                BLA<span className="inline-block scale-x-[-1]">C</span>KPI
                <span className="inline-block scale-x-[-1]">N</span>K
              </span>
            </em>{" "}
            weapon skins <span className="font-sans">—</span> four iconic
            designs inspired by each member. And with their brand new single{" "}
            <em className="skewed-bg font-family-primetime">
              <span>VICTORY</span>
            </em>{" "}
            the hype reaches new heights.
          </p>
          <p>
            Discover its generative cover art below, a unique visual that's
            never the same twice.
          </p>
        </div>
      </div>
    </div>
  );
}
