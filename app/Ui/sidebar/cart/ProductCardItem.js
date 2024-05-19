import Image from "next/image";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
const ProductCardItem = ({ cardItemData }) => {
  console.log("cartItemData", cardItemData);

  const buyTobook = cardItemData.filter((book) => {
    return book.type === "buy";
  });

  const rentTobook = cardItemData.filter((book) => {
    return book.type === "rent";
  });

  const priceToBuy = buyTobook.reduce((pre, curr) => pre + curr.sellPrice, 0);

  const priceToRent = rentTobook.reduce((pre, curr) => pre + curr.rentPrice, 0);

  return (
    <>
      <div>
        {cardItemData?.map((card) => (
          <div>
          <ProductCard
         
            cardItemData={card}
          />
          </div>
        ))}
         <div className="mb-2">
            <ul className="font-semibold">
              <li className="font-normal">
                 Buying {priceToBuy?.length} book for {priceToBuy} NIR 
               </li>
              <li className="font-normal">
               Renting {priceToRent?.length} book for {priceToRent} NIR 
               </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default ProductCardItem;
