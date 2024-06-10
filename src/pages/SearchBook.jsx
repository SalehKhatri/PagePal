import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import Card from "../components/Card";
import { getBooks } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";
import { NavLink } from "react-router-dom";

const SearchBook = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState([]);
  const [fetching, setFetching] = useState(false);
  const fetchBooks = async () => {
    setFetching(true);
    let response = await getBooks(query);
    if (response === 404) {
      setBooks(404);
    }
    setBooks(response.docs);
    setFetching(false);
  };
  useEffect(() => {
    if (!query?.length) {
      setBooks([]);
    }
    if (fetching && query.length > 0) {
      fetchBooks();
    }
  }, [query]);
  return (
    <div className="grid place-items-center gap-y-4">
      <div className="flex w-full items-center justify-between z-10 py-2 px-8 fixed top-0 bg-gray-400">
        <h1 className="text-md md:text-2xl font-semibold text-white">PagePal</h1>
        <NavLink
          className={
            "text-white py-1 px-2 text-sm md:p-2 rounded-md font-semibold hover:bg-pink-600 bg-pink-500"
          }
          to="/BookShelf"
        >
          My BookShelf
        </NavLink>
      </div>
      <h1 className="text-2xl font-semibold mt-16 shadow-md shadow-black/5">Search Book</h1>
      <InputField setQuery={setQuery} setFetching={setFetching} />

      {query?.length > 0 && fetching > 0 && <ClipLoader />}

      {books?.length > 0 && (
        <>
          <h1 className="text-xl font-medium">Results({books?.length})</h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4 place-items-center">
            {books?.map((book) => {
              return (
                <Card
                  key={book.key}
                  title={book?.title}
                  author={book?.author_name?.[0]}
                  year={book?.publish_date?.[0]}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBook;
