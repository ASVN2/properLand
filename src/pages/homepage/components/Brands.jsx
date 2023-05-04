import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Brands = () => {
  return (
    <div className="bg-[#F5F1EF] mx1200 py-20">
      <h1 className="font-kuf text-center text-main text-3xl font-bold py-2">More than 50+ Brands Trusted World Wide</h1>
      <div className="flex flex-wrap gap-10 justify-center mt-10 place-items-center">
        <img src="images/Brand01.png" alt="Brands" />
        <img src="images/Brand02.svg" alt="Brands" />
        <img src="images/Brand03.png" alt="Brands" />
        <img src="images/Brand04.png" alt="Brands" />
        <img src="images/Brand05.png" alt="Brands" />
        <img src="images/Brand06.png" alt="Brands" />
        <img src="images/Brand07.svg" alt="Brands" />
        <img src="images/Brand08.png" alt="Brands" />
        <img src="images/Brand09.png" alt="Brands" />
      </div>
      <div className="touch mt-10 mx-auto shadow-md cursor-pointer rounded-md relative z-20 flex gap-2 bg-white text-main w-fit p-3 place-items-center font-kuf">
        Learn more
        <button className="font-kuf">
          <div className=" bg-yellow-500 p-1 rounded-full">
            <BsArrowRightShort />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Brands;
