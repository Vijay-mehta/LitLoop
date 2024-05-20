import Image from "next/image";
const ProductCard=({cardItemData})=>{
    // console.log("99",cardItemData)
    return(
        <>
        <div className=" grid grid-cols-1 md:grid md:grid-cols-2  shadow-none md:shadow-md md:m-4 md:p-4 gap-8">
        <div className="  flex  justify-center">
          <Image
            src={cardItemData.cover}
            width={200}
            height={200}
            alt="product image"
            className="h-[250px]"
          />
        </div>
        <div className=" ml-0 md:ml-16">
          <div className="mb-2">
            <p className="font-semibold">
              Name: <span className="font-normal">{cardItemData.title}</span>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">
              Author: <span className="font-normal">{cardItemData.author}</span>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Description:</p>
            <p className="font-normal">{cardItemData.description}</p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">
            Sell Price: <span className="font-normal">₹{cardItemData.sellPrice}</span>
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">
            Rent Price: <span className="font-normal">₹{cardItemData.rentPrice}</span>
            </p>
          </div>
        
        </div>
       </div>
        </>
    )
}

export default ProductCard;