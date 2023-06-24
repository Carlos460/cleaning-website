export function Title(props: any) {
  return (
    <h1 className="text-6xl font-bold text-gray-800 mb-8">
      {props.children}
    </h1>
  );
}

export function SubTitle(props: any) {
  return (
    <h2 className="text-5xl font-semibold text-gray-800 mb-4">
      {props.children}
    </h2>
  );
}

export function BodyText(props: any) {
  return (
    <p className="text-lg font-normal text-gray-500">
      {props.children}
    </p>
  );
}