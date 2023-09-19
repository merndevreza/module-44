import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button className="text-2xl p-4 md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </button>
      <ul className={`md:flex h-full z-10 md:gap-5 absolute md:static bg-white p-6 transition-all ${open?"translate-x-0":"-translate-x-28 md:translate-x-0"}`}>
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
