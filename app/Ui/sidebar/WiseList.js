
'use client'
import {
    HeartIcon,
  } from "@heroicons/react/24/solid";
import { useState } from "react";
const WiseList=({wiseListData})=>{

    const [wiseList, setWiseList] = useState([]);

    const handleLocalWiseList = (id) => {
      localStorage.setItem("wiseList", JSON.stringify(id));
    };
    return(
        <>
         <div onClick={() => handleLocalWiseList(wiseList.id)} className=" flex  justify-center">
        <HeartIcon className=" w-8  h-8   mt-2 " />
      </div>
        </>
    )
}

export default WiseList;