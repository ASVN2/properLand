import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdEmail, MdPhone } from 'react-icons/md';

const Navbar = ({ image, name, disc, email, phone, headtext }) => {
  const [IsOpend, setIsOpend] = useState(false);

  return (
    <div className="hero h-[70vh] relative overflow-hidden bg-gradient-to-r  from-[#FFF0E9] to-[#EAB196] pt-12">
      <div className=" mx1200 ">
        <div className="holder relative z-30 bg-white h-full flex p-8 justify-between place-items-center">
          <img src="/images/Logo.svg" className="w-[200px]" alt="Logo.svg" />
          <div
            className={`${
              IsOpend
                ? 'links p-10   text-2xl gap-4 duration-300 opacity-1 font-kuf z-30 flex flex-col absolute bg-white top-36 left-0 w-full'
                : 'links  font-kuf  gap-4 duration-300 opacity-1 place-items-center hidden xl:flex lg:flex md:flex'
            }`}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'} className="text-gray-400">
              About
            </Link>
            <Link to={'/properties'} className="text-gray-400">
              Properties
            </Link>
            <Link to={'/pages'} className="text-gray-400">
              Pages
            </Link>
            <Link to={'/blogs'} className="text-gray-400">
              blogs
            </Link>
          </div>
          <div onClick={() => setIsOpend(!IsOpend)} className="menu cursor-pointer block xl:hidden md:hidden lg:hidden">
            <p className={`w-[30px] mb-4  ${IsOpend && 'rotate-[45deg] mb-0'} duration-300 h-[2px] bg-border`}></p>
            <p className={`w-[30px]  ${IsOpend && 'rotate-[-45deg]'} duration-300 h-[2px] bg-border`}></p>
          </div>
        </div>
        <div className="info mt-12 h-[70vh]  justify-start xl:justify-center lg:justify-center md:justify-center flex-col">
          <p className=" uppercase my-4 flex gap-2 place-items-center font-kuf text-border bg-gradient-to-r w-fit p-1 from-[#FFF0E9] to-[#EAB196]">
            <HiHome /> {headtext}
          </p>
          <h1 className="text-6xl relative z-20 font-bold w-[90%] lg:w-[50%] xl:w-[50%] md:w-[50%] text-main py-4">{name}</h1>
          <p className="text-border relative z-20 text-xl lg:w-[50%] xl:w-[50%] md:w-[50%]">{disc} </p>
          <div className="media mt-10">
            <div className="email flex gap-3 place-items-center border-border">
              <MdEmail /> {email}
            </div>
            <div className="phone flex gap-3 place-items-center border-border">
              <MdPhone /> {phone}
            </div>
          </div>
        </div>
      </div>
      <img src="images/shape.png" className="absolute z-10 max-w-[50%] rotate-[45deg] top-[-25%] right-[-25%]" alt="shape.png" />
      <img src="images/shape.png" className="absolute max-w-[50%] rotate-[45deg] bottom-[-25%] left-[-25%]" alt="shape.png" />
    </div>
  );
};

export default Navbar;
