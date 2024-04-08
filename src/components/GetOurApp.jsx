import mobile from "../assets/mobile.png";
import Button from "./Button";

const GetOurApp = () => {
  return (
    <section className="flex justify-between items-center mx-24 gap-20">
      <div className="flex flex-col justify-between items-start gap-20">
        <h6 className="text-[#a6dbda] text-xl font-medium">Get Our App</h6>
        <h1 className="text-5xl font-bold leading-loose">
          Sell Your NFTs from Anywhere At Any Time
        </h1>
        <p className="w-[300px] pb-10 leading-loose">
          With our easy-to-use platform, you can buy or sell assets from
          anywhere in the world, at any time.
        </p>
        <Button label="GET STARTED" />
      </div>
      <img src={mobile} alt="Get Our App" />
    </section>
  );
};

export default GetOurApp;
