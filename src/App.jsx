import { useState } from "react";
import {
  Header,
  Hero,
  Analytics,
  FeaturedOn,
  GetOurApp,
  Footer,
  HamburgerMenu,
} from "./components/index";

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

  const toggleMenu = () => {
    openMenu(false);
  };

  return (
    <main className="px-5 sm:px-24 h-full bg-background text-white font-body">
      {menu ? <HamburgerMenu onClick={handleMenu} /> : ""}
      <Header onClick={handleMenu} />
      <Hero onClick={toggleMenu} />
      <FeaturedOn />
      <Analytics />
      <GetOurApp />
      <Footer />
    </main>
  );
};

export default App;
