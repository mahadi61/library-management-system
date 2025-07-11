/* eslint-disable @typescript-eslint/no-explicit-any */
import { useBorrowSummaryQuery } from "@/redux/api/bookApi";

const BorrowSummary = () => {
  const { data, isLoading } = useBorrowSummaryQuery([]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Borrow Summary</h1>
        <table className="table-auto border-collapse w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ISBN</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">
                Total Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((entry: any, index: any) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {entry.book?.isbn}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.book?.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.totalQuantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
