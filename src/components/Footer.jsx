import Button from "./Button";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex justify-between py-10">
      <h1 className="font-bold text-center mb-5 sm:font-bold">Krypto</h1>
      <div>
        <p className="font-medium mb-5">Krypto</p>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Buy NFTs</a>
          </li>
          <li>
            <a href="#">Sell Nfts</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-2 mt-5 sm:font-medium mb-5">Market</p>
        <ul>
          <li>
            <a href="#">Browse NFTs</a>
          </li>
          <li>
            <a href="#">Buy NFTs</a>
          </li>
          <li>
            <a href="#">Sell Nfts</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="mb-2 mt-5 sm:font-medium mb-5">Contact</p>
        <ul>
          <li>
            <a href="#">E-Mail</a>
          </li>
          <li>
            <a href="#">Linked In</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="mb-2 mt-5 sm:font-medium mb-5">Join Our Newsletter</h6>
        <div className="flex justify-between">
          <input
            type="email"
            required
            maxLength={24}
            placeholder="Email Address"
            className="w-66 h-10 bg-[#010922] p-5 rounded-full"
          />
        <Button label="Submit" className="right-28 h-10 sm:h-10 w-18 relative right-32"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
