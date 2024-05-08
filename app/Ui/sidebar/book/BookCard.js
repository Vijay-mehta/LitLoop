import Image from 'next/image'

const BookCard=({book})=>{
    console.log(book)
    return(
        <div className=' flex  flex-col'>
        <div >
           <Image src={book.cover} height={200} width={200} /> 
        </div>
        <h className=" text-black">{book.title}</h>
        <h2 className=' text-black'>Rent Price:- ₹{book.rentPrice}</h2>
        <h1>Sell Price:- ₹{book.sellPrice}</h1>
        </div>
    )
}

export default BookCard;