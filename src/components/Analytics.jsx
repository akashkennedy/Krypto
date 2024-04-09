import analytics from "../assets/analytics.png";
import Button from "./Button";

const Analytics = () => {
  return (
    <section className="flex items-center justify-between gap-20">
      <img src={analytics} alt="Analytics" />
      <div className="flex flex-col justify-between gap-y-5">
        <h6 className="text-subhead text-xl font-medium">Analytics</h6>
        <h1 className="text-5xl font-bold leading-normal">
          Built-In Analytics to Track Your NFTs
        </h1>
        <p>Use our built-in analytics dashboard to pull valuable</p>
        <p>insights and monitor the value of your krypto</p>
        <p>portfolio over time.</p>
        <Button label="VIEW OUR PRICING" className="w-60 mt-5"/>
      </div>
    </section>
  );
};

export default Analytics;
