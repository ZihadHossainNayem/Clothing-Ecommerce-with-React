import { useContext } from "react";
//import useParams
import { useParams } from "react-router-dom";
//import cart context
import { CartContext } from "../contexts/CartContext";
//import item context
import { ItemContext } from "../contexts/ItemContext";

const ItemDetails = () => {
  //getting item id from url
  const { id } = useParams();
  const { items } = useContext(ItemContext);
  const { addCart } = useContext(CartContext);

  //getting the single item based on id
  const item = items.find((item) => {
    return item.id === parseInt(id);
  });

  // item not found
  if (!item) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  //destructure item
  const { title, price, description, image } = item;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="mx-auto ">
        {/* image and text */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium max-w-[450px] mb-4 mx-auto lg:mx-4">
              {title}
            </h1>
            <div className="text-xl text-rose-500 font-medium mb-4 mx-4">
              $ {price}
            </div>
            <p className="mb-8 mx-4">{description}</p>
            <button
              onClick={() => addCart(item, item.id)}
              className="bg-[#28282B] text-white py-4 px-8  mx-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
