import React from "react";
import { Hero, Navbar } from "./components";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
