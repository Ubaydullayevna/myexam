// import { NavLink, Outlet } from "react-router-dom";
import ItemInfo from "../../components/items/ItemInfo";
// import headphone from '../../assets/headphone.png'
// import headphone2 from '../../assets/headphone2.png'
// import headphone3 from '../../assets/headphone3.png'
// import "./Headphones.css";
// import ItemInfo2 from "../../components/items/ItemInfo2";
import CardItems from "../../components/items/CardItems";
import earphone from "../../assets/image-removebg-preview(42).png";
import headphone1 from "../../assets/image-removebg-preview(41).svg";
import speaker3 from "../../assets/speaker3.png";
import Testimonial from "../../Testimonial";

const Earphones = () => {
  return (
    <div>
      <div className="bg-[#101010FF] flex">
        <div className="  text-white  w-[1110px] flex mx-auto my-12 items-center ">
          <h1 className="text-[40px] mx-auto">EARPHONES</h1>
          
        </div>
      </div>

      <ItemInfo title="XX99 Mark II Headphones" img={speaker3} />
      {/* <ItemInfo2 title="XX99 Mark II Headphones" img={headphone2} />
      <ItemInfo title="XX59 Mark II Headphones" img={headphone3} /> */}
      <div className="w-[1110px] mx-auto flex justify-between">
        <CardItems title={"Headphones"} img={headphone1} />
        <CardItems title={"Headphones"} img={speaker3} />
        <CardItems title={"Headphones"} img={earphone} />
      </div>
      <div>
      
        <Testimonial/>
      </div>

    </div>
  );
};

export default Earphones;
