import React from 'react';
import Header from '../../../sharedComponents/Header';

const Process = () => {
  return (
    <div className="mx1200 py-32">
      <div className="header flex justify-center">
        <Header num={'02'} text={'PROCESS'} />
      </div>
      <h1 className="font-kuf py-4 text-center text-main text-2xl font-bold mb-6">Buying & Selling Property In An Easy Way</h1>
      <div className="processes flex-col md:flex-row lg:flex-row xl:flex-row flex gap-4">
        <div className="col bg-gradient-to-t from-[#EAB196] to-[#FFF0E9] p-6">
          <h1 className="h-20 w-20  text-2xl font-semibold text-white rounded-full bg-yellow-400 flex justify-center place-items-center">01</h1>
          <h3 className="text-main text-2xl font-kuf py-4">Planning stage</h3>
          <p className="text-xl text-border">High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.</p>
        </div>
        <div className="col bg-gradient-to-t from-[#EAB196] to-[#FFF0E9] p-6">
          <h1 className="h-20 w-20  text-2xl font-semibold text-white rounded-full bg-yellow-400 flex justify-center place-items-center">02</h1>
          <h3 className="text-main text-2xl font-kuf py-4">Planning stage</h3>
          <p className="text-xl text-border">High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.</p>
        </div>
        <div className="col bg-gradient-to-t from-[#EAB196] to-[#FFF0E9] p-6">
          <h1 className="h-20 w-20  text-2xl font-semibold text-white rounded-full bg-yellow-400 flex justify-center place-items-center">03</h1>
          <h3 className="text-main text-2xl font-kuf py-4">Planning stage</h3>
          <p className="text-xl text-border">High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
