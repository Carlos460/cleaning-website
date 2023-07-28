import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import TeamCard from "@/widgets/TeamCard";

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
          <div className=" mx-auto text-center max-w-3xl">
            <SubTitle>Meet our wonderful team</SubTitle>
            <BodyText>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </BodyText>
          </div>
          <div className="gap-10 py-16 flex justify-center flex-wrap">
            <TeamCard name="John Carter" jobTitle="HOUSE CLEANER" />
            <TeamCard name="Sophie Moore" jobTitle="OFFICE CLEANER" />
            <TeamCard name="Matt Cannon" jobTitle="INDUSTRIAL CLEANER" />
            <TeamCard name="Andy Smith" jobTitle="OFFICE CLEANER" />
            <TeamCard name="Patrick Meyer" jobTitle="INDUSTRIAL CLEANER" />
            <TeamCard name="Lily Woods" jobTitle="HOUSE CLEANER" />
          </div>
          <div>
            <div className="flex gap-10 justify-center">
              <Button>Get a free quote</Button>
              <Button theme="outlined">Explore Services</Button>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
