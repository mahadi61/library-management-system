import MainLayout from "@/layout/MainLayout";
import AddBook from "@/pages/AddBook/AddBook";
import Books from "@/pages/Book/Books";
import UpdateBook from "@/pages/Book/updateBook/UpdateBook";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import Home from "@/pages/Home/Home";
import SingleBookDetails from "@/pages/SingleBookDetails/SingleBookDetails";
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
      {
        path: "/edit-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/books/:id",
        element: <SingleBookDetails />,
      },
    ],
  },
]);

export default Router;
