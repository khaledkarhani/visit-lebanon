
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Intro from "../components/Intro";
import WhyLebanon from "../components/WhyLebanon";
import DestinationPreview from "./DestinationPreview";

function Home() {
  return (
     <div>
      <Hero />
      <Stats />
      <Intro />
      <WhyLebanon />
      <DestinationPreview />
    </div>
  );
}

export default Home;