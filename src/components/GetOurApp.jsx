import mobile from "../assets/mobile.png";
import Button from "./Button";

const GetOurApp = () => {
  return (
    <section className="mt-10 sm:flex justify-between items-center gap-10">
      <div className="flex flex-col justify-between items-start gap-y-5">
        <h6 className="text-[#a6dbda] text-xl font-medium">Get Our App</h6>
        <h1 className="text-5xl font-bold leading-normal">
          Sell Your NFTs from Anywhere At Any Time
        </h1>
        <p className="w-[300px] leading-10">
          With our easy-to-use platform, you can buy or sell assets from
          anywhere in the world, at any time.
        </p>
        <Button label="GET STARTED" className="w-60 mt-5"/>
      </div>
      <img src={mobile} alt="Get Our App" className="hidden sm:block"/>
    </section>
  );
};

export default GetOurApp;
