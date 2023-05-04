import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

const LearnMore = () => {
  return (
    <div className="mx1200 py-32">
      <div className="row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6">
        <div className="image flex-1">
          <img src="images/learn-1.png" alt="learn-1.png" />
        </div>
        <div className="info flex flex-1 flex-col justify-center">
          <h1 className="font-kuf text-4xl text-main">Learn More About Who We Are in Real Estate</h1>
          <p className="text-border">
            Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolore.
          </p>
        </div>
      </div>

      <div className="row flex mt-10 flex-col-reverse md:flex-row lg:flex-row xl:flex-row gap-6">
        <div className="info flex flex-1 flex-col justify-center">
          <h1 className="font-kuf text-4xl text-main">We're reinventing the space</h1>
          <p className="text-border">
            Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolore.
          </p>

          <div className="ser-1 mt-6">
            <h3 className="text-xl mb-2 font-bold">Full Services</h3>
            <p className="text-gray-700 w-[80%]">Interactively procrastinate high-payoff content without backward-compatible data.</p>
          </div>

          <div className="ser-2 mt-6">
            <h3 className="text-xl mb-2 font-bold">Safe Investments</h3>
            <p className="text-gray-700 w-[80%]">Interactively procrastinate high-payoff content without backward-compatible data.</p>
          </div>
        </div>

        <div className="image flex-1 relative">
          <img src="images/learn-2.png" alt="learn-1.png" />
          <div className="play absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer hover:scale-105 duration-300">
            <div className="layer3 w-20 h-20 rounded-full flex justify-center place-items-center bg-[#ffffff76]">
              <div className="layer2 bg-[#ffffffa6] h-16 w-16 rounded-full flex justify-center place-items-center">
                <div className="layer1 bg-[#ffffff] h-10 w-10 rounded-full flex justify-center place-items-center">
                  <BsFillPlayFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
