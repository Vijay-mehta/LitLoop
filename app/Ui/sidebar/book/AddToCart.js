"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { useContext } from "react";
import { storeContext } from "@/app/context";

const AddToCart = ({ book}) => {

  
  const { cartData, setCartData } = useContext(storeContext);
  const handleCart = (e, reason) => {
    e.preventDefault();
    const newData = { ...book, type: reason };
    setCartData([...cartData, newData]);
    toast.success(`Added ${newData.title} to the Cart`, {
      autoClose:900,
      position: "top-right",
    });
  };
  return (
    <div className="flex">
      <button
        className=" bg-purple-600   text-white   hover:bg-purple-700   mr-4 px-3 py-2  rounded-sm"
        onClick={(e) => handleCart(e, "buy")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" />
        to Buy
      </button>
      <button
        className=" bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-sm"
        onClick={(e) => handleCart(e, "rent")}
      >
        <ShoppingCartIcon className="w-5 mr-0.5 inline" />
        to Rent
      </button>
    </div>
  );
};

export default AddToCart;
