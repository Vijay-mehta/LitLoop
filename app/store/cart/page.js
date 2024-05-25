import Items from "@/app/Ui/sidebar/cart/Items";
import OrderDetails from "@/app/Ui/sidebar/cart/OrderDetails";
import Payment from "@/app/Ui/sidebar/cart/payment";

const Cart = () => {
  return (
    <div className=" mt-7 ml-0 lg:ml-7">
      <h1 className=" font-bold mb-3">Welcome Mr.X</h1>
      <h3 className=" font-medium  mb-4">
        Thanku a lot for your purchase. Please complete the checkout process by
        paying for your order{" "}
      </h3>
      <div className=" grid  grid-cols-1 md:grid-cols-3 gap-6">
        <Items />
      <OrderDetails />
      <Payment /></div>
      
    </div>
  );
};

export default Cart;
