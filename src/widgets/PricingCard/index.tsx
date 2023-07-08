import { BodyText } from "@/components/Typography";

interface IPricingCard {
  imageSrc: string;
  title: string;
  pricing: string;
  details: string;
  description: string;
}

export default function PricingCard(props: IPricingCard) {
  return (
    <div className="w-96 flex flex-col">
      <div className="w-60 h-60 bg-blue-400 mx-auto mb-5"></div>
      {props.details}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">{props.title}</h1>
        <BodyText>{props.description}</BodyText>
      </div>
    </div>
  );
}
