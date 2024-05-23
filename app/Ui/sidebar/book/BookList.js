import BookCard from "./BookCard";

const BookList = ({ book }) => {
  return (
    <div className=" grid  grid-cols-1 lg:grid-cols-4 gap-4  w-full  text-black">
      {book?.map((book) => (
        <div key={book.id} className=" shadow-sm  bg-white  flex justify-center  rounded-md">
          
          <BookCard key={book.id} book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
