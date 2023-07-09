import { SubTitle } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import ReviewCard from "@/widgets/ReviewCard";

export default function Services() {
  return (
    <>
      {/* Pricing Section */}
      <Wrapper>
        <section className="py-64">
          <h1>Pricing Section</h1>
        </section>
      </Wrapper>

      {/* Review Section */}
      <Wrapper>
        <section className="py-64">
          <div className="flex flex-col gap-5 mb-5 items-center">
            <ul className="flex gap-5">
              <li className="h-8 w-8 bg-blue-500"></li>
              <li className="h-8 w-8 bg-blue-500"></li>
              <li className="h-8 w-8 bg-blue-500"></li>
              <li className="h-8 w-8 bg-blue-500"></li>
              <li className="h-8 w-8 bg-blue-500"></li>
            </ul>
            <div className="max-w-xl text-center">
              <SubTitle>5 out of 5 stars on Google Reviews</SubTitle>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-10">
            <ReviewCard
              quote="“Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed dolorol facilisis senectus dolor conse.”"
              name="Micheal Jackson"
              location="New York City"
            />
            <ReviewCard
              quote="“Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed dolorol facilisis senectus dolor conse.”"
              name="Emily Smith"
              location="Miami"
            />
          </div>
        </section>
      </Wrapper>
    </>
  );
}
