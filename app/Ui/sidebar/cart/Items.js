"use client";
import { storeContext } from "@/app/context";
import { useContext } from "react";
import CardItem from "./CardItem";
import { toast } from "react-toastify";

const Items = () => {
    const { cartData, setCartData } = useContext(storeContext);
    console.log("cartData",cartData)
  const handleRemoveItem = (e, id,title) => {
    const filterData = cartData?.filter((item) => item.id !==id);
    setCartData([...filterData ]);
    toast.success(`remove successful ${title}`)
  };
  return (
    <>
    {cartData.length>0 && <><div className="  bg-white ">
      <h1 className="  font-bold  ml-5 mt-3">Items in Cart</h1>
      {cartData.map((item) => (
       <div key={item.id}> <CardItem book={item} handleRemoveItem={handleRemoveItem} /></div>
      ))}
    </div></>}
    </>
    
  );
};

export default Items;
