import Wrapper from "@/components/Wrapper";
import PricingCard from "@/widgets/PricingCard";
import { BodyText, SubTitle, Title } from "@/components/Typography";

export default function Services() {
  return (
    <>
      {/* Pricing Section */}
      <Wrapper>
        <section className="py-24">
          <div className="md:container md:mx-auto">
            <div className="text-center mg-bottom-40px">
              <Title>Pricing</Title>
              <div className="max-w-lg mx-auto">
                <BodyText>
                  Condimentum mauris sit cursus amet id non neque pharetra nulla
                  ornare sed facilisis senectus dapibus nibh
                </BodyText>
              </div>
            </div>
          </div>
          <div className="gap-10 py-16 flex justify-center text-left">
            <PricingCard
              imageSrc=""
              alt=""
              title="BASIC"
              pricing="$100 USD"
              description="Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh"
              details="What's included?"
              sqft="Up to 1500 sqft"
              hours="4 hours"
              task="Up to 2 cleaning task"
              buttonTheme="grey"
            />
            <PricingCard
              imageSrc=""
              alt=""
              title="STANDARD"
              pricing="$149 USD"
              description="Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh"
              details="What's included?"
              sqft="Up to 2500 sqft"
              hours="6 hours"
              task="Up to 4 cleaning task"
              buttonTheme="grey"
            />
            <PricingCard
              imageSrc=""
              alt=""
              title="DELUXE"
              pricing="$299 USD"
              description="Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh"
              details="What's included?"
              sqft="Up to 2500 sqft"
              hours="12 hours"
              task="Up to 10 cleaning task"
              outline={true}
            />
          </div>
        </section>
      </Wrapper>

      {/* Review Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Review Section</h1>
        </section>
      </Wrapper>
    </>
  );
}
