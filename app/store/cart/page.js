import OrderDetails from "@/app/Ui/sidebar/cart/OrderDetails";
import Payment from "@/app/Ui/sidebar/cart/payment";

const Cart = () => {
  return (
    <div className=" text-center mt-4">
      <h1 className=" font-bold mb-3">Welcome Mr.X</h1>
      <p>
        Thanku a lot for your purchase. Please complete the checkout process by
        paying for your order{" "}
      </p>
      <OrderDetails />
      <Payment />
    </div>
  );
};

export default Cart;
