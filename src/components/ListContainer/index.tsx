export default function ListContainer(props: any) {
  return (
    <li className="flex gap-2 ">
      <img
        src="/check.png"
        className="w-7 h-7 min-w-[28px] min-h-[28px] rounded-full "
      />
      <p>{props.children}</p>
    </li>
  );
}
