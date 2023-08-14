import { Details } from '@/components/Typography';
import Image from 'next/image';
import { DetailList } from '@/components/DetailList';

interface IPricingCard {
  imageSrc: string;
  alt: string;
  icons?: string;
  title: string;
  pricing: string;
  details: string;
  description: string;
  sqft: string;
  hours: string;
  task: string;
  outline?: boolean;
  buttonTheme?: string;
}

export default function PricingCard(props: IPricingCard) {
  return (
    <div
      className={` max-w-lg gap-5 flex-col flex pt-20 px-10 pb-8 border-1 rounded-2xl shadow-lg cursor-pointer hover:-translate-y-5 duration-300 ${
        props.outline ? 'border-blue-600 border-2 border-solid' : ''
      }`}
    >
      <div>
        <div className="w-36 h-36 bg-blue-400 mx-left rounded-l mb-5">
          <Image src={props.imageSrc} alt={props.alt} />
        </div>
        <h1 className="text-xl font-medium text-blue-500 mb-4">
          {props.title}
        </h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          {props.pricing}
        </h2>
        <div className="text-left">
          <Details>{props.description}</Details>
        </div>
      </div>

      <div className="text-center border-t" />

      <div>
        <div className="text-lg font-semibold text-gray-800 mb-5">
          {props.details}
        </div>

        <div className="mb-2">
          {props.icons}
          <DetailList>{props.sqft}</DetailList>
        </div>
        <div className="mb-2">
          {props.icons}
          <DetailList>{props.hours}</DetailList>
        </div>
        <div>
          <DetailList>{props.task}</DetailList>
        </div>
      </div>

      <div>
        {props.buttonTheme === 'grey' ? (
          <div className="bg-gray-100 shadow border-2 border-gray-200 min-w-full py-4 rounded-xl mt-auto">
            <p className="text-gray-700 font-normal text-center">Learn more</p>
          </div>
        ) : (
          <div className="bg-blue-500 rounded-xl min-w-full py-4 mt-auto">
            <p className="text-white font-semibold text-center">Learn more</p>
          </div>
        )}
      </div>
    </div>
  );
}
