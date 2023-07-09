import Wrapper from "@/components/Wrapper";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import StatCard from "@/components/Statistic Card";

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
        <div className="py-24 flex flex-row gap-5 justify-center">
          <StatCard icon="test" number={3000} subtext="blah blah" />
          <StatCard icon="test" number={3000} subtext="blah blah" />
          <StatCard icon="test" number={3000} subtext="blah blah" />
        </div>
      </Wrapper>

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
