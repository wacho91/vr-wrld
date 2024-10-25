
import { BiPlayCircle } from "react-icons/bi";
import BannerPng from "../../assets/banner1.png";

const Banner = () => {
  return (
    <div className="py-12 sm:py-0 relative">
        <div className="container min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                {/* image section */}
                <div>
                    <img src={BannerPng} alt="" className="w-full max-w-[400px]"/>
                </div>
                {/* text content section */}
                <div className=" lg:pr-20 relative">
                    <div className="relative z-10 space-y-5">
                        <h1 className="text-4xl font-semibold">
                            GET READY TO ENJ0Y VR{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                Movies WITH OUR PLATFORM
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
                            <button className="flex items-center gap-3">
                                {" "}
                                <BiPlayCircle />
                                See More 
                            </button>
                        </div>
                    </div>
                    {/* backgrond color blob */}
                    <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
