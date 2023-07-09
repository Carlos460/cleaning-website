export default function StatCard({
  number,
  icon,
  subtext,
}: {
  number: number;
  icon: string;
  subtext: string;
}) {
  return (
    <div className="flex flex-row">
      {/* Icon Container */}
      <div>
        <img src={icon} alt="" />
      </div>

      {/* Text Container*/}
      <div className="flex flex-col">
        <span>{number}</span>

        <span>{subtext}</span>
      </div>
    </div>
  );
}
