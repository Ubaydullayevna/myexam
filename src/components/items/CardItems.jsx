import React from "react";
import { AiOutlineRight } from "react-icons/ai";
const CardItems = ({ title, img }) => {
  return (
    <div>
      <div className="h-[200px]">
        {/* flex items */}
        <div className=" flex flex-col mt-24 p-8 items-center h-full  bg-slate-200 w-[250px]">
          <img className="mt-[-80px]  " src={img} alt="" />
          <h1>{title}</h1>
          <div className="flex items-center mt-2  ">
            <span className="">Shop</span>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
