import BlurCircle from "../components/BlurCircle";



const Header = () => {
  return (
    <header className="flex items-center justify-between mx-24 py-8">
      <h1 className="font-bold mt-3">Krypto</h1>
      <BlurCircle />
      <nav className="mt-3">
        <ul className="flex items-center justify-between gap-5">
          <li>
            <a href="#" className="text-lg font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-lg font-medium">
              Buy NFTs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
