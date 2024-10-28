
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const AppStore = () => {
  return (
    <div>
        <div>
            <h1>
                Get Started with our app
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                magnam harum accusantium odit?
            </p>
            <div>
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
