import AddBookForm from "../Book/bookAdd/AddBookForm";

const AddBook = () => {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="mb-4 text-3xl text-center font-semibold">
        Add a new book
      </h1>
      <AddBookForm />
    </div>
  );
};

export default AddBook;
