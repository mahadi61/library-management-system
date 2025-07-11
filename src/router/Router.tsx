import MainLayout from "@/layout/MainLayout";
import AddBook from "@/pages/AddBook/AddBook";
import Books from "@/pages/Book/Books";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
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
        element: <Books />,
      },
      {
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);

export default Router;
