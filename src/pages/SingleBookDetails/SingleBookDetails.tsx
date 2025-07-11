import { Card, CardContent } from "@/components/ui/card";
import { useGetSingleBookQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";

const SingleBookDetails = () => {
  const params = useParams();
  const id = params.id!;

  const { data: book, isLoading, isError } = useGetSingleBookQuery(id);

  if (isLoading)
    return <p className="text-center py-10">Loading book details...</p>;
  if (isError || !book?.data)
    return <p className="text-center text-red-500">Failed to load book.</p>;

  const { title, author, genre, isbn, description, copies, available } =
    book.data;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <Card className="shadow-lg border border-gray-300">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-center text-blue-600">
            {title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-semibold">Author:</span> {author}
            </div>
            <div>
              <span className="font-semibold">Genre:</span> {genre}
            </div>
            <div>
              <span className="font-semibold">ISBN:</span> {isbn}
            </div>
            <div>
              <span className="font-semibold">Copies Available:</span> {copies}
            </div>
            <div>
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`font-semibold ${
                  available ? "text-green-600" : "text-red-500"
                }`}
              >
                {available ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mt-6 mb-2 text-gray-800">
              Description:
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleBookDetails;
