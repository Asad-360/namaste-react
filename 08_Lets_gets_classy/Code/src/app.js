import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ContactUs from "./components/Contactus";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileFunctional from "./components/ProfileFunctional";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/profilefunctional",
        element: <ProfileFunctional/>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
