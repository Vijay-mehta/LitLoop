"use client";
import { storeContext } from "@/app/context";
import { useContext, useEffect, useState } from "react";

const OrderDetails = () => {
  const { cartData } = useContext(storeContext);
  const [priceToBuy, setPriceToBuy] = useState(0);
  const [priceToRent, setPriceToRent] = useState(0);


  const buyTobook = cartData.filter((book) => {
    return book.type === "buy";
  });

  const rentTobook = cartData.filter((book) => {
    return book.type === "rent";
  });

  useEffect(() => {
    setPriceToBuy(buyTobook.reduce((pre, curr) => pre + curr.sellPrice, 0));
    setPriceToRent(rentTobook.reduce((pre, curr) => pre + curr.rentPrice, 0));
  }, [cartData,buyTobook,rentTobook]);

  return (
    <>
      {cartData.length > 0 && (
        <div >
        
          <div className="mb-2   text-black shadow-md  bg-white p-5 rounded-md">
            <h1 className=" font-bold  mb-5">Order Details</h1>
            <ul className="font-semibold">
             {priceToBuy ? <li className="font-normal">Buying book for {priceToBuy} NIR</li>:''}
             {priceToRent ?   <li className="font-normal">
                Renting book for {priceToRent} NIR
              </li>:''}
            
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
