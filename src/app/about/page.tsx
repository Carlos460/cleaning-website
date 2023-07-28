import Wrapper from "@/components/Wrapper";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import StatCard from "@/widgets/StatisticCard";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col border-b-2">
        <Wrapper>
          <header className="pt-20 flex justify-center flex-col text-center">
            <text className="text-6xl font-semibold mb-4 ">
              {" "}
              About our company{" "}
            </text>
            <div className="h-16 max-w-3xl m-auto text-center">
              <BodyText>
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna.
              </BodyText>
            </div>
          </header>

          {/* Header Image Container */}
          <div className="bg-blue-300 h-[700px]"></div>
        </Wrapper>
      </section>

      {/* Statistics Section */}

      <Wrapper>
        <div className="py-24 grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center md:gap-8 lg:grid-cols-4">
          <div className="mb-4 md:mb-0">
            <StatCard
              icon="test"
              number={3000}
              plus="+"
              subtext="HAPPY CLIENTS"
            />
          </div>
          <div className="mb-4 md:mb-0">
            <StatCard icon="test" number={100} plus="+" subtext="EMPLOYEES" />
          </div>
          <div className="mb-4 md:mb-0">
            <StatCard icon="test" number={5000} plus="+" subtext="JOBS DONE" />
          </div>
          <div>
            <StatCard icon="test" number={2023} subtext="FOUNDED IN" />
          </div>
        </div>
      </Wrapper>

      <div className="border-b-2 border-gray-200 mx-auto w-full md:w-3/5" />

      {/* Equipment Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Equipment Section</h1>
        </section>
      </Wrapper>

      {/* Values Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Values Section</h1>
        </section>
      </Wrapper>

      {/* Team Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Team Section</h1>
        </section>
      </Wrapper>
    </>
  );
}
