"use client";
import Image from "next/image";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import AddToCart from "./AddToCart";
const BookDetails = ({ book }) => {
  return (
    <>
      <div className="   grid  grid-cols-1  md:grid  md:grid-cols-2 pl-5   md:content-start  w-full bg-white text-black    p-10">
        <div className=" flex  justify-center">
          <Image
            src={book.cover}
            height={200}
            width={200}
            className="rounded-md  h-[250px]"
            alt="product image"
          />
        </div>
        <div>
          <div className="flex justify-center  flex-col text-black">
            <h1 className=" font-bold  mt-6 md:mt-0 mb-3  ">{book.title}</h1>

            <div className=" grid  grid-cols-2  gap-3 ">
              <p className="font-medium">Author </p>
              <p>{book.author}</p>
              <p className="font-medium">generation </p>
              <p>{book.genre}</p>
              <p className="font-medium">Sell Price</p>
              <p>{book.sellPrice}</p>
              <p className="font-medium">Rent Price </p>
              <p>{book.rentPrice}</p>
              <p className="font-medium">Sold </p>
              <p>{book.sold}</p>

              <span className="flex mt-2">
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
              </span>
            </div>
            <p className="mt-3 mb-3 ">{book.description}</p>
           <div className="py-5"><AddToCart book={book}/></div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
