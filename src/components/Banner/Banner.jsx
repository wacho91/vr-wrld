
import BannerPng from "../../assets/banner1.png";

const Banner = () => {
  return (
    <div>
        <div>
            <div>
                {/* image section */}
                <div>
                    <img src={BannerPng} alt="" />
                </div>
                {/* text content section */}
                <div>
                    <div>
                        <h1>
                            GET READY TO ENJ0Y VR{" "}
                            <span>
                                Movies WITH OUR PLATFORM
                            </span>
                        </h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                            molestias quia exercitationem ex inventore labore beatae cumque
                            et quaerat voluptas?
                        </p>
                        <div>
                            <button>
                                Get Started
                            </button>
                            <button>
                                {" "}
                                See More 
                            </button>
                        </div>
                    </div>
                    {/* backgrond color blob */}
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
