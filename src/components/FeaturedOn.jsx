import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";

const FeaturedOn = () => {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">Featured On</h2>
      <div className="flex flex-col py-5 gap-5 sm:flex-row items-center justify-between bg-featuredbg px-10 mt-5 rounded-md">
        <img src={logo1} alt="Fast Company" />
        <img src={logo2} alt="Tech Crunch" />
        <img src={logo3} alt="IDK" />
        <img src={logo4} alt="Forbes" />
      </div>
    </section>
  );
};

export default FeaturedOn;
