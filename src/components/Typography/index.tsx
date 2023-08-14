export function Title(props: any) {
  return (
    <h1 className="sm:text-6xl text-3xl font-bold text-gray-800 mb-2">
      {props.children}
    </h1>
  );
}

export function SubTitle(props: any) {
  return (
    <h2 className="md:text-5xl text-3xl font-semibold text-gray-800 mb-4">
      {props.children}
    </h2>
  );
}

export function Details(props: any) {
  return (
    <p className="text-base font-medium text-gray-500 mb-4">{props.children}</p>
  );
}

export function BodyText(props: any) {
  return (
    <p className="md:text-lg text-sm font-normal text-gray-500">
      {props.children}
    </p>
  );
}
