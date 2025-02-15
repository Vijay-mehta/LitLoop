'use client'
import {

    CheckCircleIcon
  } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



const Success=()=>{

    const route= useRouter();
    setTimeout(()=>{ route.push('/store')},6000)
      
    return(
        <div className="flex justify-center  text-black">
        <div className=" bg-white shadow-lg pX-24 py-24 mt-20 w-72  rounded-md  ">
   <div className=" flex justify-around mb-2">< CheckCircleIcon className=" h-6 w-6  "/></div>
             
        <p className="  text-center ">order placed successfully</p>
        </div></div>
    )
}

export default Success;