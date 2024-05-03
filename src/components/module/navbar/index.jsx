import NavBlock from "./nav-block";
import NavContainer from "./nav-container";

const Navbar = () => {
   return (
      <header className="fixed w-full bg-white z-10">
         <NavBlock />
         <NavContainer />
      </header>
   );
};

export default Navbar;
