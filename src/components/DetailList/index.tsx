export function DetailList(props: any) {
  return (
    <li className="flex items-center gap-2 ">
      <img
        src="/check.png"
        className="w-7 h-7 min-w-[28px] min-h-[28px]  rounded-full "
      />
      <p className="overflow">{props.children}</p>
    </li>
  );
}
