import Image from "next/image";
import {
  CheckCircleIcon,
  XCircleIcon
} from "@heroicons/react/24/solid";
const BookDetails = ({book}) => {
  return(
    <>
  <div className=" flex  flex-col  text-black   items-center  p-3">

    
        <Image
          src={book.cover}
          height={200}
          width={200}
          className="rounded-md  h-[250px]"
          alt="product image"
        />
      
      <h className=" text-black mb-2">{book.title}</h>


      <div className="flex mt-2">
        {book.stock ? (
          <>
            <div className="flex">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <p>{book.stock} in stock</p>
            </div>
          </>
        ) : (
          <div className="flex">
            <XCircleIcon className="h-5 w-5 text-red-500" />{" "}
            <p>{book.stock} in stock</p>
          </div>
        )}

       
      </div>
    
    </div>
    </>
  )
}

export default BookDetails;