import BlurCircle from "../components/BlurCircle";
import hamburger from "../assets/hamburger.png";
import navLinks from "./data";

const Header = ({ onClick }) => {
  return (
    <header className="flex items-center justify-between py-8">
      <h1 className="font-bold mt-3">Krypto</h1>
      <BlurCircle className="absolute left-96 bg-[#8959d8] z-0" />
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-between gap-5">
          {navLinks.map((item) => (
            <li className="transition-all hover:opacity-70" key={item.id}>
              <a href={item.href} className="text-lg font-medium">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <img
        src={hamburger}
        alt="Hamburger Menu"
        className="cursor-pointer sm:hidden"
        onClick={onClick}
      />
    </header>
  );
};
export default Header;
