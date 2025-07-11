import { AlertModal } from "@/components/AlertModal/AlertModal";
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

          <Link to={`/edit-book/${book._id}`}>Edit</Link>

          {/* Borrow Button */}
          <BorrowBookModal book={book} />

          {/* Delete Button */}
          <AlertModal book={book}></AlertModal>
        </div>
      );
    },
  },
];
