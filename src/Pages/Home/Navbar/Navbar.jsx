import { NavLink } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <NavLink to="/addCoffee">
        <li className="text-white hover:underline">Add Coffee</li>
      </NavLink>

      <NavLink to="/users">
        <li className="text-white hover:underline">Users </li>
      </NavLink>

      <NavLink to="/signIn">
        <li className="text-white hover:underline ">Sign In</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-black ">
      <div className="dropdown">
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          {link}
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex lg:ml-auto lg:mr-20">
        <ul className="text-right flex  gap-10  px-1">{link}</ul>
      </div>
    </div>
  );
};

export default Navbar;
