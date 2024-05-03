import NavBlock from "./nav-block";
import NavContainer from "./nav-container";

const Navbar = () => {
   return (
      <header className="fixed w-full">
         <NavBlock />
         <NavContainer />
      </header>
   );
};

export default Navbar;
