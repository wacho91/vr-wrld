import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Quotes from "./components/Quotes/Quotes";
import Banner from "./components/Banner/Banner";

import AOS from "aos";
import "aos/dist/aos.css";
import Banner2 from "./components/Banner/Banner2";
import Features from "./components/Features/Features";

function App() {

  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sin",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero togglePlay={togglePlay}/>
      <Quotes />
      <Banner togglePlay={togglePlay}/>
      <Banner2 togglePlay={togglePlay} />
      <Features />
    </main>
  )
}

export default App
