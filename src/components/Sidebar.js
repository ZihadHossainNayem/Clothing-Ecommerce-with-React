import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Cart from "../components/Cart";

const Sidebar = () => {
  const { open, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        open ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35p]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <BsArrowRightShort size={30} />
        </div>
      </div>

      <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <Cart item={item} key={item.id} />;
        })}
      </div>

      <div>
        <div className=" flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            {/* total price */}
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>${" "}
              {parseFloat(totalPrice).toFixed(2)}
            </div>
            {/* clear cart */}
            <div
              onClick={() => clearCart()}
              className="cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center"
            >
              <FaRegTrashAlt size={22} />
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium mb-4"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-[#28282B] text-white flex p-4 justify-center items-center w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
