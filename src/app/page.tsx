import Button from '@/components/Button';
import ListContainer from '@/components/DetailList';
import { BodyText, SubTitle, Title } from '@/components/Typography';
import { InputField, SubmitButton, TextArea } from '@/components/Form';
import StepCard from '@/widgets/StepCard';
import ServiceCard from '@/widgets/ServiceCard';
import Wrapper from '@/components/Wrapper';

export default function Home() {
  return (
    <>
      {/* Hero Section*/}
      <Wrapper>
        <header className="flex lg:flex-row flex-col lg:pt-64 pt-32 lg:pb-64 pb-0">
          <div className="lg:flex-1">
            <Title className="text-6xl font-bold text-gray-800 mb-8">
              Reliable cleaning services for your home
            </Title>
            <p className="sm:text-xl text-sm  text-gray-600 mb-8">
              Full of experience and good references cleaning apartments, homes,
              and offices!
            </p>
            <Button>Get a free quote</Button>
            <button></button>
          </div>
          <div className="lg:flex-1 lg:px-10 lg:py-0 pt-10">
            <div className="w-full h-96 bg-blue-300"></div>
          </div>
        </header>
      </Wrapper>

      {/* Walkthrough Section */}
      <Wrapper>
        <section className="md:pt-60 md:pb-60 pt-32 pb-0">
          <div className=" mx-auto text-center max-w-3xl">
            <SubTitle>How our service works?</SubTitle>
            <BodyText>
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </BodyText>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-10 py-16">
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
          <div className="flex sm:flex-row flex-col lg:gap-10 gap-4 justify-center">
            <Button>Get a free quote</Button>
            <Button theme="outlined">Explore Services</Button>
          </div>
        </section>
      </Wrapper>

      {/* Services Section */}
      <Wrapper>
        <section className="py-60">
          <div className="flex-col items-start gap-5 lg:flex lg:flex-row lg:items-end lg:justify-between">
            <div className="lg:w-1/2 w-full">
              <SubTitle>Take a look at our professional services</SubTitle>
            </div>
            <Button theme="outlined">Explore services</Button>
          </div>
          <div className="gap-10 py-16 flex justify-center flex-wrap">
            <ServiceCard
              imgSrc=""
              imgAlt=""
              title="Home cleaning"
              bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
            />
            <ServiceCard
              imgSrc=""
              imgAlt=""
              title="Office cleaning"
              bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
            />
            <ServiceCard
              imgSrc=""
              imgAlt=""
              title="Rental cleaning"
              bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
            />
          </div>
        </section>
      </Wrapper>

      {/* Services Details Section */}
      <Wrapper>
        <section className="lg:py-60 pt-0 pb-10 flex lg:flex-row flex-col">
          <div className="lg:flex-1 object-cover bg-blue-200 lg:w-auto w-full lg:h-auto h-80"></div>

          <div className="flex lg:flex-1 flex-col gap-8 py-6 px-0 xl:pl-36 lg:px-5">
            <div className="lg:pr-0 md:pr-24 pr-12">
              <SubTitle>We cover all areas of your home or office</SubTitle>

              <div className="md:pr-24 pr-6">
                <BodyText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </BodyText>
              </div>
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
              <Button>Get a free quote</Button>
            </div>
          </div>
        </section>
      </Wrapper>

      {/* Contact Section */}
      <section className="bg-[#F7F9FC]">
        <Wrapper>
          <div className="lg:py-60 py-32 block xl:flex">
            <div className="flex-1 xl:pr-28 pr-0 pt-16">
              <div className="[&>h2]:leading-tight">
                <SubTitle>Request a free cleaning quote today</SubTitle>
              </div>
              <BodyText>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </BodyText>
              <div className="flex py-10 mb-10 border-b">
                <div className=" rounded-full bg-blue-200 w-20 h-20"></div>
                <div className="ml-4 flex flex-col justify-center">
                  <p className="font-normal text-gray-500">CALL US NOW</p>
                  <p className="font-semibold text-3xl">(202)452-2932</p>
                </div>
              </div>
              <p className="font-semibold text-2xl mb-2">Not convinced yet?</p>
              <BodyText>
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </BodyText>
              <div className="pt-5 pb-20">
                <Button theme="outlined">Browse our packages</Button>
              </div>
            </div>
            <div className="flex-1 mx-auto xl:mx-0 max-w-2xl shadow-lg rounded-2xl md:p-10 p-8 my-10 bg-white lg:my-0">
              <form className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8">
                  <InputField placeholder="John Doe" fieldName="Full name" />
                  <InputField
                    placeholder="(000)000-0000"
                    fieldName="Phone number"
                  />
                  <InputField
                    placeholder="123 Cleaning Lane, NY"
                    fieldName="Address"
                  />
                  <InputField placeholder="john@doe.com" fieldName="Email" />
                  <InputField
                    placeholder="Full cleaning"
                    fieldName="Request service"
                  />
                  <InputField
                    placeholder="May 17, 2023"
                    fieldName="Day of service"
                  />
                </div>
                <TextArea fieldName="Add a note"></TextArea>
                <div className="md:w-60 w-full">
                  <SubmitButton text="Submit message" />
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
