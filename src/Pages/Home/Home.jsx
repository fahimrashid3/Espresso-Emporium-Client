import { Link, useLoaderData } from "react-router-dom";
import Features from "./Compunents/Features/Features";
import Header from "./Compunents/Header/Header";
import Navbar from "./Navbar/Navbar";
import CoffeeDetails from "../CoffeeDetails/CoffeeDetails";

import BackgroundImg from "../../assets/images/more/1.png";
import { useState } from "react";

const Home = () => {
  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees);
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Features></Features>

      <div
        className="lg:my-20 md:my-16 my-10"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      >
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-16 lg:mb20">
          <p className="text-xl text-center text-primary-3">
            --- Sip & Savor ---
          </p>
          <h1 className="font-rancho font-bold text-5xl text-primary-1 text-center ">
            Espresso Emporium
          </h1>
          <Link to="/addCoffee">
            <button
              className="
         font-rancho text-xl text-white hover:text-black border-primary-1 bg-[#E3B577] hover:bg-transparent
          border px-3 py-1 hover:border-white max-w-32
          "
            >
              Add Coffee
            </button>
          </Link>
        </div>
        <div
          className="grid lg:grid-cols-2 grid-cols-1 lg:max-w-7xl md:max-w-[80%] max-w-[90%]  mx-auto  lg:gap-10
      "
        >
          {coffees.map((coffee) => (
            <CoffeeDetails
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
