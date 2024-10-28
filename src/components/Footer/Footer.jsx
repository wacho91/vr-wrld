
const FooterLinks = [
    { 
        id: 1, 
        title: "Home", 
        link: "/#" 
    },
    {
      id: 2,
      title: "About",
      link: "/#about",
    },
    {
      id: 3,
      title: "Contact",
      link: "/#contact",
    },
    {
      id: 4,
      title: "Blog",
      link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                {/*Company Details*/}
                <div>
                    <h1>
                        Metaverse
                    </h1>
                    <p className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat dolor illum a aut iste expedita.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
