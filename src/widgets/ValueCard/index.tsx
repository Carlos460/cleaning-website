import { BodyText } from '@/components/Typography';

interface IValueCard {
  title: string;
  body: string;
}

export default function ValueCard(props: IValueCard) {
  return (
    <div className="px-8 py-14 shadow-sm border rounded-xl">
      <div className="h-20 w-20 rounded-full bg-blue-500 mb-5"></div>
      <h1 className="font-bold text-xl mb-5">{props.title}</h1>
      <BodyText>{props.body}</BodyText>
    </div>
  );
}
