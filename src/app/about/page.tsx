import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import { BodyText, SubTitle, Title } from "@/components/Typography";

import StatCard from "@/widgets/StatisticCard";

import TeamCard from "@/widgets/TeamCard";
import ListContainer from "@/components/ListContainer";
import ValueCard from "@/widgets/ValueCard";
import AnimatePresence from "@/components/AnimatePresence";
import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col border-b-2">
        <Wrapper>
          <header className=" pt-44 flex justify-center flex-col text-center">
            <AnimatePresence>
              <Title>About Us</Title>
            </AnimatePresence>

            <div className="h-16 max-w-3xl m-auto text-center">
              <AnimatePresence>
                <BodyText>
                  {`
                  Experience unmatched laundry confidence with our guarantee: if you're not fully satisfied with the cleanliness and care of your clothes, 
                  we'll rewash them for free.
                  `}
                </BodyText>
              </AnimatePresence>
            </div>
          </header>

          {/* Header Image Container */}
          <AnimatePresence>
            <img
              src="/laundry4.png"
              className="rounded-tr-4 rounded-t-md object-cover bg-blue-300 mt-5 h-[700px] w-full"
            />
          </AnimatePresence>
        </Wrapper>
      </section>

      {/* Statistics Section */}

      <Wrapper>
        <div className="py-24 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center md:gap-8 lg:grid-cols-4">
          <div className="mb-4 md:mb-0">
            <AnimatePresence>
              <StatCard
                icon="/dryingmachine.png"
                number={20}
                subtext="Drying Machines"
              />
            </AnimatePresence>
          </div>
          <div className="mb-4 md:mb-0">
            <AnimatePresence delay={0.1}>
              <StatCard
                icon="/washingmachine.png"
                number={21}
                subtext="Washing Machines"
              />
            </AnimatePresence>
          </div>
          <div className="mb-4 md:mb-0">
            <AnimatePresence delay={0.2}>
              <StatCard
                icon="/drycleaning2.png"
                number={10000}
                sign="+"
                subtext="Dry Cleaned Items"
              />
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence delay={0.3}>
              <StatCard
                icon="/happycustomer.png"
                number={100}
                subtext="Happy Customers"
                sign="%"
              />
            </AnimatePresence>
          </div>
        </div>
      </Wrapper>

      <div className="border-b-2 border-gray-200 mx-auto w-full md:w-3/5" />

      {/* Equipment Section */}
      <Wrapper>
        <section className="flex  lg:flex-row flex-col pt-60 pb-60 gap-10 ">
          {/* Equipment Image Container */}
          <div className="flex-1">
            <AnimatePresence isFull={true}>
              <img
                src="/laundry5.png"
                className="w-full lg:h-full h-96 bg-blue-300"
              />
            </AnimatePresence>
          </div>

          {/* Equipment Content Section */}
          <div className="flex-1">
            <AnimatePresence>
              <SubTitle>Who We Are</SubTitle>
              <h2>MORE THAN 10 YEARS OF EXPERIENCE</h2>
              <div className="pt-4 pb-10">
                <BodyText>
                  {`
                  Welcome to our laundry services! We offer top-quality laundry services to ensure your clothes are clean, fresh and ready for wear. Our services 
                  include both wash and fold as well as dry cleaning for all types of garments, including delicate fabrics such as silk, wool and cashmere. Our team 
                  of expert cleaners are trained to handle all types of fabrics and stains, and use only the highest quality cleaning products to ensure that your 
                  clothes are not only clean, but also well-maintained. We take great care to follow any special instructions you may have, such as using certain 
                  detergents or fabric softeners, and we always handle your clothes with the utmost care and attention.
                  `}
                </BodyText>
              </div>
              <ul className="w-auto grid grid-cols-2 gap-y-6 font-semibold text-lg text-gray-800">
                <ListContainer>100% Customer Satisfaction</ListContainer>
                <ListContainer>Free Collection & Delivery</ListContainer>
                <ListContainer>Affordable Prices</ListContainer>
                <ListContainer>Best Quality</ListContainer>
              </ul>
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>

      {/* Values Section */}
      <Wrapper>
        <section>
          <AnimatePresence>
            <div className="flex lg:flex-row flex-col justify-between mb-10">
              <SubTitle>Our Values</SubTitle>
            </div>
          </AnimatePresence>
          <AnimatePresence>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
              <ValueCard
                image="/responsibility.png"
                title="Responsibility"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
                image="/quality.png"
                title="Quality"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
                image="/punctuality.png"
                title="Puntuality"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
            </div>
          </AnimatePresence>
        </section>
      </Wrapper>

      {/* Team Section */}
      <Wrapper>
        <section className="py-44">
          <AnimatePresence>
            <div className=" mx-auto text-center max-w-3xl">
              <SubTitle>Meet our wonderful team</SubTitle>
              <BodyText>
                Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
                neque nisi felis non ultrices massa id egestas quam velit
                pretium nuss.
              </BodyText>
            </div>
          </AnimatePresence>
          <AnimatePresence>
            <div className="gap-10 py-16 flex justify-center flex-wrap">
              <TeamCard name="Philip Camu" jobTitle="LAUNDROMAT EXPERT " />
              <TeamCard name="Philip Camu" jobTitle="LAUNDROMAT EXPERT " />
              <TeamCard name="Philip Camu" jobTitle="LAUNDROMAT EXPERT " />
            </div>
          </AnimatePresence>
          <div>
            <div className="flex gap-10 justify-center">
              <AnimatePresence delay={0.02}>
                <Link href={"/#contact"}>
                  <Button>Schedule Service</Button>
                </Link>
              </AnimatePresence>
              <AnimatePresence delay={0.04}>
                <Link href={"/services"}>
                  <Button theme="outlined">Explore Services</Button>
                </Link>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
