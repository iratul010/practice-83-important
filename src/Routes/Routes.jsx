import {   createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Blog from "../Pages/Blog";
import Friends from "../Pages/Friends";
import ErrorPage from "../components/ErrorPage";
import FriendWebPage from "../components/FriendWebPage";
import GoogleMap from "../Pages/GoogleMap";
import Login from "../components/Login";
import RegisterOnchange from "../components/RegisterOnchange";
import RegisterOnsubmit from "../components/RegisterOnsubmit";
import PrivateRoutes from "./PrivateRoutes";
import GalleryPage from "../components/GalleryPage";
import Profile from "../components/Profile";
import Dashboard from "../components/Dashboard";
import Form from "../Pages/Form";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "friends",
        loader: async () => {
          try {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          } catch (error) {
            console.error("Error fetching data:", error);
            return Promise.reject(error);
          }
        },
        element: <Friends />,
        errorElement: <ErrorPage />,
      },
      {
        path: "friend/:id",
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          } catch (error) {
            console.error("Error fetching data:", error);
            return Promise.reject(error);
          }
        },

        element: <FriendWebPage />,
      },
      {
        path: "form",
        element: <Form/>,
      },
      {
        path: "map",
        element: <GoogleMap />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registerOnchange",
        element: <RegisterOnchange />,
      },

      {
        path: "registerOnsubmit",
        element: <RegisterOnsubmit />,
      },
      {
        path: "gallery",
        element: (
          <PrivateRoutes>
            <GalleryPage />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;