
import NavLink from "./NavLink";
import Link from "next/link";
import Logo from "./logo";
const SideBar = () => {
  return (
    <div  >
      <Link href="/store">
        <Logo />
      </Link>
      <div className="mt-3">
        <NavLink />
      </div>

     
    </div>
  );
};

export default SideBar;
