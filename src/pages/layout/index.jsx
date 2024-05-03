import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;