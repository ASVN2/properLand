import React from 'react';
import Header from '../../../sharedComponents/Header';

const VIntro = () => {
  return (
    <div className="mx1200 flex-col md:flex-row xl:flex-row lg:flex-row  my-32 place-items-center flex">
      <div className="image flex-1">
        <img src="images/aboutvintro.png" alt="aboutvintro.png" />
      </div>
      <div className="text flex-1 p-4">
        <div className="info">
          <Header num={'01'} text={'VIntro Video'} />
          <h1 className="font-kuf py-4 text-main text-2xl font-bold">Buying & Selling Property In An Easy Way</h1>
          <p className="text-border mb-8">
            Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi.
          </p>
        </div>
        <div className="ourser ">
          <div className="one mb-8 gap-4 flex place-items-center">
            <div className="icon">
              <img src="images/visionIcon.png" alt="visionIcon.png" />
            </div>
            <div className="text">
              <h1 className=" font-kuf text-main">Our Vision</h1>
              <p className="text-gray-400">
                Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              </p>
            </div>
          </div>

          <div className="two mb-8 gap-4 flex place-items-center">
            <div className="icon">
              <img src="images/missionIcon.svg" alt="visionIcon.png" />
            </div>
            <div className="text">
              <h1 className=" font-kuf text-main">Our Vision</h1>
              <p className="text-gray-400">
                Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIntro;
