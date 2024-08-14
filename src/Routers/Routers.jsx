import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import AddCoffee from "../Pages/addCoffee/addCoffee";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DeleteCoffee from "../Pages/DeleteCoffee/DeleteCoffee";
import ViewDetails from "../Pages/ViewDetail/ViewDetails";
import UpdateCoffee from "../Pages/updateCoffee/updateCoffee";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";
import Users from "../Pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },

      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/deleteCoffee/:id",
        element: <DeleteCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },

      {
        path: "/signUP",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

export default router;
