import { AlertModal } from "@/components/AlertModal/AlertModal";
import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";

export interface IBook {
  _id?: string;
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
        <div className="flex gap-2">
          {/* Edit Button */}
          <Link
            to={`/edit-book/${book._id}`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>

          {/* Borrow Button */}
          <Link
            to={`/borrow/${book._id}`}
            className="text-green-600 hover:underline"
          >
            Borrow
          </Link>

          {/* Delete Button */}
          {/* <button
            // onClick={() => handleDelete(book._id!)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button> */}
          <AlertModal book={book}></AlertModal>
        </div>
      );
    },
  },
];
