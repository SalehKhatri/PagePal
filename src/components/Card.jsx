import React from "react";

const Card = ({ title, author, year, showButton=true }) => {
  const bookData = { title: title, author:author ? author : "No author found!", year: year ? year : "Year not found!" };
  return (
    <>
      <div className="relative flex w-[90%] max-w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Book title: {title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Author: {author ? author : "No author found!"}
            <br />
            Publish Year: {year ? year : "Year not found!"}
          </p>
        </div>
        {showButton &&<div className="p-6 pt-0">
          <button
            onClick={() => {
              let myBooks = JSON.parse(localStorage.getItem('BookShelf')) || [];
              myBooks.push(bookData)
              localStorage.setItem("BookShelf",JSON.stringify(myBooks))
            }}
            className=" rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to shelf
          </button>
        </div>}
      </div>
    </>
  );
};

export default Card;
