import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import UpdateBook from "./UpdateBook";

import type { IBook } from "../columns";

interface UpdateModalProps {
  book: IBook;
}
export function UpdateModal({ book }: UpdateModalProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Update Book
          </AlertDialogTitle>
          <UpdateBook id={book._id} />
        </AlertDialogHeader>
        <AlertDialogAction className="w-1/2 mx-auto text-center bg-red-500 text-white">
          Close
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  );
}
