import OrderDetails from "@/app/Ui/sidebar/cart/OrderDetails";
import Payment from "@/app/Ui/sidebar/cart/payment";

const Cart = () => {
  return (
    <div className=" mt-7 ml-7">
     
      <OrderDetails />
      <Payment />
    </div>
  );
};

export default Cart;
