"use client";
import { storeContext } from "@/app/context";
import { useContext, useEffect } from "react";
import ProductCardItem from "./ProductCardItem";

const OrderDetails = () => {
  const { cartData } = useContext(storeContext);
  


  return (
    <>
      {cartData.length > 0 && (
        <div >
          <div className=" bg-white   text-black  " >
           <ProductCardItem cardItemData ={cartData} />
          </div>
        
        </div>
      )}
    </>
  );
};

export default OrderDetails;
