import hero from "../assets/hero.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex items-center justify-between gap-20">
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
      <img src={hero} alt="Hero" height={500} width={500} />
    </section>
  );
};

export default Hero;
