export default function StatCard({
  number,
  icon,
  subtext,
  plus,
}: {
  number: number;
  icon: string;
  subtext: string;
  plus?: string;
}) {
  return (
    <div className="grid-4-columns">
      <div className="flex flex-row text-start">
        {/* Icon Container */}
        <div className="w-24 h-24 mr-4">
          <img src={icon} alt="" />
          <div className="w-full h-full bg-blue-300" />
        </div>

        {/* Text Container*/}
        <div className="flex flex-col">
          <text className="text-5xl mb-2 text-start font-semibold">
            {number}
            {plus}
          </text>
          <text className="text-base text-gray-500">{subtext}</text>
        </div>
      </div>
    </div>
  );
}
