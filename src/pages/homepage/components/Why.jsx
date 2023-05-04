import React from 'react';
import Header from '../../../sharedComponents/Header';

const Why = () => {
  return (
    <div className="mt-32 mb-20 mx1200">
      <div className="header flex justify-center">
        <Header text={'Why Choose'} num={'03'} />
      </div>
      <h1 className="text-4xl font-kuf text-center text-main w-[60%]  pt-4 mx-auto">Why Choose Our Properties Of Real Estate Industries</h1>

      <div className="grid-wrapper grid grid-cols-auto gap-6 mt-12 ">
        <div className="card relative bg-gradient-to-br from-[#f3d1c1] to-[#ffeee5] p-6 rounded-md">
          <img src="images/pig.png" className="w-[150px]" alt="pig.png" />
          <img src="images/cloud.png" className=" absolute top-10 right-4" alt="pig.png" />

          <div className="text">
            <h1 className="text-2xl font-kuf text-main mt-4 my-2">Budget Friendly</h1>
            <p className=" text-border">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            </p>
          </div>
        </div>

        <div className="card bg-gradient-to-br relative flex flex-col xl:flex-row lg:flex-row gap-3 from-[#f3d1c1] to-[#ffeee5] p-6 col-span-1 xl:col-span-2 lg:col-span-2  rounded-md">
          <img src="images/house.png" className="max-w-[350px]" alt="pig.png" />
          <img src="images/Vector1.png" className="w-[200px] rotate-[] absolute right-0 bottom-0" alt="Vector1.png" />
          <div className="text">
            <h1 className="text-2xl font-kuf text-main mt-4 my-2">Budget Friendly</h1>
            <p className=" text-border">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            </p>

            <p className=" mt-4 text-border">Distinctively re-engineer revolutionary meta-services and premium. </p>
          </div>
        </div>
        <div className="card bg-gradient-to-br relative overflow-hidden from-[#f3d1c1] to-[#ffeee5] p-6 rounded-md">
          <img src="images/hands.png" className="w-[200px]" alt="hands.png" />
          <img src="images/Vector1.png" className="w-[200px] rotate-[250deg] absolute top-0 right-0" alt="Vector1.png" />
          <div className="text">
            <h1 className="text-2xl font-kuf text-main mt-4 my-2">Trusted By Thousands</h1>
            <p className=" text-border">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis{' '}
            </p>
          </div>
        </div>

        <div className="card bg-gradient-to-br relative overflow-hidden from-[#f3d1c1] to-[#ffeee5] p-6 rounded-md">
          <img src="images/map.png" className="max-w-[350px]" alt="map.png" />
          <div className="text pt-8">
            <h1 className="text-2xl font-kuf text-main mt-4 my-2">Prime Location</h1>
            <p className=" text-border">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis{' '}
            </p>
          </div>
        </div>

        <div className="card bg-gradient-to-br relative overflow-hidden from-[#f3d1c1] to-[#ffeee5] p-6 rounded-md">
          <img src="images/monay.png" className=" max-w-[250px]" alt="monay.png" />
          <div className="text pt-4">
            <h1 className="text-2xl font-kuf text-main mt-4 my-2">Prime Location</h1>
            <p className=" text-border">
              Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
