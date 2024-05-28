"use client";
import Items from "@/app/Ui/sidebar/cart/Items";
import OrderDetails from "@/app/Ui/sidebar/cart/OrderDetails";
import Payment from "@/app/Ui/sidebar/cart/payment";
import { storeContext } from "@/app/context";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const { cartData } = useContext(storeContext);
  return (
    <>
      {cartData.length > 0 ? (
        <>
          {" "}
          <div className=" mt-7 ml-0 lg:ml-7 relative">
            <h1 className=" font-bold mb-3">Welcome Mr.X</h1>
            <h3 className=" font-medium  mb-4">
              Thanku a lot for your purchase. Please complete the checkout
              process by paying for your order{" "}
            </h3>
            <div className=" grid  grid-cols-1 md:grid-cols-3 gap-6">
              <Items />
              <OrderDetails />
            
             
            </div>
          </div>
        </>
      ) : (
        <div className=" ">
          <p className="bg-white rounded-md mt-4 md:mt-0 p-5 md:p-10 shadow-md md:absolute top-[200px] right-[700px]  font-bold text-red-700">
            Your Cart is Empty
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
