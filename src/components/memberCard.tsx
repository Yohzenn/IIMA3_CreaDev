import jennieImg from "../assets/img/jennie.png";
import lisaImg from "../assets/img/lisa2.png";
import jisooImg from "../assets/img/jisoo.png";
import roseImg from "../assets/img/rosé.png";
import abilities1 from "../assets/img/Abilities.svg";
import abilities2 from "../assets/img/Abilities2.svg";
import abilities3 from "../assets/img/Abilities3.svg";
import abilities4 from "../assets/img/Abilities4.svg";

interface MemberCardProps {
  member?: string;
}

function MemberCard({ member }: MemberCardProps) {
  let img = "";
  let name = "";
  let country = "";
  let style = "";
  let abilities = "";

  switch (member) {
    case "jennie":
      name = "Jennie";
      country = "South Korea";
      img = jennieImg;
      style = "scale-170 bottom-20";
      abilities = abilities1;
      break;
    case "lisa":
      name = "Lisa";
      country = "Thailand";
      img = lisaImg;
      style = "scale-230 -bottom-20 -left-10";
      abilities = abilities2;
      break;
    case "jisoo":
      name = "Jisoo";
      country = "South Korea";
      img = jisooImg;
      style = "scale-170 bottom-15";
      abilities = abilities3;
      break;
    case "rose":
      name = "Rosé";
      country = "Australia";
      img = roseImg;
      style = "scale-170 bottom-10";
      abilities = abilities4;
      break;
  }

  return (
    <div className="relative group hover:scale-110 transition-transform duration-300">
      <div className="absolute top-10 left-10 origin-top-left rotate-90 z-10">
        <p className="font-primetime text-xs text-pink-light group-hover:text-burgundy">{country}</p>
        <p
          className="text-4xl font-primetime uppercase"
          style={{
            WebkitTextStroke: "2px #DFE4E7",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          {name}
        </p>
      </div>
      <div className="relative w-57 h-128 overflow-hidden rounded-tl-2xl rounded-br-2xl bg-dark-gray group-hover:bg-pink-medium transition-colors duration-300">
        <img src={img} alt={member} className={`absolute ${style}`} />
      </div>
      <div className="bg-dark-gray group-hover:bg-pink-dark transition-colors duration-300 w-56 h-14 absolute -bottom-6 left-6 border-inset-white z-10 flex items-center justify-center">
        <img src={abilities} alt="abilities" className="text-pink-100" />
      </div>
    </div>
  );
}

export default MemberCard;
