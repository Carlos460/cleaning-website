export default function NavLink(props: any) {
  return (
    <li className="lg:py-0 pb-4 hover:text-blue-500 transition-colors duration-200 lg:text-base text-2xl">
      {props.children}
    </li>
  );
}
