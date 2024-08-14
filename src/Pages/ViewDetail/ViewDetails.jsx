import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import BackgroundImg from "../../assets/images/more/11.png";

const ViewDetails = () => {
  const coffee = useLoaderData();
  const { photo, name, chef, supplier, taste, category, details } = coffee;

  return (
    <div style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <Link to="/">
        <button className="flex items-center gap-2 mx-auto mt-20 font-rancho font-bold text-3xl text-primary-2">
          <IoArrowBack /> Back to home
        </button>
      </Link>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 items-center py-10 bg-[#d1cec793] shadow-xl p-4 lg:max-w-7xl md:max-w-[80%] max-w-[90%] mx-auto lg:my-20 md:my-16 my-10">
        <figure className="mx-auto">
          <img src={photo} alt={name} />
        </figure>
        <div className=" lg:col-span-2">
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
              <span className="font-semibold text-xl">Supplier : </span>
              {supplier}
            </p>
            <p>
              <span className="font-semibold text-xl">Taste : </span>
              {taste}
            </p>
            <p>
              <span className="font-semibold text-xl">Category : </span>
              {category}
            </p>
            <p>
              <span className="font-semibold text-xl">Details : </span>
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
