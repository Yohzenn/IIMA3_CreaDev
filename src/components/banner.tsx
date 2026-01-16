import bannerBg from "../assets/img/banner_bg.png";
import vctLogo from "../assets/img/logo_vct.svg";
import jennie from "../assets/img/jennie.png";
import fog from "../assets/img/fog.png";

export default function Banner() {
  return (
    <div id="home" className="relative w-screen h-screen bg-linear-to-b from-burgundy to-dark-gray">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bannerBg})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${fog})` }}
      />

      {/* Effet de flou */}
      <div className="absolute bottom-0 left-0 right-0 h-100 bg-linear-to-t from-dark-gray to-transparent pointer-events-none z-20" />

      <div className="relative z-10 overflow-hidden lg:overflow-visible h-full max-w-full lg:max-w-2/3 m-auto flex items-center justify-center">
        <img
          src={jennie}
          alt="Jennie from BlackPink"
          className="absolute origin-bottom -bottom-50 md:bottom-0 z-11 w-[743px] min-w-[743px] max-w-[743px]"
        />

        <div className="absolute top-40 md:top-50 flex flex-col gap-4">
          <div className="w-full flex justify-between font-family-valorant text-xl">
            <h3>Jennie</h3>
            <h3>Jisoo</h3>
            <h3>Rose</h3>
            <h3>Lisa</h3>
          </div>

          <h1
            className="font-primetime uppercase text-pink-light w-full whitespace-nowrap"
            style={{ fontSize: 'clamp(4rem, 15vw, 8rem)' }}
          >
            Bla<span className="inline-block scale-x-[-1]">c</span>
            kPi<span className="inline-block scale-x-[-1]">N</span>k
          </h1>

          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-4">
              <img src={vctLogo} alt="VCT Logo" className="w-6 lg:w-10" />
              <h2 className="font-valorant text-2xl lg:text-5xl">vAlorant</h2>
            </div>
            <h2 className="font-family-valorant text-2xl lg:text-5xl">
              victory
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
