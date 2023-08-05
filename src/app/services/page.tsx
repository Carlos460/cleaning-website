import Wrapper from "@/components/Wrapper";
import PricingCard from "@/widgets/PricingCard";
import { BodyText, SubTitle, Title } from "@/components/Typography";
import ReviewCard from "@/widgets/ReviewCard";
import Link from "next/link";
import AnimatePresence from "@/components/AnimatePresence";
export default function Services() {
  return (
    <>
      {/* Pricing Section */}
      <Wrapper>
        <section className="pt-24">
          {/* Header Text*/}
          <div className="md:container md:mx-auto">
            <AnimatePresence>
              <div className="text-center mg-bottom-40px pt-28">
                <Title>Pricing</Title>
                <div className="max-w-lg mx-auto">
                  <BodyText>
                    Condimentum mauris sit cursus amet id non neque pharetra
                    nulla ornare sed facilisis senectus dapibus nibh
                  </BodyText>
                </div>
              </div>
            </AnimatePresence>
          </div>

          {/* Price Card Container */}
          <div className="gap-10 py-16 flex lg:px-0 px-24 lg:flex-row flex-col justify-center text-left">
            <AnimatePresence>
              <Link href="/#contact">
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
              </Link>
            </AnimatePresence>
            <AnimatePresence delay={0.1}>
              <Link href="/#contact">
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
              </Link>
            </AnimatePresence>

            <AnimatePresence delay={0.2}>
              <Link href="/#contact">
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
              </Link>
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>

      {/* Review Section */}
      <Wrapper>
        <section className="py-44">
          <div className="flex flex-col gap-5 mb-5 items-center">
            <ul className="flex gap-5">
              <AnimatePresence>
                <li className="h-8 w-8 bg-blue-500"></li>
              </AnimatePresence>

              <AnimatePresence delay={0.1}>
                <li className="h-8 w-8 bg-blue-500"></li>
              </AnimatePresence>

              <AnimatePresence delay={0.2}>
                <li className="h-8 w-8 bg-blue-500"></li>
              </AnimatePresence>

              <AnimatePresence delay={0.3}>
                <li className="h-8 w-8 bg-blue-500"></li>
              </AnimatePresence>

              <AnimatePresence delay={0.4}>
                <li className="h-8 w-8 bg-blue-500"></li>
              </AnimatePresence>
            </ul>

            <div className="max-w-xl text-center">
              <AnimatePresence>
                <SubTitle>5 out of 5 stars on Google Reviews</SubTitle>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10">
            <AnimatePresence>
              <ReviewCard
                quote="“Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed dolorol facilisis senectus dolor conse.”"
                name="Micheal Jackson"
                location="New York City"
              />
            </AnimatePresence>

            <AnimatePresence>
              <ReviewCard
                quote="“Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed dolorol facilisis senectus dolor conse.”"
                name="Emily Smith"
                location="Miami"
              />
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
