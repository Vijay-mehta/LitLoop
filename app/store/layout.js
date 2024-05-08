import SideBar from "../Ui/sidebar/SideBar";

export const metadata = {
  title: "Buy or Rent Book",
  description: "An Online Bookstore to Sell and Rent ",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className=" sm:flex  p-2">
        <SideBar/>
      {children}
    </div>
  );
}
