import { InputField, SubmitButton, TextArea } from "@/components/Form";
import { BodyText, Title } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";

export default function Contact() {
  return (
    <>
      {/* Contact Form Section */}
      <Wrapper>
          <section className="py-24 xl:py-60 flex flex-col xl:flex-row gap-10">
          <div className="flex-1 xl:w-auto max-w-2xl mx-auto">
            <Title>Get in touch with our team today</Title>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
              adipiscing tincidunt interdum tellus du.
            </BodyText>
            <div className="w-full h-80 bg-blue-400 mt-10"></div>
          </div>
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
        </section>
      </Wrapper>

      {/* Reach out Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Reach out Section</h1>
        </section>
      </Wrapper>

      {/* Frequently Asked Question Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Asked Questions</h1>
        </section>
      </Wrapper>
    </>
  );
}
