import { Link } from "react-router";
import Books from "../Book/Books";

const Home = () => {
  return (
    <div>
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#B13BFF] mb-4">
            Discover Your Next Book
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Explore a vast collection of books across genres. Whether you're
            into fiction, research, or learning something new — we’ve got you
            covered.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/books"
              className="bg-[#B13BFF] text-white px-6 py-3 rounded hover:bg-purple-700 transition"
            >
              Browse Books
            </Link>
            <Link
              to="/borrow-summary"
              className="border border-[#B13BFF] text-[#B13BFF] px-6 py-3 rounded hover:bg-[#B13BFF] hover:text-white transition"
            >
              Borrow Summary
            </Link>
          </div>
        </div>
      </section>
      <Books />
    </div>
  );
};

export default Home;
