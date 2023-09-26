export default function ListContainer(props: any) {
  return (
    <li className="flex gap-2 ">
      <div className="w-7 h-7 min-w-[28px] min-h-[28px] bg-blue-200 rounded-full " />
      <p>{props.children}</p>
    </li>
  );
}

//
export function DetailList(props: any) {
  return (
    <li className="flex items-center gap-2 ">
      <div className="w-7 h-7 min-w-[28px] min-h-[28px] bg-blue-200 rounded-full " />
      <p className="overflow">{props.children}</p>
    </li>
  );
}
