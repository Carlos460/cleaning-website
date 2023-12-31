'use client';
import Button from '@/components/Button';
import ListContainer from '@/components/DetailList';
import { BodyText, SubTitle, Title } from '@/components/Typography';
import { InputField, SubmitButton, TextArea } from '@/components/Form';
import StepCard from '@/widgets/StepCard';
import ServiceCard from '@/widgets/ServiceCard';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import AnimatePresence from '@/components/AnimatePresence';

export default function Home() {
  return (
    <>
      {/* Hero Section*/}
      <Wrapper>
        <header className="flex lg:flex-row flex-col lg:pt-64 pt-32 lg:pb-64 pb-0">
          <div className="lg:flex-1">
            <AnimatePresence>
              <Title className="text-6xl font-bold text-gray-800 mb-8">
                Reliable cleaning services for your home
              </Title>
              <p className="sm:text-xl text-sm  text-gray-600 mb-8">
                Full of experience and good references cleaning apartments,
                homes, and offices!
              </p>
              <Link href="/#contact">
                <Button>Get a free quote</Button>
              </Link>
            </AnimatePresence>
          </div>
          <div className="lg:flex-1 lg:px-10 lg:py-0 pt-10">
            <AnimatePresence delay={0.2}>
              <div className="w-full h-96 bg-blue-300"></div>
            </AnimatePresence>
          </div>
        </header>
      </Wrapper>

      {/* Walkthrough Section */}
      <Wrapper>
        <section className="md:pt-20 md:pb-40 pt-32 pb-0">
          <div className=" mx-auto text-center max-w-3xl">
            <AnimatePresence>
              <SubTitle>How our service works?</SubTitle>
              <BodyText>
                Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
                neque nisi felis non ultrices massa id egestas quam velit
                pretium nu.
              </BodyText>
            </AnimatePresence>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-10 py-16">
            <AnimatePresence delay={0.2}>
              <StepCard
                imageSrc=""
                alt=""
                title="1. Schedule online"
                description="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.4}>
              <StepCard
                imageSrc=""
                alt=""
                title="2. Pay Online easily"
                description="Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.6}>
              <StepCard
                imageSrc=""
                alt=""
                title="3. Get your house cleaned"
                description="Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend."
              />
            </AnimatePresence>
          </div>
          <AnimatePresence viewMarginBottom={25}>
            <div className="flex sm:w-auto w-full sm:flex-row flex-col lg:gap-10 gap-4 justify-center">
              <Link href="/#contact" className="[&>button]:w-full">
                <Button>Get a free quote</Button>
              </Link>
              <Link href="/services" className="[&>button]:w-full">
                <Button theme="outlined">Explore Services</Button>
              </Link>
            </div>
          </AnimatePresence>
        </section>
      </Wrapper>

      {/* Services Section */}
      <Wrapper>
        <section className="py-40">
          <AnimatePresence>
            <div className="flex-col items-start gap-5 lg:flex lg:flex-row lg:items-end lg:justify-between">
              <div className="lg:w-1/2 w-full">
                <SubTitle>Take a look at our professional services</SubTitle>
              </div>
              <Link href="/services">
                <Button theme="outlined">Explore services</Button>
              </Link>
            </div>
          </AnimatePresence>
          <div className="gap-10 pb-16 flex justify-center flex-wrap">
            <AnimatePresence delay={0.2}>
              <ServiceCard
                imgSrc=""
                imgAlt=""
                title="Home cleaning"
                bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.4}>
              <ServiceCard
                imgSrc=""
                imgAlt=""
                title="Office cleaning"
                bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.6}>
              <ServiceCard
                imgSrc=""
                imgAlt=""
                title="Rental cleaning"
                bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>

      {/* Services Details Section */}
      <Wrapper>
        <section className="lg:py-20 pt-0 pb-10 flex lg:flex-row flex-col">
          <div className="lg:flex-1 lg:w-auto w-full lg:h-auto h-80 [&>div]:w-full [&>div]:h-full">
            <AnimatePresence delay={0.2}>
              <div className="w-full h-full bg-blue-200 "></div>
            </AnimatePresence>
          </div>
          <div className="flex lg:flex-1 py-6 px-0 xl:pl-36 lg:px-5">
            <AnimatePresence>
              <div className="lg:pr-0 md:pr-24 pr-12 pb-8">
                <SubTitle>We cover all areas of your home or office</SubTitle>
                <div className="md:pr-24 pr-6">
                  <BodyText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </BodyText>
                </div>
              </div>

              <ul className="w-96 grid grid-cols-2 gap-y-4 gap-x-8 pb-8 font-semibold text-lg text-gray-800">
                <ListContainer>Bathrooms</ListContainer>
                <ListContainer>Bedrooms</ListContainer>
                <ListContainer>Kitchens</ListContainer>
                <ListContainer>Offices</ListContainer>
                <ListContainer>Living Rooms</ListContainer>
                <ListContainer>Carpets</ListContainer>
                <ListContainer>Businesses</ListContainer>
                <ListContainer>Windows</ListContainer>
              </ul>

              <div className="w-48 pb-8">
                <Link href="/#contact">
                  <Button>Get a free quote</Button>
                </Link>
              </div>
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>

      {/* Contact Section */}
      <section className="bg-[#F7F9FC]">
        <Wrapper>
          <div className="lg:py-60 py-32 block xl:flex">
            <div id="contact" className="flex-1 xl:pr-28 pr-0 pt-16">
              <AnimatePresence>
                <div className="[&>h2]:leading-tight">
                  <SubTitle>Request a free cleaning quote today</SubTitle>
                </div>
                <BodyText>
                  In dignissim euismod pretium amet enim a eu nam ut urna
                  accumsan pellentesque lacus duis pharetra eutortor.
                </BodyText>
                <div className="flex py-10 mb-10 border-b">
                  <div className=" rounded-full bg-blue-200 w-20 h-20"></div>
                  <div className="ml-4 flex flex-col justify-center">
                    <p className="font-normal text-gray-500">CALL US NOW</p>
                    <p className="font-semibold text-3xl">(202)452-2932</p>
                  </div>
                </div>
                <p className="font-semibold text-2xl mb-2">
                  Not convinced yet?
                </p>
                <BodyText>
                  Massa bibendum consectetur maurisid gravida purus, dolor dui
                  amet morbi non nunc urna purus diam.
                </BodyText>
                <div className="pt-5 pb-20">
                  <Link href="/services">
                    <Button theme="outlined">Browse our packages</Button>
                  </Link>
                </div>
              </AnimatePresence>
            </div>
            <div className="flex-1 mx-auto xl:mx-0 max-w-2xl">
              <AnimatePresence delay={0.2}>
                <form className="flex flex-col gap-5 shadow-lg rounded-2xl md:p-10 p-8 my-10 bg-white lg:my-0">
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
                    <SubmitButton text="Submit Request" />
                  </div>
                </form>
              </AnimatePresence>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
