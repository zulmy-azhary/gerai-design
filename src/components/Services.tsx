import React from "react";
import { Section, ServiceCard } from ".";

const Services: React.FC = () => {
  return (
    <Section
      className="mt-12"
      title="Our Services"
      description="Layanan yang kita tawarkan untuk anda"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-5 md:mt-7 lg:mt-10 xl:mt-12">
        <ServiceCard title="Design" description="Membuat tampilan instagram anda lebih menarik" />
        <ServiceCard title="Photo" description="Membuat foto produk anda lebih menarik" />
        <ServiceCard title="Video" description="Membuat konsep, pengambilan video dan mengedit video" />
        <ServiceCard title="Caption" description="Membuat bahasa yang persuasif untuk menarik audiens" className="lg:col-start-3" />
        <ServiceCard title="Landing Page" description="Membuat halaman website untuk kepentingan marketing" className="md:col-start-4" />
      </div>
    </Section>
  );
};

export default Services;
