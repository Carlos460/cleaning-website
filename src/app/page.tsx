import Button from "@/components/Button";
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
      <section className="py-60 flex flex-row bg-black ">
        <div className="flex-1 bg-gray-700"></div>

        <div className="flex-1 flex-col bg-slate-500  ">
          <SubTitle className="my-3px">
            We cover all areas of <br /> your home or office
          </SubTitle>

          <p className="text-black-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            iusto ducimus deserunt vitae nulla officia quos neque saepe esse
            libero dolor laudantium eius doloribus mollitia rem porro, maxime
            minus excepturi.
          </p>

          <ul className="grid grid-cols-2 gap-small">
            <li>Bathrooms</li>
            <li>Kitchens</li>
            <li>Living Rooms</li>
            <li>Carpets</li>
            <li>Bathrooms</li>
            <li>Bedrooms</li>
            <li>Offices</li>
            <li>Businesses</li>
            <li>Windows</li>
          </ul>

          <Button> Get a free quote </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section></section>
    </>
  );
}
