export default function Wrapper(props: any) {
  return (
    <div className="overflow-hidden sm:container sm:mx-auto sm:max-w-screen-xl 2xl:px-0 px-5 min-h-min">
      {props.children}
    </div>
  );
}
