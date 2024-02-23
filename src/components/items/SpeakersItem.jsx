import React from "react";
import speaker from "../../assets/image-removebg-preview(38).png";
import speaker2 from '../../assets/Bitmap (2).png'
import speaker3 from '../../assets/Bitmap (3).png'
import { Button1 } from "../buttons/Button";
const SpeakersItem = () => {
  return (
    <div>
      <div>
        <div className="w-[1110px] bg-[#D87D4A] flex justify-around items-center  gap-6 my-16 mx-auto ">
          <img className="w-[410px] mt-12" src={speaker} alt="" />
          <div className="w-[40%] text-white">
            <h1 className="text-[56px] ">ZX9 SPEAKER</h1>
            <p className="mt-6 mb-6 text-[15px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
           <Button1/>
          </div>
        </div>
              <div className="bg-[#DFDFDFFF] my-16 w-[1110px] mx-auto flex items-center justify-around">
                  <div className="px-8 ">
                      <h1 className="text-[56px] " >ZX7 SPEAKER</h1>
                     <Button1/>
                  </div>
                  <img className="bg-none w-[600px] ml-auto" src={speaker2} alt="" />
        </div>
              <div className="flex bg-[#f1f1f1] w-[1110px] mx-auto mb-8 items-center gap-4 ">
                  <img src={speaker3} alt="" />
                  <div className="mx-[10%]">
                      <h1 className="text-[28px] mb-4">YX1 EARPHONES</h1>
                      <Button1 />
                  </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersItem;
