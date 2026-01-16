import { useState, useEffect } from "react";
import bannerBg from "../assets/img/banner_bg.png";
import vctLogo from "../assets/img/logo_vct.svg";
import jennie from "../assets/img/jennie.png";
import fog from "../assets/img/fog.png";
import bannerVideo from "../assets/video/jump_mv.mp4";

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Scale de 1 à 1.5 sur les premiers 100vh de scroll
      const scale = 1 + (scrollPosition / windowHeight) * 0.5;

      // Limiter le scale maximum à 1.5
      setScrollScale(Math.min(scale, 1.5));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="home"
      className="relative w-screen h-screen bg-linear-to-b from-burgundy to-dark-gray overflow-hidden"
    >
      {/* Image background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-50"
        }`}
        style={{ backgroundImage: `url(${bannerBg})` }}
      />
      {/* Video background */}
      <video
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover scale-150 transition-opacity duration-500 ${
          isHovered ? "opacity-50" : "opacity-0"
        }`}
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${fog})` }}
      />

      {/* Effet de flou */}
      <div className="absolute bottom-0 left-0 right-0 h-100 bg-linear-to-t from-dark-gray to-transparent pointer-events-none z-20" />

      <div className="relative z-10 overflow-hidden lg:overflow-visible h-full max-w-full lg:max-w-2/3 m-auto flex items-center justify-center">
        <div
          className="absolute origin-bottom -bottom-50 md:-bottom-30 z-30 w-170 min-w-170 max-w-170 transition-transform duration-100 ease-out"
          style={{ transform: `scale(${scrollScale})` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={jennie}
            alt="Jennie from BlackPink"
            className="w-full h-auto"
          />
        </div>

        <div className="absolute top-40 md:top-'40 flex flex-col gap-4 pointer-events-none">
          <div className="w-full flex justify-between font-family-valorant text-xl">
            <h3>Jennie</h3>
            <h3>Jisoo</h3>
            <h3>Rose</h3>
            <h3>Lisa</h3>
          </div>

          <h1
            className="font-primetime uppercase text-pink-light w-full whitespace-nowrap"
            style={{ fontSize: "clamp(4rem, 15vw, 8rem)" }}
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
