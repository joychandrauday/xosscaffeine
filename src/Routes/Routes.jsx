import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Root from "../Pages/Root/Root";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import UpdateSingleCofee from './../Pages/UpdateSingle/UpdateSingleCofee';
  
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
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/add-products",
          element: <AddCoffee></AddCoffee>,
        },
        {
          path: "/update-products",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ()=> fetch('http://localhost:5000/coffee'),
        },
        {
          path: "/update-product/:id",
          element: <UpdateSingleCofee></UpdateSingleCofee> ,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`),
        },
      ],
    },
  ]);

export default router;