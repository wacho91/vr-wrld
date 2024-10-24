import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"

import AOS from "aos";
import "aos/dist/aos.css";

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
    </main>
  )
}

export default App
