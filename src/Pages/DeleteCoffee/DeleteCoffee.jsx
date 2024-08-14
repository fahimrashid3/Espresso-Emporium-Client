import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import BackgroundImg from "../../assets/images/more/11.png";

const DeleteCoffee = ({ coffees, setCoffees }) => {
  const coffee = useLoaderData();
  const { _id, photo, name, chef, supplier, taste, category, details } = coffee;

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof = cof._id !== _id));
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div style={{ backgroundImage: `url(${BackgroundImg})` }}>
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
      <div className="flex items-center justify-center lg:mb-20 md:mb-16 mb-10">
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-outline btn-error text-white "
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};

export default DeleteCoffee;
