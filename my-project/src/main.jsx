import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Component/Header.jsx";
import Slider from "./Component/slider";
import Cards from "./Component/Cards";
import Footer from "./Component/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./Component/Footer Component/AboutUs";
import App from "./App";
import Contact from "./Component/Footer Component/Contact";
import Help from "./Component/Footer Component/Help";
import TermsCondition from "./Component/Footer Component/Terms&Condition";
import PrivacyPolicy from "./Component/Footer Component/PrivacyPolicy";
import TrackOrder from "./Component/header Component/TrackOrder";
import Team from "./Component/header Component/Team";
import Cart from "./Component/header Component/Cart";
import PartnerLoginForm from "./Component/header Component/PartnerLoginForm/PartnerLoginForm";
import  SignUp  from "./Component/header Component/SignUp";
import ProductDetails from "./Component/Body/ProductDetails";
import UserLogin from "./Component/header Component/UserLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/t&c",
        element: <TermsCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
      },
      {
        path: "/link",
        element: <Team />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/partnerLoginForm",
        element: <PartnerLoginForm />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/UserLogin",
        element: <UserLogin />,
      },
      {
        path: "product-details/:meraProductId",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
