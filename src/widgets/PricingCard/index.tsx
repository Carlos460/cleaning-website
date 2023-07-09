import Button from "@/components/Button";
import { BodyText, SubTitle } from "@/components/Typography";

interface IPricingCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  pricing: string;
  details: string;
  description: string;
  outline?: boolean;
  buttonTheme?: string;
}

export default function PricingCard(props: IPricingCard) {
  return (
    <div
      className={`gap-5 flex-col flex pt-36 px-10 pb-48 border-1 rounded-2xl shadow-lg cursor-pointer hover:-translate-y-5 duration-300 ${
        props.outline ? "border-blue-600 border-2 border-solid" : ""
      }`}
    >
      <div>{props.imgSrc}</div>
      <h1 className="text-2xl font-bold text-gray-700 mb-2">{props.title}</h1>
      <h2>{props.pricing}</h2>
      <div className="text-center">
        <BodyText>{props.description}</BodyText>
      </div>
      <div className="text-center border-t">
        <BodyText>{props.details}</BodyText>
      </div>

      <div>
        {props.buttonTheme === "grey" ? (
          <div className="bg-white shadow border-2 border-gray-200 min-w-full py-4 rounded-md mt-auto">
            <p className="text-gray-500 font-normal text-center">Learn more</p>
          </div>
        ) : (
          <div className="bg-blue-500 rounded-md min-w-full py-4 mt-auto">
            <p className="text-white font-semibold text-center">Learn more</p>
          </div>
        )}
      </div>
    </div>
  );
}
