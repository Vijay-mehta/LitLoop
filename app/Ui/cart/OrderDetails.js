"use client";
import React, { useContext, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/app/Ui/CheckoutForm";
import { storeContext } from "@/app/context";

const OrderDetails = () => {
  const { cartData } = useContext(storeContext);
  const [priceToBuy, setPriceToBuy] = useState(0);
  const [priceToRent, setPriceToRent] = useState(0);

  const buyTobook = cartData.filter((book) => book.type === "buy");
  const rentTobook = cartData.filter((book) => book.type === "rent");

  useEffect(() => {
    setPriceToBuy(buyTobook.reduce((pre, curr) => pre + curr.sellPrice, 0));
    setPriceToRent(rentTobook.reduce((pre, curr) => pre + curr.rentPrice, 0));
  }, [cartData, buyTobook, rentTobook]);

  const stripePromise = loadStripe("pk_test_51PKaXmSIiKxOdskAY1KDA7zCLR30fV7eQrb7ASYf7ToU7IeAOT9hAiNaEzkpZBGS5WIRlHSZB4YhpmqAsP1Qsbax001WFP6LpV");

  return (
    <>
      {cartData.length > 0 && (
        <div className="md:flex">
          <div className="mb-2 text-black shadow-md bg-white p-10 rounded-md">
            <h1 className="font-bold mb-5">Order Details</h1>
            <ul className="font-semibold">
              {priceToBuy > 0 && (
                <li className="font-normal">Buying book for {priceToBuy} NIR</li>
              )}
              {priceToRent > 0 && (
                <li className="font-normal">Renting book for {priceToRent} NIR</li>
              )}
            </ul>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm priceBuy={priceToBuy} priceRent={priceToRent} />
          </Elements>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
