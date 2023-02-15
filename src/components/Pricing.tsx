import React from "react";
import { PricingCard, Section } from ".";

const Pricing: React.FC = () => {
  return (
    <Section className="mt-32" title="Our Pricing" description="Penawaran terbaik untuk anda">
      <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-3 gap-12 mt-5 md:mt-7 lg:mt-10 xl:mt-12">
        <PricingCard
          name="Basic"
          variant="Primary"
          price={20}
          benefits={["10 Graphic Content", "Design Theme", "5 Photo Product"]}
        />
        <PricingCard
          name="Standard"
          variant="Secondary"
          price={30}
          benefits={["15 Graphic Content", "Design Theme", "5 Photo Product", "Caption & Hashtag"]}
        />
        <PricingCard
          name="Premium"
          variant="Primary"
          price={50}
          benefits={[
            "25 Graphic Content",
            "Design Theme",
            "10 Photo Product",
            "Caption & Hashtag",
            "Web Landing Page",
          ]}
          className="md:col-start-4"
        />
      </div>
    </Section>
  );
};

export default Pricing;
