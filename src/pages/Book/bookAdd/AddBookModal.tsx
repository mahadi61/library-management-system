import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import AddBookForm from "./AddBookForm";

export function AddBookModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Book</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Add New Book
          </AlertDialogTitle>
          <AddBookForm />
        </AlertDialogHeader>
        <AlertDialogAction className="w-1/2 mx-auto text-center bg-red-500 text-white">
          Close
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
