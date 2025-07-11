import { AlertModal } from "@/components/AlertModal/AlertModal";
import { Button } from "@/components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";
import { BorrowBookModal } from "./BorrowBook/BorrowBookModal";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const columns: ColumnDef<IBook>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const book = row.original;
      return (
        <Link to={`/books/${book._id}`} className="hover:underline">
          {book.title}
        </Link>
      );
    },
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Available",
    cell: ({ row }) => (
      <span>{row.original.available ? "✅ Available" : "❌ Unavailable"}</span>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const book = row.original;
      return (
        <div className="flex gap-1">
          {/* Edit Button */}

          <Button variant={"outline"} className="bg-blue-500 text-white">
            <Link to={`/edit-book/${book._id}`}>Edit</Link>
          </Button>

          {/* Borrow Button */}
          <BorrowBookModal book={book} />

          {/* Delete Button */}
          <AlertModal book={book}></AlertModal>
        </div>
      );
    },
  },
];
