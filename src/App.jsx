import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedOn from "./components/FeaturedOn";
import Analytics from "./components/Analytics";
import GetOurApp from "./components/GetOurApp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="h-full bg-background text-white font-body px-24">
      <Header />
      <Hero />
      <FeaturedOn />
      <Analytics />
      <GetOurApp />
      <Footer />
    </main>
  );
};

export default App;
