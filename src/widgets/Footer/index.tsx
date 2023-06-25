import Link from "next/link";
import FooterLink from "./FooterLink";
import { BodyText, SubTitle, Title } from "@/components/Typography";

export default function Footer() {
  return (
    <footer className="flex flex-wrap border-t justify-center p-16">
      <div className="grid grid-cols-4  gap-10 bg-cyan-50">
        <div>
          <BodyText> Quality cleaning for your home </BodyText>
          <BodyText>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.{" "}
          </BodyText>
          <div className="flex flex-row mt-5">
            <span>Icon</span>
            <span>Icon</span>
            <span>Icon</span>
            <span>Icon</span>
          </div>
        </div>

        <div>
          <BodyText> Contact Us</BodyText>
        </div>

        <div>
          <BodyText> Hours </BodyText>
        </div>

        <div>
          <BodyText> Get a Free Estimate </BodyText>
        </div>
      </div>
    </footer>
  );
}
