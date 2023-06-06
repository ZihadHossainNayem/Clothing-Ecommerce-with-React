//hero image
import heroBg from "../assets/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-hero bg-no-repeat bg-cover bg-center h-[600px] py-24">
      <div className="px-8 mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center ">
          <div className="font-semibold flex item-center uppercase">
            <div className="w-10 h-[2px] bg-rose-500 mr-3 my-auto "></div> New
            Trend
          </div>
          <h1 className="font-light mb-4 text-[70px] leading-[1.1]">
            SUMMER <br /> SALE <br /> STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to="/"
            className="self-start uppercase font-semibold border-b-2 border-gray-400"
          >
            Discover More
          </Link>
        </div>
        <div>
          <img className="hidden lg:block w-[680px]" src={heroBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
