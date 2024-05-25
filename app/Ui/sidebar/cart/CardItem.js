import { TrashIcon } from "@heroicons/react/24/solid";

const CardItem =({book})=>{
    console.log("cartData",cartData)
    return(
        <div className=" bg-gray-200  m-5  p-6  rounded-md flex">
           
       <div> <p className="bg-black text-white rounded-full  text-center mr-2 h-[25px] w-[30px]">{book.type ==="buy"? "B":"R" }</p></div>
      <div>  <p className=" mb-3  font-bold">{book.title}</p>
        <p className=" mb-3 font-light">{book.type === "buy" && `Buying book for ${ book.sellPrice} NIR`}</p>
        <p className=" mb-3 font-light">{book.type === "rent" && `Renting book for ${book.rentPrice} NIR`}</p>
        </div>
       <div><TrashIcon className="h-6"/></div> 
        </div>
    )
}

export default  CardItem;