import Link from "next/link";

import Button from "@/components/Button";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-5">
      <div className="flex items-center">
        <h1 className="font-medium text-4xl">Brand</h1>
      </div>
      <div className="flex gap-x-10">
        <ul className="flex gap-x-10 items-center">
          <NavLink>
            <Link href={"/"}>Home</Link>
          </NavLink>
          <NavLink>
            <Link href={"/about"}>About</Link>
          </NavLink>
          <NavLink>
            <Link href={"/services"}>Services</Link>
          </NavLink>
          <NavLink>
            <Link href={"/contact"}>Contact</Link>
          </NavLink>
        </ul>
        <Button>Get a free quote</Button>
      </div>
    </nav>
  );
}
