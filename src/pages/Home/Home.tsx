import { useGetBooksQuery } from "@/redux/api/bookApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery([]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.data} />
    </div>
  );
};

export default Home;
