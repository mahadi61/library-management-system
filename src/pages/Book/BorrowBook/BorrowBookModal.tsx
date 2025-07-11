import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  useBorrowBookMutation,
  useGetSingleBookQuery,
} from "@/redux/api/bookApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import type { IBook } from "../columns";

interface BorrowBookModalProps {
  book: IBook;
}

export function BorrowBookModal({ book }: BorrowBookModalProps) {
  const bookId = book._id;
  const navigate = useNavigate();

  const { data: bookData } = useGetSingleBookQuery(bookId);
  const [borrowBook] = useBorrowBookMutation();
  const [formData, setFormData] = useState({
    quantity: 1,
    dueDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "quantity" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.quantity > (bookData?.data?.copies ?? 0)) {
      toast.error("Quantity exceeds available copies!");
      return;
    }
    if (formData.quantity < 1) {
      toast.error("Quantity must be at least 1");
      return;
    }

    try {
      await borrowBook({ book: bookId, ...formData }).unwrap();
      toast.success("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (error) {
      toast.error("Failed to borrow book.");
      console.error(error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="bg-yellow-400 text-black">
          Borrow
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Borrow Book
          </AlertDialogTitle>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white">
            <div>
              <label htmlFor="quantity" className="block mb-1 font-medium">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                min={1}
                max={bookData?.copies}
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
                placeholder="Enter quantity"
              />
            </div>

            <div>
              <label htmlFor="dueDate" className="block mb-1 font-medium">
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-center mt-4">
              <Button
                type="submit"
                className="bg-green-600 mx-auto text-white px-4 py-2 w-1/2 rounded-xl hover:bg-indigo-700"
              >
                submit
              </Button>
            </div>
          </form>
        </AlertDialogHeader>
        <AlertDialogAction className="w-1/2 mx-auto text-center bg-red-500 text-white">
          Close
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
