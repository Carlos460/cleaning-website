import { BodyText } from "@/components/Typography";

interface IReachCard {
  title: string;
  bodyText: string;
  infoText: string;
}

export default function ReachCard(props: IReachCard) {
  return (
    <div className="relative lg:w-96 w-full pt-24 pb-20 border border-solid rounded-2xl">
      <div className="absolute rounded-xl bg-blue-50 w-28 h-28 -top-12 left-0 right-0 mx-auto"></div>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="font-semibold text-2xl">{props.title}</h3>
        <BodyText>{props.bodyText}</BodyText>
        <p className="text-blue-500 font-medium text-lg">{props.infoText}</p>
      </div>
    </div>
  );
}
