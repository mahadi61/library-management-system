import MainLayout from "@/layout/MainLayout";
import AddBook from "@/pages/AddBook/AddBook";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Home />,
      },
      {
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/borrow-summary",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
