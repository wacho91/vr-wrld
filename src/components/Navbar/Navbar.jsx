
import Logo from "../../assets/logo.png"

const NavLinks = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Products",
      link: "#",
    },
    {
      id: 3,
      name: "Pricing",
      link: "#",
    },
    {
      id: 4,
      name: "Contact",
      link: "#",
    },
];

const Navbar = () => {
  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/*Logo Section*/}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-16"/>
            <p className="text-3xl">
              VR <span className="font-boldd">World</span>
            </p>
          </div>
          {/*Desktop Menu Section*/}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({id, name, link}) => {
                return (
                  <li key={id} className="py-4">
                    <a 
                      href={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary trasnsition-color duration-500"
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
            {/*Dark Mode*/}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
