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
                Saving the earth one borough at a time
              </Title>
              <p className="sm:text-xl text-sm text-gray-600 mb-8">
                Since 2000, E-Z Laundry Cleaners has provided quality services
                to clients by providing them with the professional care they
                deserve.
              </p>
              <Link href="/#contact">
                <Button>Schedule a Service</Button>
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
                {`Experience laundry luxury at your doorstep with EZ Laundry's
                pickup and delivery service - where convenience meets pristine
                freshness.`}
              </BodyText>
            </AnimatePresence>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-10 py-16">
            <AnimatePresence delay={0.2}>
              <StepCard
                imageSrc=""
                alt=""
                title="1. Schedule online"
                description="Schedule a pick up date and time online or by call to have a driver collect your laundry"
              />
            </AnimatePresence>
            <AnimatePresence delay={0.4}>
              <StepCard
                imageSrc=""
                alt=""
                title="2. Wash & Dry"
                description="Our staff will wash and dry your clothes using the best quality detergents."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.6}>
              <StepCard
                imageSrc=""
                alt=""
                title="3. Delivery"
                description="Laundry is folded and packed neatly ready to be deliver back to your door!"
              />
            </AnimatePresence>
          </div>
          <AnimatePresence viewMarginBottom={25}>
            <div className="flex sm:w-auto w-full sm:flex-row flex-col lg:gap-10 gap-4 justify-center">
              <Link href="/#contact" className="[&>button]:w-full">
                <Button>Schedule a Service</Button>
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
                title="Self Service"
                bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.4}>
              <ServiceCard
                imgSrc=""
                imgAlt=""
                title="Dry Cleaning"
                bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
            <AnimatePresence delay={0.6}>
              <ServiceCard
                imgSrc=""
                imgAlt=""
                title="Pick up and Delivery"
                bodyText="Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n."
              />
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>

      {/* Services Details Section */}
      <Wrapper>
        <section className="lg:py-20 pt-0 pb-10 flex lg:flex-row flex-col gap-10">
          <div className="lg:flex-1 lg:w-auto w-full lg:h-auto h-80 [&>div]:w-full [&>div]:h-full">
            <AnimatePresence delay={0.2}>
              <div className="w-full h-full bg-blue-200 "></div>
            </AnimatePresence>
          </div>
          <div className="flex lg:flex-1">
            <AnimatePresence>
              <div className="lg:pr-0 md:pr-24 pr-12 pb-5">
                <SubTitle>
                  We take care of all types of fabric and stains
                </SubTitle>
                <div className="md:pr-24 pr-6">
                  <BodyText>
                    Experience the ultimate convenience and care for your
                    laundry at our top-tier laundry mat cleaning service, where
                    we meticulously handle every load to ensure your clothes are
                    clean, fresh, and perfectly cared for.
                  </BodyText>
                </div>
              </div>

              <ul className="w-full h-auto grid grid-cols-2 gap-y-4 gap-x-4 mb-8 font-semibold text-lg text-gray-800">
                <ListContainer>Fabric Type and Care Labels</ListContainer>
                <ListContainer>Sorting</ListContainer>
                <ListContainer>Pre-treatment of Stains</ListContainer>
                <ListContainer>Detergent Selection</ListContainer>
                <ListContainer>Gentle Handling</ListContainer>
                <ListContainer>Ironing and Steaming</ListContainer>
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
                  <SubTitle>
                    Request a free laundry cleaning quote today
                  </SubTitle>
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
                      placeholder="Dry Cleaning"
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
