import { useContext, useEffect, useState } from "react";
//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
//cart context
import { CartContext } from "../contexts/CartContext";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  //header state
  const [isActive, setIsActive] = useState(false);

  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={` ${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="px-4 mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[35px]" src={logo} alt="" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setOpen(!open)}
          className=" cursor-pointer flex relative"
        >
          <BsHandbag size={25} />
          <div className="bg-red-500  text-white text-[12px] absolute -right-2 -bottom-2  w-[18px] h-[18px] rounded-full flex items-center justify-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
