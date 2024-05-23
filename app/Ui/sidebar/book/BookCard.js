import {
  CheckCircleIcon,
  XCircleIcon,
  CurrencyRupeeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import AddToCart from "./AddToCart";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <Link href={`/store/${book.id}`}>
    <div className=" flex  flex-col  text-black   items-center  p-3">
                <div className=" flex "><HeartIcon  className=" w-10  h-10   mt-2"/></div> 

      <h className=" text-black mb-2">{book.title}</h>
      <div className=" flex justify-center">
        <Image
          src={book.cover}
          height={200}
          width={200}
          className="rounded-md  h-[250px]"
          alt="product image"
        />
      </div>

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

        <div className=" flex ">
          <CurrencyRupeeIcon className="h-5 w-5" />
          <p>{book.sellPrice} to buy</p>
        </div>
      </div>
      <p className=" my-2">Rent for {book.rentPrice} INR per month </p>
      <AddToCart book={book} />
    </div>
    </Link>
  );
};

export default BookCard;
