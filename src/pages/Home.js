
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Intro from "../components/Intro";
import WhyLebanon from "../components/WhyLebanon";
import DestinationPreview from "./DestinationPreview";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
     <div>
      <Hero />
      <Stats />
      <Intro />
      <WhyLebanon />
      <DestinationPreview />
      <Testimonials />
    </div>
  );
}

export default Home;