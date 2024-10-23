
import { useEffect, useState } from "react"
import { BiSolidSun, BiSolidMoon } from "react-icons" 

const Darkmode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.docuemntElement; //Access to html

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if(theme === "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        } 
        else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    });

  return (
    <>
        {theme === "dark" ? (
            <BiSolidSun 
                className="text-2xl cursor-pointer"
                onClick={() => setTheme("light")}
            />
        ): (
            <BiSolidMoon 
                className="text-2xl cursor-pointer"
                onClick={() => setTheme("dark")}
            />
        )} 
    </>
  )
}

export default Darkmode
