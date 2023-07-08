import Wrapper from "@/components/Wrapper";
import PricingCard from "@/widgets/PricingCard";

export default function Services() {
  return (
    <>
      {/* Pricing Section */}
      <Wrapper>
        <section className="py-64">
          <div>
            <PricingCard
              description=""
              details=""
              title=""
              imageSrc=""
              pricing=""
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
