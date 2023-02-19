import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

/**
 * Routes for front-end application
 */
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/profil/:userId", element: <Profil /> },
    ],
  },
]);

export default Router;
