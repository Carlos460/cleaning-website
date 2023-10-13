interface IStatCard {
  number: number;
  icon: string;
  subtext: string;
  sign?: string;
}

export default function StatCard(props: IStatCard) {
  return (
    <div className="grid-4-columns gap-8">
      <div className="flex flex-row text-start">
        {/* Icon Container */}
        <div className="w-24 h-24 mr-3 object-cover scale-150">
          <img src={props.icon} alt="" />
        </div>

        {/* Text Container*/}
        <div className="flex flex-col m-auto">
          <text className="text-4xl mb-2 text-start font-semibold">
            {props.number}
            {props.sign}
          </text>
          <text className="text-base text-gray-400">{props.subtext}</text>
        </div>
      </div>
    </div>
  );
}
