import { NavLink } from "react-router-dom";
import CardItems from "../items/CardItems";
import "../../App.css";
import logo from "../../assets/audiophile 2.svg";
import trolley from "../../assets/Combined Shape.svg";

import SpeakersItem from "../items/SpeakersItem";
import Testimonial from "../../Testimonial";

const Header = () => {
  return (
    <div className=" w-full h-full">
      <div className="bg-[#0E0E0E] h-full  ">
        <div className="w-[1110px] mx-auto ">
          <nav className=" flex justify-between px-7 py-8 mx-auto">
            <img src={logo} alt="" />
            <ul className="flex justify-around gap-24 text-white text-[15px] ">
                    <li>
                        <NavLink className="hover:text-orange-500"  to="/">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:text-orange-500" to="/headphones">HEADPHONES</NavLink>
                    </li>
                    <li>
                        <NavLink className="hover:text-orange-500" to="/speakers">SPEAKERS</NavLink>
                    </li>
                    <li className='sitenav__item'>
                        <NavLink className="hover:text-orange-500" to="/earphones">EARPHONES</NavLink>
                    </li>
                </ul>

            <NavLink to={"/cart"}>
              <img src={trolley} alt="" />
            </NavLink>
          </nav>
          <hr className="text-white" />

          {/*   mark ||  headphones */}

          {/* <div className="text-white flex justify-between items-center mt-8  h-full ">
            <div className="w-[398px]">
              <h1 className="text-[#FFF] opacity-[.4] font-">new products</h1>
              <h1 className="text-[56px]">XX99 Mark II Headphones</h1>
              <p className="text-[15px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="bg-[#D87D4A] p-2 mt-8">See product</button>
            </div>

            <div className=" bg-header  ">
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="w-[1110px] mx-auto flex justify-between">
        <CardItems title={"Headphones"} img={headphone} />
        <CardItems title={"Headphones"} img={speaker} />
        <CardItems title={"Headphones"} img={earphone} />
        
      </div> */}

      {/* carditems */}
      {/* <SpeakersItem />
      <Testimonial /> */}
    </div>
  );
};

export default Header;
