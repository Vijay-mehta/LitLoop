'use client'
import { storeContext } from "@/app/context";
import { useContext } from "react";
import CardItem from "./CardItem";

const Items=()=>{
    const { cartData } = useContext(storeContext);
    return(
        <div className="  bg-white ">
            <h1 className="  font-bold  ml-5 mt-3">Items in Cart</h1>
        {cartData.map((item)=>
          <CardItem book={item}/>
      
        )}
        </div>
    )
}

export default Items;