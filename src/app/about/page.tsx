import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import { BodyText, SubTitle, Title } from "@/components/Typography";

import StatCard from "@/widgets/StatisticCard";

import TeamCard from "@/widgets/TeamCard";
import ListContainer from "@/components/DetailList";
import ValueCard from "@/widgets/ValueCard";
import AnimatePresence from "@/components/AnimatePresence";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col border-b-2">
        <Wrapper>
          <header className="pt-32 flex justify-center flex-col text-center">
            <text className="text-6xl font-semibold mb-4 pt-20">
              <AnimatePresence>
                <div>About our company</div>
              </AnimatePresence>
            </text>
            <div className="h-16 max-w-3xl m-auto text-center">
              <AnimatePresence>
                <BodyText>
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh ultrices eget
                  suscipit aliquet et nulla magna.
                </BodyText>
              </AnimatePresence>
            </div>
          </header>

          {/* Header Image Container */}
          <AnimatePresence>
            <div className="bg-blue-300 h-[700px]"></div>
          </AnimatePresence>
        </Wrapper>
      </section>

      {/* Statistics Section */}

      <Wrapper>
        <div className="py-24 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center md:gap-8 lg:grid-cols-4">
          <div className="mb-4 md:mb-0">
            <AnimatePresence>
              <StatCard
                icon="test"
                number={3000}
                plus="+"
                subtext="HAPPY CLIENTS"
              />
            </AnimatePresence>
          </div>
          <div className="mb-4 md:mb-0">
            <AnimatePresence delay={0.1}>
              <StatCard icon="test" number={100} plus="+" subtext="EMPLOYEES" />
            </AnimatePresence>
          </div>
          <div className="mb-4 md:mb-0">
            <AnimatePresence delay={0.2}>
              <StatCard
                icon="test"
                number={5000}
                plus="+"
                subtext="JOBS DONE"
              />
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence delay={0.3}>
              <StatCard icon="test" number={2023} subtext="FOUNDED IN" />
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
              <div className="w-full lg:h-full h-96 bg-blue-300"></div>
            </AnimatePresence>
          </div>

          {/* Equipment Content Section */}
          <div className="flex-1">
            <AnimatePresence>
              <SubTitle>We have the best staff & equipment</SubTitle>
              <div className="pt-4 pb-10">
                <BodyText>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur
                </BodyText>
              </div>
              <ul className="w-auto grid grid-cols-2 gap-y-6 font-semibold text-lg text-gray-800">
                <ListContainer>Window Cleaner</ListContainer>
                <ListContainer>Carpet Cleaner</ListContainer>
                <ListContainer>Work Vans</ListContainer>
                <ListContainer>Floor Polsiher</ListContainer>
                <ListContainer>Microfiber</ListContainer>
                <ListContainer>Sanaitizer</ListContainer>
                <ListContainer>Water Jet Cleaner</ListContainer>
                <ListContainer>Steam Cleaner</ListContainer>
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
              <div className="max-w-lg">
                <BodyText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor amet.
                </BodyText>
              </div>
            </div>
          </AnimatePresence>
          <AnimatePresence>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
              <ValueCard
                title="Transparency"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
                title="Responsibility"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
                title="Security"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
                title="Trust"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
                title="Quality"
                body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"
              />
              <ValueCard
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
                pretium nu.
              </BodyText>
            </div>
          </AnimatePresence>
          <AnimatePresence>
            <div className="gap-10 py-16 flex justify-center flex-wrap">
              <TeamCard name="John Carter" jobTitle="HOUSE CLEANER" />
              <TeamCard name="Sophie Moore" jobTitle="OFFICE CLEANER" />
              <TeamCard name="Matt Cannon" jobTitle="INDUSTRIAL CLEANER" />
              <TeamCard name="Andy Smith" jobTitle="OFFICE CLEANER" />
              <TeamCard name="Patrick Meyer" jobTitle="INDUSTRIAL CLEANER" />
              <TeamCard name="Lily Woods" jobTitle="HOUSE CLEANER" />
            </div>
          </AnimatePresence>
          <div>
            <div className="flex gap-10 justify-center">
              <AnimatePresence delay={0.02}>
                <Button>Get a free quote</Button>
              </AnimatePresence>
              <AnimatePresence delay={0.04}>
                <Button theme="outlined">Explore Services</Button>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
