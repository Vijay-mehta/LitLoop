"use client";
import Link from "next/link";
import {
  BookOpenIcon,
  CogIcon,
  CubeTransparentIcon,
  HomeIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
  ArrowLeftStartOnRectangleIcon,
  SparklesIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const NavLink = () => {
  const links = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Books", href: "/store", icon: BookOpenIcon },
    {
      name: "Sell or Lend",
      href: "/store/sell-lend",
      icon: RectangleStackIcon,
    },
    {name: 'Cart', href:"/store/cart", icon: ShoppingCartIcon},
    { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
    { name: "Community", href: "/store/community", icon: UserGroupIcon },
    { name: "Settings", href: "/store/settings", icon: CogIcon },
    { name: "About", href: "/store/about", icon: Squares2X2Icon },
    { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
  ];

  return (
    
    <div className="grid grid-cols-5 sm:grid-cols-none">
    {links.map((link) => {
        const IconShow = link.icon;
        return (
          <div className=" sm:flex  ">  
           <Link
          key={link.name}
          href={link.href}
          className="  bg-slate-50 flex  justify-center  lg:justify-start   md:justify-start shadow-md m-[5px] md:m-[8px]    md:w-48  items-center  gap-2 rounded-md  p-[10px] md:p-[32px] lg:p-[10px] text-sm font-medium  hover:text-purple-600"

        >
          {" "}
          <IconShow className="w-6"  color="black" />
          <p className="hidden md:block">{link.name}</p>
        </Link></div>
       
        );
      })}
       <form>
        <button className="  flex m-[8px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-2 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
          <ArrowLeftStartOnRectangleIcon className="w-6" color="black" />
        </button>
      </form>
    </div>
  );
};

export default NavLink;
