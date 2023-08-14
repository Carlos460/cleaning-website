import { InputField, SubmitButton, TextArea } from '@/components/Form';
import { BodyText, SubTitle, Title } from '@/components/Typography';
import Wrapper from '@/components/Wrapper';
import ReachCard from '@/widgets/ReachCard';
import DropDownInfo from '@/components/DropDownInfo';
import AnimatePresence from '@/components/AnimatePresence';

export default function Contact() {
  return (
    <>
      {/* Contact Form Section */}
      <Wrapper>
        <section className="py-24 xl:py-60 flex flex-col xl:flex-row gap-10">
          <AnimatePresence>
            <div className="flex-1 xl:w-auto max-w-2xl mx-auto">
              <Title>Get in touch with our team today</Title>
              <BodyText>
                Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
                adipiscing tincidunt interdum tellus du.
              </BodyText>
              <div className="w-full h-80 bg-blue-400 mt-10"></div>
            </div>
          </AnimatePresence>
          <AnimatePresence delay={0.1}>
            <div className="flex-1 w-full mx-auto xl:mx-0 max-w-2xl shadow-lg rounded-2xl md:p-10 p-8 my-10 bg-white lg:my-0">
              <form className="shadow-black rounded-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8">
                  <InputField fieldName="Name" placeholder="John Doe" />
                  <InputField fieldName="Email" placeholder="John@Doe.com" />
                  <InputField fieldName="Phone" placeholder="(123) 456-7891" />
                  <InputField
                    fieldName="Service request"
                    placeholder="House cleaning"
                  />
                </div>
                <TextArea fieldName="Message" />
                <div className="pt-5">
                  <SubmitButton text="Submit Message" />
                </div>
              </form>
            </div>
          </AnimatePresence>
        </section>
      </Wrapper>

      {/* Reach out Section */}
      <Wrapper>
        <section className="pb-56">
          <AnimatePresence>
            <div className="text-center pb-10">
              <SubTitle>Want to reach out directly?</SubTitle>
              <div className="max-w-3xl mx-auto">
                <BodyText>
                  Id purus mattis quis quis eros tellus amet enim integer
                  lobortis dui ut mauris blandit ut pellentesque ultricies purus
                  pulvinar id cursus adipiscing.
                </BodyText>
              </div>
            </div>
          </AnimatePresence>
          <div className="flex lg:flex-row flex-col lg:gap-10 gap-20 pt-20">
            <AnimatePresence>
              <ReachCard
                title="Email us"
                bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincid"
                infoText="contact@cleaning.com"
              />
            </AnimatePresence>

            <AnimatePresence delay={0.1}>
              <ReachCard
                title="Talk with us"
                bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincid"
                infoText="(414)567-2109"
              />
            </AnimatePresence>

            <AnimatePresence delay={0.2}>
              <ReachCard
                title="Live Chat"
                bodyText="Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing tincid"
                infoText="Start Chat"
              />
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>

      {/* Frequently Asked Question Section */}
      <Wrapper>
        <section className="pt-5 pb-40">
          <AnimatePresence>
            <div className="text-center pb-10">
              <SubTitle>Frequently Asked Questions</SubTitle>
              <div className="max-w-2xl mx-auto">
                <BodyText>
                  Cras tincidunt lobortis feugiat vivamus at morbi leo urna
                  molestie atole elementum eu facilisis faucibus interdum
                  posuere.
                </BodyText>
              </div>
            </div>
          </AnimatePresence>

          <AnimatePresence>
            <div className="flex flex-col gap-8 max-w-4xl mx-auto shadow-sm border border-solid rounded-lg md:p-20 p-8">
              <DropDownInfo
                title="In which locations do you service?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
              />
              <DropDownInfo
                title="Are you licensed and insured?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
              />
              <DropDownInfo
                title="Are your cleaning products safe and eco-friendly?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
              />
              <DropDownInfo
                title="Are there any additional fees or hidden costs??"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
              />
              <DropDownInfo
                title="Do you bring your own supplies and equipment?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
              />
              <DropDownInfo
                title="What is your cancellation/rescheduling policy?"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas ut sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes."
              />
            </div>
          </AnimatePresence>
        </section>
      </Wrapper>
    </>
  );
}
