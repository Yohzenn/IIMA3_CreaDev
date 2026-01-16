import MemberCard from "./MemberCard";

export default function MembersSection() {
  const blackpinkMembers = ["jennie", "lisa", "rose", "jisoo"];
  return (
    <div id="members" className="lg:my-20">
      <h2 className="uppercase text-5xl! gradient-heading my-20 tracking-widest">
        {"AGENTS".split("").map((char, index) => (
          <span key={index} className="char">
            {char}
          </span>
        ))}
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-15 ">
        {blackpinkMembers.map((member: string) => (
          <MemberCard key={member} member={member} />
        ))}
      </div>
    </div>
  );
}
