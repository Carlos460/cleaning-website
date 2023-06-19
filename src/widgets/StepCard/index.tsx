import Image from "next/image";
import { BodyText } from "@/components/Typography";

interface IStepCard {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

export default function StepCard(props: IStepCard) {
  return (
    <div className="w-96 flex flex-col">
      <div className="w-60 h-60 bg-blue-400 mx-auto rounded-full mb-5">
        <Image src={props.imageSrc} alt={props.alt} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">{props.title}</h1>
        <BodyText>{props.description}</BodyText>
      </div>
    </div>
  );
}
