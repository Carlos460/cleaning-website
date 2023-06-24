import Image from "next/image";
import { BodyText } from "@/components/Typography";

interface IServiceCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  bodyText: string;
}

export default function ServiceCard(props: IServiceCard) {
  return (
    <div className="shadow-lg max-w-sm px-5 py-14 mt-20">
      <div className="w-60 h-60 bg-blue-400 mx-auto rounded-full mb-5">
        <Image src={props.imgSrc} alt={props.imgAlt} />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">{props.title}</h1>
        <BodyText>{props.bodyText}</BodyText>
      </div>
    </div>
  );
}
