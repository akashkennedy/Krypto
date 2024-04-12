import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedOn from "./components/FeaturedOn";
import Analytics from "./components/Analytics";
import GetOurApp from "./components/GetOurApp";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import { useState } from "react";

const App = () => {
  const [menu, openMenu] = useState(false);

  const handleMenu = () => {
    openMenu(!menu);
  };

  if (menu) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <main className="px-5 sm:px-24 h-full bg-background text-white font-body">
      {menu ? <HamburgerMenu onClick={handleMenu} /> : ""}
      <Header onClick={handleMenu} />
      <Hero />
      <FeaturedOn />
      <Analytics />
      <GetOurApp />
      <Footer />
    </main>
  );
};

export default App;
