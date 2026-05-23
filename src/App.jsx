import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BouquetCollection from "./components/BouquetCollection";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        <section id="bouquet">
          <BouquetCollection />
        </section>
        {/* About Section */}
        {/* <section id="about">
          <About />
        </section> */}

        {/* Contact Section */}
        {/* <section id="contact">
          <Contact />
        </section> */}

      </main>

      <Footer />
    </div>
  );
};

export default App;
