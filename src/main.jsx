import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Users from "./Components/Users";
import Update from "./Components/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },

  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
