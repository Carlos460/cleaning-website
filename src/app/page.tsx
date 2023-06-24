import Button from "@/components/Button";
import ListContainer from "@/components/DetailList";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import StepCard from "@/widgets/StepCard";

export default function Home() {
  return (
    <>
      {/* Hero Section*/}
      <header className="flex pt-64 pb-64">
        <div className="flex-1">
          <Title className="text-6xl font-bold text-gray-800 mb-8">
            Reliable cleaning services for your home
          </Title>
          <p className="text-xl text-gray-600 mb-8">
            Full of experience and good references cleaning apartments, homes,
            and offices!
          </p>
          <Button>Get a free quote</Button>
          <button></button>
        </div>
        <div className="flex-1">
          <div className="w-full h-full bg-blue-300"></div>
        </div>
      </header>

      {/* Walkthrough Section */}
      <section className="py-60">
        <div className=" mx-auto text-center max-w-3xl">
          <SubTitle>How our service works?</SubTitle>
          <BodyText>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </BodyText>
        </div>
        <div className="flex justify-center gap-10 py-16">
          <StepCard
            imageSrc=""
            alt=""
            title="1. Schedule online"
            description="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
          />
          <StepCard
            imageSrc=""
            alt=""
            title="2. Pay Online easily"
            description="Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."
          />
          <StepCard
            imageSrc=""
            alt=""
            title="3. Get your house cleaned"
            description="Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."
          />
        </div>
        <div className="flex gap-10 justify-center">
          <Button>Get a free quote</Button>
          <Button theme="outlined">Explore Services</Button>
        </div>
      </section>

      {/* Services Section */}
      <section></section>

      {/* Services Details Section */}
      <section className="py-60 flex flex-row ">
        <div className="flex-1 object-cover bg-orange-300"></div>

        <div className="flex flex-1 flex-col gap-8 py-6 pl-36">
          <SubTitle className="my-3px my-10">
            We cover all areas of <br /> your home or office
          </SubTitle>

          <div className="pr-24">
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </BodyText>
          </div>

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

          <div className="w-48">
            <Button> Get a free quote </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section></section>
    </>
  );
}
