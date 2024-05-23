import Link from "next/link";

const Payment=()=>{
    return(
        <div className=" w-full ">
           
        <form className=" text-black shadow-md p-6  rounded-md  flex  flex-col  bg-white">
            <label className="  font-medium">Card Number</label>
            <input type="number" placeholder="Enter Card Number" className=" p-2 border  my-4"/>
            <label className="  font-medium">Card Holder Name</label>
            <input type="text" placeholder="Enter the Name" className=" p-2 border  my-4  "/>
            <label className="  font-medium"> Card Expiry </label>
            <input type="date"  className="p-2 border my-4"/>
            <label className="  font-medium">CVV/PIN </label>
            <input type="number"  placeholder="Enter CVV or PIN" className=" p-2 border  my-4"/>
           <div ><button className="bg-purple-600  p-3 mr-6 text-white">Make Payment</button>
            <Link href="#">Reset Values</Link>
            </div> 
        </form>
      
        </div>
    )
}

export default Payment;