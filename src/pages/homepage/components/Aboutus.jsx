import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Header from '../../../sharedComponents/Header';

const Aboutus = () => {
  return (
    <div className="aboutus bg-gradient-to-bl flex overflow-hidden  justify-end relative mb-32 from-[#F2F1EF] to-[#F2F1EF]">
      <div className="flex max-w-[1440px] place-items-center ">
        <div className="text p-4 py-12">
          <Header text={'about us'} num={'04'} />
          <h1 className="text-3xl font-kuf text-main font-bold py-4 relative z-10">42+ years of helping you find the right Propertys</h1>
          <p className=" text-border relative z-10">
            Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="touch cursor-pointer rounded-md relative z-20 flex gap-2 bg-yellow-500 w-fit p-3 mt-4 place-items-center font-kuf">
            Learn more
            <button className="font-kuf">
              <div className="bg-main text-yellow-500 p-1 rounded-full">
                <BsArrowRightShort />
              </div>
            </button>
          </div>
        </div>
        <img src="images/aboutUs.png" className="max-w-[700px] hidden lg:block xl:block " alt="aboutUs.png" />
      </div>

      <img src="images/Pattern.png" className="absolute bottom-0 left-0 max-w-[700px]" alt="Pattern.png" />
    </div>
  );
};

export default Aboutus;
