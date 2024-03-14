import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import Home from "./pages/Home"

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> 
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
