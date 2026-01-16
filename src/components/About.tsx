import skins from "../assets/img/victory_skins.png";

export default function About() {
  return (
    <div
      id="about"
      className="lg:my-20 w-11/12 md:w-2/3 mx-auto flex flex-col justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <img
          src={skins}
          alt="BlackPink concept skins for Valorant"
          className="lg:max-w-2/5 hover:scale-105 transition-all duration-400"
        />
        <div className="flex flex-col gap-4 text-justify items-center font-medium">
          <h3 className="font-family-primetime text-pink-light w-full text-3xl!">
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
            weapon skins, four iconic designs inspired by each member. And with
            their brand new single{" "}
            <em className="skewed-bg font-family-primetime">
              <span>VICTORY</span>
            </em>{" "}
            the hype reaches new heights.
          </p>
          <p>
            Discover its generative cover art below, a unique visual that's
            never the same twice !
          </p>

          <a
            href="#cover"
            className="font-primetime text-xl px-8 py-3 rounded-full! border-none! text-white! bg-linear-to-r from-pink-dark to-pink-light hover:scale-105 transition-transform shadow-lg shadow-pink-dark/50"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
}
