'use client'
import { storeContext } from "@/app/context";
import { useContext, useEffect } from "react";

const OrderDetails=()=>{
const {cartData}= useContext(storeContext)

const buyTobook = cartData.filter((book)=>{
    return book.type=== 'buy'
})

const rentTobook = cartData.filter((book)=>{
    return book.type=== 'rent'
})


const priceToBuy=buyTobook.reduce((pre,curr)=>pre+curr.sellPrice,0)

const priceToRent=rentTobook.reduce((pre,curr)=>pre+curr.rentPrice,0)


    return(
        <>
     {cartData.length>0 && 
        <div className=" bg-white shadow-md p-8 m-3  text-black">
        <h2 className=" text-left">  Order Details</h2> 
       <ul>
        <li>Buying {buyTobook?.length} book for {priceToBuy} NIR</li>
        <li>Renting {rentTobook?.length} book for {priceToRent} NIR</li>

       </ul>
       </div>
     }</>
       
    )
}

export default OrderDetails;
