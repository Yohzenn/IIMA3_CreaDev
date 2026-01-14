import MemberCard from "./memberCard";

export default function MembersSection() {
  const blackpinkMembers = ["jennie", "lisa", "rose", "jisoo"];
  return (
    <div className="flex items-center justify-center flex-wrap gap-15 ">
      {blackpinkMembers.map((member: string) => (
        <MemberCard key={member} member={member} />
      ))}
    </div>
  );
}
