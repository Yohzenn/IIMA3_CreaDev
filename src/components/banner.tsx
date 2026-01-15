import bannerBg from "../assets/img/banner_bg.png";
import vctLogo from "../assets/img/logo_vct.svg";
import jennie from "../assets/img/jennie.png";
import fog from "../assets/img/fog.png";

export default function Banner() {
  return (
    <div className="relative w-screen h-screen bg-linear-to-b from-burgundy to-dark-gray">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bannerBg})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${fog})` }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* <div className="flex flex-col"> */}

        <img
          src={jennie}
          alt="Jennie from BlackPink"
          className="absolute origin-bottom bottom-0 z-11 max-w-[743px]"
        />

        <div className="absolute top-50 flex flex-col gap-4">
          <div className="w-full flex justify-between font-family-valorant text-xl">
            <h3>Jennie</h3>
            <h3>Jisoo</h3>
            <h3>Rose</h3>
            <h3>Lisa</h3>
          </div>

          <h1 className="font-primetime uppercase text-pink-light text-9xl!">
            Bla<span className="inline-block scale-x-[-1]">c</span>
            kPi<span className="inline-block scale-x-[-1]">N</span>k
          </h1>

          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <img src={vctLogo} alt="VCT Logo" />
              <h2 className="font-valorant text-5xl">vAlorant</h2>
            </div>
            <h2 className="font-family-valorant text-5xl">victory</h2>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}
