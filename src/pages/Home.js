import { useContext } from "react";
//item context import
import { ItemContext } from "../contexts/ItemContext";

//items components
import Items from "../components/Items";
import Hero from "../components/Hero";

const Home = () => {
  //getting items from ItemContext
  const { items } = useContext(ItemContext);

  //getting category for men and women cloths only
  const filteredItem = items.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="mx-auto pl-[30px]">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx-0 ">
            {filteredItem.map((item) => {
              return <Items item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
