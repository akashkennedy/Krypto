import Close from "../assets/close.png";
import {navLinks} from "./data"

const HamburgerMenu = ({ onClick }) => {
  return (
    <div className="absolute text-2xl w-1/2 h-fit right-0 backdrop-blur-2xl sm:hidden">
      <nav className="mt-10 ml-5 flex gap-5">
        <ul className="flex flex-col gap-5">
          {navLinks.map(item => (
            <>
            <li key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
              <hr />
              </>
          ))}
        </ul>
        <img
          src={Close}
          alt="Close Icon"
          className="h-10 ml-5 cursor-pointer"
          onClick={onClick}
        />
      </nav>
    </div>
  );
};

export default HamburgerMenu;
