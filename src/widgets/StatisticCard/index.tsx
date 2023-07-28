interface IStatCard {
  number: number;
  icon: string;
  subtext: string;
  plus?: string;
}

export default function StatCard(props: IStatCard) {
  return (
    <div className="grid-4-columns gap-8">
      <div className="flex flex-row text-start">
        {/* Icon Container */}
        <div className="w-24 h-24 mr-4">
          <img src={props.icon} alt="" />
          <div className="w-full h-full bg-blue-300" />
        </div>

        {/* Text Container*/}
        <div className="flex flex-col">
          <text className="text-5xl mb-2 text-start font-semibold">
            {props.number}
            {props.plus}
          </text>
          <text className="text-base text-gray-500">{props.subtext}</text>
        </div>
      </div>
    </div>
  );
}
