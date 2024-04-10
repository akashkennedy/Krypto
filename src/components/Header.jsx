import BlurCircle from "../components/BlurCircle";
import hamburger from "../assets/hamburger.png"

const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <h1 className="font-bold mt-3">Krypto</h1>
      <BlurCircle className="absolute left-96 bg-[#8959d8] z-0"/>
      <nav className="hidden sm:mt-3">
        <ul className="flex items-center justify-between gap-5">
          <li className="transition-all hover:-translate-y-0.5">
            <a href="#" className="text-lg font-medium">
              About
            </a>
          </li>
          <li className="transition-all hover:-translate-y-0.5">
            <a href="#" className="text-lg font-medium">
              Pricing
            </a>
          </li>
          <li className="transition-all hover:-translate-y-0.5">
            <a href="#" className="text-lg font-medium">
              Contact
            </a>
          </li>
          <li className="transition-all hover:-translate-y-0.5">
            <a href="#" className="text-lg font-medium">
              Buy NFTs
            </a>
          </li>
        </ul>
      </nav>
      <img src={hamburger} alt="Hamburger Menu" className="cursor-pointer"/>
    </header>
  );
};

export default Header;
