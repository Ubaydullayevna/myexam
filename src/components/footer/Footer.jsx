import React from "react";
import logo from "../../assets/audiophile 2.svg";
import { NavLink } from "react-router-dom";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#101010]  flex">
        <div className="w-[1110px] mx-auto mb-8 flex mt-12 justify-between text-white">
          <div className="w-[40%]">

          <img src={logo} alt="" />
          <p className="mt-8">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
            </p >
            <p className="mt-6">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="flex flex-col gap-16 ">
            <div className="flex text-white  gap-12">

          <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/headphones"}>Headphones</NavLink>
            <NavLink to={"/speakers"}>Speakers</NavLink>
              <NavLink to={"/earphones"}>Earphones</NavLink>
            </div>
              
            <div className="text-white">
              <ul className="flex gap-8 mr-0 ">
                <li>{< AiFillFacebook/>}</li>
                <li>{ <AiFillTwitterCircle/>}</li>
                <li>{<FaInstagramSquare/>}</li>
                
              </ul>
            </div>
          </div>
            
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
