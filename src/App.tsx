import React from "react";
import { Hero, Navbar, Pricing, Services } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-12">
        <Hero />
        <Pricing />
        <Services />
      </main>
    </>
  );
};

export default App;
