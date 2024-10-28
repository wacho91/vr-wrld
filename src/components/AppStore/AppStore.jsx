
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
        <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold">
                Get Started with our app
            </h1>
            <p className="text-center sm:px-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                magnam harum accusantium odit?
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
                <a href="#">
                    <img 
                        src={AppStoreImg} 
                        alt="img"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" 
                    />
                </a>
                <a href="#">
                    <img 
                        src={PlayStoreImg} 
                        alt="img"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" 
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default AppStore
