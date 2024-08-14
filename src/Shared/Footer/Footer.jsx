import BackgroundImg from "../../assets/images/more/13.jpg";
import copyRightBG from "../../assets/images/more/24.jpg";
import footerLogo from "../../assets/images/more/logo1.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  FaInstagram,
  FaPhone,
  FaXTwitter,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  const handelFooterMessage = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <footer className="text-neutral-content p-10">
          <div className="lg:max-w-7xl lg:mx-auto mt-10 ">
            <img className="h-24 w-20" src={footerLogo} alt="" />
          </div>
          <div className=" lg:max-w-7xl md:xm-10 items-center lg:text-left text-center mx-auto lg:flex  mb-3 justify-between gap-32 mt-6">
            <div className="space-y-6 flex-1 ">
              <h1 className="font-rancho font-bold text-5xl text-primary-1">
                Espresso Emporium
              </h1>
              <p className="text-primary-3 text-xl">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="text-primary-1 text-4xl flex gap-3 ">
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
                <FaLinkedin />
              </div>
              <h1 className="font-rancho font-bold text-5xl text-primary-1">
                Get in Touch
              </h1>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary-1 text-xl"></FaPhone>
                <p className="text-[20px] text-primary-3">+880 1405819175</p>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail className="text-primary-1 text-xl"></MdEmail>
                <p className="text-[20px] text-primary-3">
                  fahimrashid350@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-primary-1 text-xl"></FaLocationDot>
                <p className="text-[20px] text-primary-3">
                  Eastern Housing, Mirpur
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-rancho font-bold text-5xl text-primary-1">
                Connect with Us
              </h1>
              <form onSubmit={handelFooterMessage} className="space-y-3 mt-5">
                <input
                  className="block py-2 px-4 w-9/12 rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className="block py-2 px-4 w-9/12 rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <textarea
                  className="block py-2 px-4 w-9/12 rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                  name="message"
                  placeholder="Message"
                  id=""
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline border-primary-1 font-rancho text-lg rounded-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
      <div style={{ backgroundImage: `url(${copyRightBG})` }}>
        <p className="font-rancho text-white text-center text-xl py-3">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
