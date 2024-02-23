import './Home.css'
import Header from '../../components/header/Header'
import CardItems from '../../components/items/CardItems'
import speaker from "../../assets/image-removebg-preview(38) (1).png";
import earphone from "../../assets/image-removebg-preview(42).png";
import backHeadphone from "../../assets/Bitmap.png";
import headphone from "../../assets/image-removebg-preview(41).svg";
import SpeakersItem from '../../components/items/SpeakersItem';
import Testimonial from '../../Testimonial';

const Home = () => {
  return (
    <div>
      <div className='bg-black'>

      <div className="  text-white flex justify-between items-center w-[1110px] mx-auto  h-full ">
            <div className="w-[398px]">
              <h1 className="text-[#FFF] opacity-[.4]  text-[30px] ">new products</h1>
              <h1 className="text-[56px]">XX99 Mark II Headphones</h1>
              <p className="text-[15px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="bg-[#D87D4A] p-2 mt-8">See product</button>
            </div>

            <div className=" bg-header  ">
            </div>
        </div>
      </div>
        
      <div className="w-[1110px] mx-auto flex justify-between my-24">
        <CardItems title={"Headphones"} img={headphone} />
        <CardItems title={"Headphones"} img={speaker} />
        <CardItems title={"Headphones"} img={earphone} />
        {/* <CardItems title={'Speakers'} img={ } />
      <CardItems/> */}
      </div>
      <SpeakersItem />
      <Testimonial />
    </div>
  )
}

export default Home