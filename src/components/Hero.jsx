import hero from "../assets/hero.png";
import Button from "./Button";
import BlurCircle from "./BlurCircle";

const Hero = ({ onClick }) => {
  return (
    <section
      className="sm:flex items-center justify-between gap-20"
      onClick={onClick}
    >
      <div className="flex flex-col justify-between gap-y-5 w-60">
        <h1 className="text-5xl font-bold leading-normal">
          Discover and Collect rare NFTs
        </h1>
        <p>
          The most secure marketplace for buying and selling unique crypto
          assets
        </p>
        <div className="flex space-between gap-5 mb-20 mt-10">
          <Button label="BUY NFTS" />
          <Button label="SELL NFTS" />
        </div>
      </div>
      <img
        src={hero}
        alt="Hero"
        height={500}
        width={500}
        className="hidden sm:block"
      />
      <BlurCircle className="absolute right-0 bg-[#91d7d6] z-0" />
    </section>
  );
};

export default Hero;
