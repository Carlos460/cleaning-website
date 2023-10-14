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
        <section className="pt-44">
          {/* Header Text*/}
          <div className="md:container md:mx-auto">
            <AnimatePresence>
              <div className="text-center">
                <Title>Pricing</Title>
                <div className="max-w-lg mx-auto mb-0">
                  <BodyText>
                    Since 2000, E-Z Laundry Cleaners has provided quality
                    services to clients by providing them with the professional
                    care they deserve.
                  </BodyText>
                </div>
              </div>
            </AnimatePresence>
          </div>

          {/* Price Card Container */}
          <div className="gap-10 py-16 flex lg:flex-row flex-col justify-center">
            <AnimatePresence>
              <Link href="/#contact">
                <PricingCard
                  imageSrc="/drycleaning.png"
                  alt=""
                  title="Pressing & Dry Cleaning"
                  pricing="$100 USD"
                  description="Experience convenience with our laundry app, 
                  delivering specialized dry cleaning and professional pressing 
                  services to keep your garments sharp, fresh, and impeccable for any occasion."
                  details="What's included?"
                  sqft="Choice of dry cleaning or professional pressing services"
                  hours="Specialized stain and odor removal"
                  task="Convenient pickup and delivery options"
                  buttonTheme="grey"
                />
              </Link>
            </AnimatePresence>
            <AnimatePresence delay={0.1}>
              <Link href="/#contact">
                <PricingCard
                  imageSrc="/alterations.png"
                  alt=""
                  title="Alterations"
                  pricing="$149 USD"
                  description="Our skilled tailors specialize in customizing garment fit through services 
                  like hemming and seam adjustments, ensuring a perfect fit and refined look for each piece."
                  details="What's included?"
                  sqft="Handling of diverse types of garments"
                  hours="Hemming, seam, and length adjustments"
                  task="Experienced tailors' expertise"
                  buttonTheme="grey"
                />
              </Link>
            </AnimatePresence>

            <AnimatePresence delay={0.2}>
              <Link href="/#contact">
                <PricingCard
                  imageSrc="/specialrequest.png"
                  alt=""
                  title="Special Requests"
                  pricing="TBD"
                  description="Our laundry app accommodates special requests, ensuring careful handling of oversized or 
                  delicate items like comforters and silk by our professional launderers."
                  details="What's included?"
                  sqft="Care for delicate fabrics like silk and lace"
                  hours="Handling oversized items like comforters and blankets"
                  task="Hand washing options"
                  buttonTheme="grey"
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
                <li className="h-8 w-8">
                  <img
                    className=" w-full h-full object-cover"
                    src="/star.png"
                    alt=""
                  />
                </li>
              </AnimatePresence>

              <AnimatePresence delay={0.1}>
                <li className="h-8 w-8">
                  <img
                    className=" w-full h-full object-cover"
                    src="/star.png"
                    alt=""
                  />
                </li>
              </AnimatePresence>

              <AnimatePresence delay={0.2}>
                <li className="h-8 w-8">
                  <img
                    className=" w-full h-full object-cover"
                    src="/star.png"
                    alt=""
                  />
                </li>
              </AnimatePresence>

              <AnimatePresence delay={0.3}>
                <li className="h-8 w-8">
                  <img
                    className=" w-full h-full object-cover"
                    src="/star.png"
                    alt=""
                  />
                </li>
              </AnimatePresence>

              <AnimatePresence delay={0.4}>
                <li className="h-8 w-8">
                  <img
                    className=" w-full h-full object-cover"
                    src="/star.png"
                    alt=""
                  />
                </li>
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
                image="/person2.png"
                quote="“Great service! Laundry was returned clean, nicely folded, and according to my requests. On time and friendly delivery. Highly recommended!”"
                name="Yael Yisraeli"
                location="Service"
              />
            </AnimatePresence>

            <AnimatePresence>
              <ReviewCard
                image="/person1.png"
                quote="“Great place to get dry cleaning done. Staff is kind and respectful. Been with them for years...had our home drier break once for months. we didn't have issues with drying our washed clothing there.”"
                name="Samar k Said"
                location="Atmopshere"
              />
            </AnimatePresence>
          </div>
        </section>
      </Wrapper>
    </>
  );
}
