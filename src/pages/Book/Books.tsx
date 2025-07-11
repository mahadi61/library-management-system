import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/bookApi";
import { useNavigate } from "react-router";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery([]);
  const navigate = useNavigate();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All books are listed here
      </h1>
      <div className="mb-2">
        <Button variant="outline" onClick={() => navigate("/create-book")}>
          Add Book
        </Button>
      </div>
      <DataTable columns={columns} data={data.data} />
    </div>
  );
};

export default Books;
