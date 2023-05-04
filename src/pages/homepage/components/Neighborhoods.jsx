import React from 'react';
import Header from '../../../sharedComponents/Header';
import { BsArrowRightShort } from 'react-icons/bs';

const data = [
  {
    name: 'New York',
    property: '250',
    image: 'images/Neighborhoods01.png',
  },
  {
    name: 'Atlanta',
    property: '120',
    image: 'images/Neighborhoods02.png',
  },
  {
    name: 'Singapore',
    property: '45',
    image: 'images/Neighborhoods03.png',
  },
  {
    name: 'Paris',
    property: '99',
    image: 'images/Neighborhoods04.png',
  },
];

const Neighborhoods = () => {
  return (
    <div className="py-20 mx1200">
      <div className="header flex justify-center">
        <Header num={'06'} text={'Neighborhoods'} />
      </div>
      <h1 className="font-kuf text-center text-main text-4xl font-bold py-2">Discover The Neighborhoods</h1>

      <div className="neighbor mt-10 flex justify-center xl:justify-between lg:justify-between  flex-wrap xl:flex-nowrap lg:flex-nowrap gap-4">
        {data &&
          data.map((ne) => (
            <div className="relative bg-cover">
              <img src={ne.image} className="bg-cover" alt={ne.image} />
              <h2 className="text-2xl absolute bottom-[40px] left-4 font-kuf text-white">{ne.name}</h2>
              <h3 className="text-yellow-400 absolute bottom-[10px] left-4">{ne.property} Property</h3>
              <div className="icon absolute cursor-pointer top-6 rounded-full right-6 h-10 w-10 bg-[#ffffff61] flex justify-center place-items-center">
                <BsArrowRightShort className="text-white text-xl" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Neighborhoods;
