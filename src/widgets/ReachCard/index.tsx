import { BodyText } from "@/components/Typography";

interface IReachCard {
  title: string;
  bodyText: string;
  infoText: string;
  image: string;
}

export default function ReachCard(props: IReachCard) {
  return (
    <div className="relative -z-10 lg:w-96 w-full pt-24 pb-20 border border-solid rounded-2xl">
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        }}
        className="absolute rounded-xl bg-white border-2   w-28 h-28 -top-12 left-0 right-0 mx-auto"
      >
        <img src={props.image} alt="image" className="scale-110" />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="font-semibold text-2xl">{props.title}</h3>
        <BodyText>{props.bodyText}</BodyText>
        <p className="text-blue-500 font-medium text-lg">{props.infoText}</p>
      </div>
    </div>
  );
}
