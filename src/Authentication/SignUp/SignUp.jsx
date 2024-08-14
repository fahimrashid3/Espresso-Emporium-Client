import { Link } from "react-router-dom";
import fb from "../../assets/images/icons/fb.png";
import google from "../../assets/images/icons/google.png";
import { IoArrowBack } from "react-icons/io5";
import BackgroundImg from "../../assets/images/more/11.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handelRegistration = (e) => {
    setError(null);
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUser(email, password)
        .then((result) => {
          console.log(result);
          // new user has been created let collect the data to your db for farther use
          const createdAt = result?.user?.metadata?.creationTime;
          const user = { name, email, password, createdAt: createdAt };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: "Account created successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
                form.reset();
              }
            });
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    } else {
      setError("Password and Confirm Password not matched");
    }
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
        <div className="hero ">
          <div className=" bg-primary-4 w-full shrink-0 shadow-2xl lg:max-w-[60%] rounded-[20px]">
            <form onSubmit={handelRegistration} className="px-20 py-10">
              <div className="form-control">
                <h1 className="text-5xl font-bold text-center mb-10">
                  Registration now!
                </h1>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
                <label className="label flex mt-3">
                  <div className="flex gap-2">
                    <input type="checkbox" name="rememberMe" />
                    <p>Accept All trams and condition</p>
                  </div>
                </label>
              </div>
              <p>{error}</p>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="font-rancho text-xl text-white hover:text-black bg-[#E3B577] hover:bg-transparent border
                   px-3 py-1 hover:border-primary-5 border-[#E3B577] rounded-lg "
                >
                  Create Account
                </button>{" "}
              </div>
              <label className="form-control mt-3">
                <p>
                  Already have an account?{"  "}
                  <Link className="text-yellow-500" to="/signIn">
                    Login now
                  </Link>
                </p>
              </label>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-10">
          <h1 className="text-center font-semibold text-xl">Or</h1>
          <div className="flex border rounded-full mt-5 lg:max-w-[20%] mx-auto items-center lg:font-bold md:font-semibold lg:text-xl text-sm">
            <img className="h-16 mx-3 my-1" src={fb} alt="" />
            <p>Continue with Facebook</p>
          </div>
          <div className="flex border rounded-full mt-5 lg:max-w-[20%] mx-auto items-center lg:font-bold md:font-semibold lg:text-xl text-sm">
            <img className="h-16 mx-3 my-1" src={google} alt="" />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
