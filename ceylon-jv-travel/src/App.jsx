import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import DestinationExplorer from "./components/DestinationExplorer";
import TripPlanner from "./components/TripPlanner";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import Booking from "./components/Booking";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLoading(false), 2200);
    const t2 = setTimeout(() => setLoaded(true), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="app">
      <LoadingScreen done={!loading} />
      <Navbar />
      <Hero loaded={loaded} />
      <Destinations />
      <Packages />
      <DestinationExplorer />
      <TripPlanner />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Blog />
      <Booking />
      <Footer />
      <AIAssistant />
    </div>
  );
}
