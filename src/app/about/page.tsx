import Wrapper from "@/components/Wrapper";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import ListContainer from "@/components/DetailList";

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
        <section className="flex lg:flex-row flex-col-reverse pt-60 pb-60 gap-10">
          {/* Equipment Image Container */}
          <div className="flex-1">
            <div className="w-full lg:h-full h-96  bg-blue-300"></div>
          </div>
          <div className="flex-1">
            <SubTitle>We have the best staff & equipment</SubTitle>
            <div className="pt-4 pb-10">
              <BodyText>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
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
          </div>
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
