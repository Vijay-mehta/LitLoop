const { default: BookCard } = require("./BookCard");
import {
    CheckCircleIcon,
    XCircleIcon,
    CurrencyRupeeIcon,
    HeartIcon,
  } from "@heroicons/react/24/solid";
const BookList = ({ book }) => {
  return (
    <div className=" grid  grid-cols-1 lg:grid-cols-4 gap-4  w-full  text-black">
      {book.map((book) => (
        <div className=" shadow-sm  bg-white  flex justify-center  rounded-md">
          {" "}

          <BookCard key={book.id} book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
