import { Link, useLoaderData } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
// import Swal from "sweetalert2";
import BackgroundImg from "../../assets/images/more/11.png";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const Coffee = useLoaderData();
  const { _id, photo, name, chef, supplier, taste, category, details } = Coffee;

  const handelUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const UpdatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // sent data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <div className="lg:max-w-7xl md:max-w-full md:mx-20 mx-10 lg:mx-auto lg:my-20 md:my-16 my-10">
        <Link to="/">
          <button
            className="
        flex items-center gap-2 lg:mt-20 md:mt-16 mt-12 font-rancho lg:font-bold md:font-semibold lg:text-3xl md:text-2xl text-primary-2
        "
          >
            <IoArrowBack /> Back to home
          </button>
        </Link>
        <div className=" bg-primary-4 lg:mt-10 md:mt-8 mt-5 lg:py-10 md:py-8 py-5">
          <div>
            <div className="mx-auto">
              <h1 className="font-rancho font-bold lg:text-5xl md:text-4xl text-3xl text-primary-2 text-center">
                Update Existing Coffee Details
              </h1>
              <p
                className="
        text-primary-3 lg:text-xl md:text-lg text-[16px] text-center lg:max-w-[75%] mx-auto md:max-w-[85%] max-w-[95%] lg:mt-10 md:mt-8 mt-5
        "
              >
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>
            <div>
              <form onSubmit={handelUpdateCoffee} className="card-body">
                <div className="lg:flex lg:gap-10 lg:mt-5 md:mt-3 mt-2">
                  <div className="w-full">
                    <p className="text-primary-3 font-semibold mb-2 text-xl">
                      name
                    </p>
                    <input
                      className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                      type="text"
                      name="name"
                      placeholder={name}
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-primary-3 font-semibold mb-2 text-xl">
                      Chef
                    </p>
                    <input
                      className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                      type="text"
                      name="chef"
                      placeholder={chef}
                    />
                  </div>
                </div>
                <div className="lg:flex lg:gap-10 lg:mt-5 md:mt-3 mt-2">
                  <div className="w-full">
                    <p className="text-primary-3 font-semibold mb-2 text-xl">
                      Supplier
                    </p>
                    <input
                      className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                      type="text"
                      name="supplier"
                      placeholder={supplier}
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-primary-3 font-semibold mb-2 text-xl">
                      Taste
                    </p>
                    <input
                      className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                      type="text"
                      name="taste"
                      placeholder={taste}
                    />
                  </div>
                </div>
                <div className="lg:flex lg:gap-10 lg:mt-5 md:mt-3 mt-2">
                  <div className="w-full">
                    <p className="text-primary-3 font-semibold mb-2 text-xl">
                      Category
                    </p>
                    <input
                      className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                      type="text"
                      name="category"
                      placeholder={category}
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-primary-3 font-semibold mb-2 text-xl">
                      Details
                    </p>
                    <input
                      className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                      type="text"
                      name="details"
                      placeholder={details}
                    />
                  </div>
                </div>
                <div className="w-full lg:mt-5 md:mt-3 mt-2">
                  <p className="text-primary-3 font-semibold mb-2 text-xl">
                    Photo
                  </p>
                  <input
                    className="py-2 px-4 w-full rounded-lg text-primary-1 hover:border hover:border-primary-1 focus:border-primary-1"
                    type="text"
                    name="photo"
                    placeholder={photo}
                  />
                </div>
                <button
                  type="submit"
                  className="font-rancho text-xl text-white hover:text-black bg-[#E3B577] hover:bg-transparent border px-3 py-1 hover:border-primary-5 border-[#E3B577] rounded-lg lg:mt-10 md:mt-6 mt-3"
                >
                  Update Coffee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
