"use client";
import { storeContext } from "@/app/context";
import { useContext, useEffect, useState } from "react";

const OrderDetails = () => {
  const { cartData } = useContext(storeContext);
  const [priceToBuy, setPriceToBuy] = useState(0);
  const [priceToRent, setPriceToRent] = useState(0);

  useEffect(() => {
    const buyTobook = cartData.filter((book) => {
      return book.type === "buy";
    });

    const rentTobook = cartData.filter((book) => {
      return book.type === "rent";
    });

    setPriceToBuy(buyTobook.reduce((pre, curr) => pre + curr.sellPrice, 0));

    setPriceToRent(rentTobook.reduce((pre, curr) => pre + curr.rentPrice, 0));
  }, [cartData]);

  return (
    <>
      {cartData.length > 0 && (
        <div >
          <h1 className=" font-bold mb-3">Welcome Mr.X</h1>
          <h3 className=" font-medium  mb-4">
            Thanku a lot for your purchase. Please complete the checkout process
            by paying for your order{" "}
          </h3>
          <div className="mb-2   text-black shadow-md  bg-white p-5 rounded-md">
            <h1 className=" font-bold  mb-5">Order Details</h1>
            <ul className="font-semibold">
              <li className="font-normal">Buying book for {priceToBuy} NIR</li>
              <li className="font-normal">
                Renting book for {priceToRent} NIR
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
