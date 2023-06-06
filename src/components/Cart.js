import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { useContext } from "react";

//cart context
import { CartContext } from "../contexts/CartContext";
const Cart = ({ item }) => {
  const { removeCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  //destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-600">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* title and bin icon */}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] hover:underline "
            >
              {item.title}
            </Link>

            {/* remove icon */}
            <div className="text-2xl cursor-pointer">
              <IoMdClose
                onClick={() => removeCart(id)}
                className="text-gray-500 hover:text-red-500 transition"
              />
            </div>
          </div>

          <div className=" flex gap-x-2 h-[40px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border">
              {/* decrement icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* increment icon */}
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* individual price*/}
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            {/* total price*/}
            {/* 2 decimals price */}
            <div className="flex flex-1 justify-end items-center ">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
