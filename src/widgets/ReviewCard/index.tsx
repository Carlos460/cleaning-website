import { BodyText } from "@/components/Typography";

interface IReviewCard {
  quote: string;
  name: string;
  location: string;
  image: string;
}

export default function ReviewCard(props: IReviewCard) {
  return (
    <div className="flex flex-col gap-8 px-10 py-20 border border-solid shadow rounded-2xl">
      <h1 className="font-semibold text-2xl text-center text-gray-800">
        {props.quote}
      </h1>
      <div className="mx-auto flex gap-3">
        <img
          src={props.image}
          className={`object-cover h-14 w-14 rounded-full `}
        />
        <div>
          <h3 className="font-bold text-lg">{props.name}</h3>
          <BodyText>{props.location}</BodyText>
        </div>
      </div>
    </div>
  );
}
