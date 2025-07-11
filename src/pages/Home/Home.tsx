import { useGetBooksQuery } from "@/redux/api/bookApi";
import { AddBookModal } from "./bookAdd/AddBookModal";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery([]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">
        All books are listed here
      </h1>
      <div className="mb-2">
        <AddBookModal />
      </div>
      <DataTable columns={columns} data={data.data} />
    </div>
  );
};

export default Home;
