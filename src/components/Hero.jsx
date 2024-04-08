import hero from "../assets/hero.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="mt-10  flex justify-between items-center mx-24">
        <div className="w-1/4">
          <h1 className="text-5xl font-bold leading-loose">
            Discover and Collect rare NFTs
          </h1>
          <p>
            The most secure marketplace for buying and selling unique crypto
            assets
          </p>
        </div>
        <img src={hero} alt="Hero" height={500} width={500} />
      </div>
      <Button label="BUY NFTS" />
      <Button label="SELL NFTS" />
    </section>
  );
};

export default Hero;
