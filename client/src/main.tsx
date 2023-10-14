import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import App from "./Pages/App.tsx";
import Home from "./Pages/Home.tsx";

import User_Login from "./Pages/User_Login.tsx";

import "./index.css";

const router = Router([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "log-in",
        element: <User_Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
