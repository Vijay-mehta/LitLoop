"use client";
import Image from "next/image";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
const BookDetails = ({ book }) => {
  return (
    <>
      <div className="   grid  grid-cols-1  md:grid  md:grid-cols-2 pl-5   md:content-start  w-full bg-white text-black    p-3">
        <div>
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
            <h className="  mt-3  mb-4">{book.title}</h>

            <div className=" grid  grid-cols-2  gap-3">
              <p className="font-medium">Author: -</p>
              <p>{book.author}</p>
              <p className="font-medium">generation: -</p>
              <p>{book.genre}</p>
              <p className="font-medium">Buy Price: -</p>
              <p>{book.sellPrice}</p>
              <p className="font-medium">Sell Price: -</p>
              <p>{book.rentPrice}</p>
              <p className="font-medium">Sold: -</p>
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

          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
