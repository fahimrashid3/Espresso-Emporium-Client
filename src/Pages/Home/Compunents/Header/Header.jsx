import { Link } from "react-router-dom";
import HeaderBg from "../../../../assets/images/more/6.jpeg";
const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HeaderBg})` }}
      className="md:bg-cover md:bg-center bg-contain bg-no-repeat
       lg:scale-x-[-1] min-h-screen"
    >
      <div className="lg:scale-x-[-1] lg:w-[50%] md:w-[60] ">
        <div className="lg:min-w-full md:space-y-4 space-y-2 lg:pr-[15%] lg:pt-[35%] md:pt-[30%] pt-[5%] md:pl-[15%] pl-[5%]">
          <h1
            className="font-rancho lg:font-bold md:font-semibold font-semibold
           lg:text-6xl md:text-5xl text-2xl text-white"
          >
            Would you like a Cup of Delicious Coffee?
          </h1>

          <p className="text-white lg:text-xl md:text-lg sm:text-[12px]">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div>
            <Link to="/learnMore">
              <button
                className="
              font-rancho text-xl text-black hover:text-white bg-[#E3B577] hover:bg-transparent border px-3 py-1 hover:border-white 
              border-[#E3B577]"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
