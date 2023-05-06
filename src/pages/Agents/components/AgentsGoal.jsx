import React from 'react';

export const AgentsGoal = ({ image }) => {
  return (
    <div className="mx1200 py-4 relative">
      <div className="row flex p-4 xl:w-[50%] justify-between gap-6">
        <div className="col">
          <div className="title text-main text-center text-2xl font-bold">6,180</div>
          <div className="name text-center text-border">In property sales</div>
        </div>
        <div className="col">
          <div className="title text-main text-center text-2xl font-bold">99%</div>
          <div className="name text-center text-border">Customer satisfaction</div>
        </div>
        <div className="col">
          <div className="title text-main text-center text-2xl font-bold">25K+</div>
          <div className="name text-center text-border">Property Transaction</div>
        </div>
      </div>
      <div className="image flex justify-center pt-8">
        <img src={image} className="relative md:absolute p-8 bg-[#EAB196]  xl:-bottom-20 xl:right-32 xl:max-w-[50%]" alt="hero.png" />
      </div>
    </div>
  );
};
