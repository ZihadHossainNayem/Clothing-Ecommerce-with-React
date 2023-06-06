import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { CiMaximize1 } from "react-icons/ci";
//cart context
import { CartContext } from "../contexts/CartContext";

const Items = ({ item }) => {
  const { addCart } = useContext(CartContext);
  //destructuring items
  const { id, image, category, title, price } = item;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] my-2 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* images */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[180px] group-hover:scale-125 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* buttons */}
        <div className="absolute top-4 -right-11 group-hover:right-4 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => {
              addCart(item, id);
            }}
          >
            <div className="flex justify-center items-center text-white bg-rose-500 w-12 h-12 drop-shadow-xl">
              <AiOutlinePlus size={25} />
            </div>
          </button>
          <Link
            to={`/item/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"
          >
            <CiMaximize1 size={25} />
          </Link>
        </div>
      </div>

      {/* item title, category, price */}
      <div className="text-sm capitalize text-gray-500">{category}</div>
      <Link to={`/item/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <h2 className="font-semibold ">$ {price}</h2>
    </div>
  );
};

export default Items;
