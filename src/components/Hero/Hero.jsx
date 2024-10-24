
import { BiPlayCircle } from "react-icons/bi";
import HeroPng from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
                {/*Hero text section*/}
                <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
                    <h1 className="text-4xl font-bold">
                        GET READY TO ENJ0Y VR{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            GAMES WITH OUR PLATFORM
                        </span>
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                        molestias quia exercitationem ex inventore labore beatae cumque
                        et quaerat voluptas?
                    </p>
                    <div className="flex gap-6">
                        <button className="primary-btn">
                            Get Started
                        </button>
                        <button className="flex items-center gap-2">
                            {" "}
                            <BiPlayCircle className="text-3xl" />
                            See Demo 
                        </button>
                    </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                    <img src={HeroPng} alt="image" className=""/>
                </div>
            </div>
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
    </div>
  )
}

export default Hero
