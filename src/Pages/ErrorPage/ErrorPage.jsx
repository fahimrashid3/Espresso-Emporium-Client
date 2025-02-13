import { Link } from "react-router-dom";
import errorImg from "../../assets/images/404/404.gif";
import { IoArrowBack } from "react-icons/io5";
import Footer from "../../Shared/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex items-center gap-2 mx-auto mt-20 font-rancho font-bold text-3xl text-primary-2">
          <IoArrowBack /> Back to home
        </button>
      </Link>

      <img className="mx-auto" src={errorImg} alt="" />
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
