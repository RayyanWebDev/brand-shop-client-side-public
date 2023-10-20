import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AddProduct from "./components/Add Product/AddProduct";
import MyCart from "./components/My Cart/MyCart";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./components/Provider/AuthProvider";
import Page404 from "./components/Page404/Page404";
import BrandProducts from "./components/BrandProducts/BrandProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/404",
        element: <Page404></Page404>,
      },
      {
        path: "/brand/:id",
        element: <BrandProducts></BrandProducts>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
