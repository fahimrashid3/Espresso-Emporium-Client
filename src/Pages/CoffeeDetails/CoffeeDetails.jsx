import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeDetails = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, photo, chef, taste } = coffee;
  return (
    <div>
      <div className="card card-side bg-[#d1cec793] shadow-xl md:h-64 h-56 mb-7  lg:mb-0">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="my-auto space-y-3">
            <p>
              <span className="font-semibold text-xl">Name : </span>
              {name}
            </p>
            <p>
              <span className="font-semibold text-xl">Chef : </span>
              {chef}
            </p>
            <p>
              <span className="font-semibold text-xl">Taste : </span>
              {taste}
            </p>
          </div>
        </div>
        <div className="card-body">
          <div className="my-auto space-y-3 grid grid-cols-1">
            <Link to={`/viewDetails/${_id}`}>
              <div className="bg-primary-5 p-3 rounded-md text-white w-10 h-10">
                <FaEye />
              </div>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <div className="bg-[#3C393B] p-3 rounded-md text-white w-10 h-10">
                <FaPen />
              </div>
            </Link>
            <Link
              to={`/deleteCoffee/${_id}`}
              coffees={coffees}
              setCoffees={setCoffees}
            >
              <div className="bg-[#EA4744] p-3 rounded-md text-white w-10 h-10">
                <MdDelete />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
