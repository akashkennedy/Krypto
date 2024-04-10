import Button from "./Button";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between py-10">
      <h1 className="font-bold text-center sm:mt-5 ">Krypto</h1>
      <div>
        <p className="mb-2  mt-5 sm:mb-5 font-medium">Krypto</p>
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
        <p className="mb-2 mt-5 sm:mb-5 font-medium">Market</p>
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
        <p className="mb-2 mt-5 sm:mb-5 font-medium">Contact</p>
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
        <h6 className="mb-2 mt-5 sm:mb-5 font-medium">Join Our Newsletter</h6>
        <div className="flex justify-between">
          <input
            type="email"
            required
            maxLength={24}
            placeholder="Email Address"
            className="w-66 h-10 bg-[#010922] p-5 rounded-full"
          />
        <Button label="Submit" className="right-24 h-10 sm:right-32 w-18 relative"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
