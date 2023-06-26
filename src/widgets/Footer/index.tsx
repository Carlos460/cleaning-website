import Link from "next/link";
import FooterLink from "./FooterLink";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

export default function Footer() {
  return (
    <footer className="border-t px-48">
      <Wrapper>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-9 py-36  ">
          {/* Column 1 */}
          <div>
            <p className="text-2xl font-extrabold mb-1 text-gray-800">
              Quality cleaning for your home
            </p>
            <div className="mb-10">
              <BodyText>
                Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
                eiusmo.
              </BodyText>
            </div>
            <div className="flex flex-row mt-5">
              {/* <span>Icon</span>
              <span>Icon</span>
              <span>Icon</span>
              <span>Icon</span> */}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <p className="text-1xl font font-extrabold mb-7 text-gray-800">
              {" "}
              Contact Us
            </p>
            <p className="mb-3.5">
              1827 Nickel Road, Los Angeles, CA, 90017, United States
            </p>
            <p className="mb-3.5">(414)567-2109</p>
            <p>contact@cleaning.com</p>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-1xl font font-extrabold mb-7 text-gray-800">
              {" "}
              Hours{" "}
            </p>

            <div className="flex flex-col mb-4">
              <p className="text-1xl font font-extrabold mb-1 text-gray-700">
                Monday to Friday
              </p>

              <BodyText> 6:00 AM - 9:00 PM</BodyText>
            </div>

            <div className="flex flex-col">
              <p className="text-1xl font font-extrabold mb-1 text-gray-700">
                Saturday & Sunday
              </p>
              <div className="mb-4">
                <BodyText> 6:00 AM - 9:00 PM</BodyText>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-1xl font font-extrabold mb-7 text-gray-700">
              Get a Free Estimate
            </p>

            <p className="text-2xl font text-blue-500 font-extrabold ">
              (000)-000-0000
            </p>

            <div className="mb-7">
              <BodyText>
                Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
                eiusmod.
              </BodyText>
            </div>

            <Button> Request a free quote </Button>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
