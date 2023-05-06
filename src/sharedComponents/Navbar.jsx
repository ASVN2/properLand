import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';
import { HiHome } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs';

const Navbar = ({ image, title, disc, btnstate, btntext, headtext, headState, background, backgroundState }) => {
  const [IsOpend, setIsOpend] = useState(false);

  const style = backgroundState
    ? {
        backgroundImage: `URL(${background}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {
        background: 'rgb(243,209,193)',
        background: 'linear-gradient(235deg, rgba(243,209,193,1) 0%, rgba(255,238,229,1) 82%)',
      };

  return (
    <div style={style} className="hero h-screen overflow-hidden relative bg-gradient-to-r  from-[#FFF0E9] to-[#EAB196] pt-12">
      <div className=" mx1200 ">
        <Link to={'/'} className="holder relative z-30 bg-white h-full flex p-8 justify-between place-items-center">
          <img src="/images/Logo.svg" className="w-[200px]" alt="Logo.svg" />
          <Link
            className={`${
              IsOpend
                ? 'links p-10   text-2xl gap-4 duration-300 opacity-1 font-kuf z-30 flex flex-col absolute bg-white top-36 left-0 w-full'
                : 'links  font-kuf  gap-4 duration-300 opacity-1 place-items-center hidden xl:flex lg:flex md:flex'
            }`}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-main border-b-2 border-dashed border-main font-kuf' : 'text-gray-400')}>
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-main border-b-2 border-dashed border-main font-kuf' : 'text-gray-400')} to={'/about'}>
              About
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-main border-b-2 border-dashed border-main font-kuf' : 'text-gray-400')} to={'/properties'}>
              Properties
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-main border-b-2 border-dashed border-main font-kuf' : 'text-gray-400')} to={'/agents'}>
              Agents
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'text-main border-b-2 border-dashed border-main font-kuf' : 'text-gray-400')} to={'/blogs'}>
              blogs
            </NavLink>
            <Button text={'Contact'} icon={'x'} />
          </Link>
          <div onClick={() => setIsOpend(!IsOpend)} className="menu cursor-pointer block xl:hidden md:hidden lg:hidden">
            <p className={`w-[30px] mb-4  ${IsOpend && 'rotate-[45deg] -mb-0'} duration-300 h-[2px] bg-border`}></p>
            <p className={`w-[30px]  ${IsOpend && 'rotate-[-45deg]'} duration-300 h-[2px] bg-border`}></p>
          </div>
        </Link>
        <div className="info mt-12 h-[70vh] flex justify-start xl:justify-center lg:justify-center md:justify-center flex-col">
          {headState && (
            <p className=" uppercase my-4 flex gap-2 place-items-center font-kuf text-border bg-gradient-to-r w-fit p-1 from-[#FFF0E9] to-[#EAB196]">
              {' '}
              <HiHome /> {headtext}
            </p>
          )}
          <h1 className="text-6xl relative z-20 font-bold w-[90%] lg:w-[50%] xl:w-[50%] md:w-[50%] text-main py-4">{title}</h1>
          <p className="text-border relative z-20 text-xl lg:w-[50%] xl:w-[50%] md:w-[50%]">{disc} </p>
          {btnstate && (
            <div className="touch cursor-pointer relative z-20 flex gap-2 bg-white w-fit p-3  mt-16 place-items-center font-kuf">
              {btntext}
              <button className="font-kuf">
                <div className="text-white bg-yellow-400 p-1 rounded-full">
                  <BsArrowRightShort />
                </div>
              </button>
            </div>
          )}
        </div>
        <img src={image} className="absolute bottom-0 right-0 max-w-[70%] xl:max-w-[50%] lg:max-w-[50%] md:max-w-[50%]" alt="hero.png" />
      </div>
      <img src="images/shape.png" className="absolute z-10 max-w-[50%] rotate-[45deg] top-[-25%] right-[-25%]" alt="shape.png" />
      <img src="images/shape.png" className="absolute max-w-[50%] rotate-[45deg] bottom-[-25%] left-[-25%]" alt="shape.png" />
    </div>
  );
};

export default Navbar;
