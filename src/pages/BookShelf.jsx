import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const BookShelf = () => {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    var receivedBooks = JSON.parse(localStorage.getItem("BookShelf"));
    setMyBooks(receivedBooks);
  }, []);
  return (
    <div className="grid place-items-center">
      {myBooks !== null ? (
        <>
          <h1 className="text-xl font-medium mt-2">My Books</h1>

          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4 place-items-center">
            {myBooks?.map((book,key) => {
              return (
                <Card
                  key={key}
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  showButton={false}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-semibold mt-3">Nothing in your shelf yet!!!</h1>
      )}
    </div>
  );
};

export default BookShelf;
