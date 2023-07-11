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
        <section className="py-64">
          <div></div>
          <div>
            <SubTitle>We have the best staff & equipment</SubTitle>
            <ul className="w-96 grid grid-cols-2 gap-y-4 gap-x-8 font-semibold text-lg text-gray-800">
              <ListContainer>Bathrooms</ListContainer>
              <ListContainer>Bedrooms</ListContainer>
              <ListContainer>Kitchens</ListContainer>
              <ListContainer>Offices</ListContainer>
              <ListContainer>Living Rooms</ListContainer>
              <ListContainer>Carpets</ListContainer>
              <ListContainer>Businesses</ListContainer>
              <ListContainer>Windows</ListContainer>
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
