import SideBar from "../Ui/sidebar/SideBar";
import StoreProvider from "../provider";

export const metadata = {
  title: "Buy or Rent Book",
  description: "An Online Bookstore to Sell and Rent ",
};

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
    <div className=" lg:flex p-2">
        <SideBar/>
      {children}
    </div>
    </StoreProvider>
  );
}
