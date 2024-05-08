const { default: BookCard } = require("./BookCard")

const BookList=({book})=>{
    return(
        <div className=" grid  grid-cols-1 lg:grid-cols-4 gap-4  w-full ">
        {book.map((book)=>(
            <div className=" shadow-sm  bg-white  flex justify-center m-3  p-2  rounded-md">            <BookCard key={book.id} book={book}/>
</div>
        ))}
        
        </div>
    )
}

export default BookList;