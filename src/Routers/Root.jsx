import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import TopLogoSection from "../Shared/TopLogoSection/TopLogoSection";

const Root = () => {
  return (
    <div>
      <TopLogoSection></TopLogoSection>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
