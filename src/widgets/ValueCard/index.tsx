import { BodyText } from "@/components/Typography";

interface IValueCard {
  title: string;
  body: string;
  image: string;
}

export default function ValueCard(props: IValueCard) {
  return (
    <div className="px-8 py-14 shadow-sm border rounded-xl">
      <img
        src={props.image}
        className="scale-150 object-cover h-20 w-20 rounded-full mb-5"
      />
      <h1 className="font-bold text-xl mb-5">{props.title}</h1>
      <BodyText>{props.body}</BodyText>
    </div>
  );
}
