import Button from "./Button";
import { footerMarket, footerKrypto, footerContact } from "./data";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between py-10">
      <h1 className="font-bold text-center sm:mt-5 ">Krypto</h1>
      <div>
        <p className="mb-2  mt-5 sm:mb-5 font-medium">Krypto</p>
        <ul>
          {footerKrypto.map((item) => (
            <li key={item.id} className="hover:opacity-70 transition-opacity">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 mt-5 sm:mb-5 font-medium">Market</p>
        <ul>
          {footerMarket.map((item) => (
            <li key={item.id} className="hover:opacity-70 transition-opacity">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 mt-5 sm:mb-5 font-medium">Contact</p>
        <ul>
          {footerContact.map((item) => (
            <li key={item.id} className="hover:opacity-70 transition-opacity">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
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
          <Button
            label="Submit"
            className="right-24 h-10 sm:right-32 w-18 relative"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
