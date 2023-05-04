import React from 'react';
import Header from '../../../sharedComponents/Header';

const Services = () => {
  return (
    <div className="mx1200 pb-32">
      <div className="header flex justify-center ">
        <Header text={'Services'} num={'05'} />
      </div>
      <h1 className="font-kuf text-main  text-4xl text-center font-bold py-2 pb-8 ">See How Can Help</h1>
      <div className="grid-wrapper grid grid-cols-auto gap-6 ">
        <div className="col p-3 ">
          <div className="icon">
            <img src="images/rent.png" className="mx-auto" alt="servicesIcon.png" />
          </div>
          <h1 className=" font-kuf text-main font-bold text-xl text-center">Rent a Home</h1>
          <p className="mt-2 text-gray-400 text-center">High level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.</p>
        </div>

        <div className="col p-3 ">
          <div className="icon">
            <img src="images/sale.png" className="mx-auto" alt="servicesIcon.png" />
          </div>
          <h1 className=" font-kuf text-main font-bold text-xl text-center">Sale a Home</h1>
          <p className="mt-2 text-gray-400 text-center">Frameworks to provide a robust synopsis for high level overviews. approaches lverall, Organically grow the holistic.</p>
        </div>

        <div className="col p-3 ">
          <div className="icon">
            <img src="images/buy.png" className="mx-auto" alt="servicesIcon.png" />
          </div>
          <h1 className=" font-kuf text-main font-bold text-xl text-center">Buy a Home</h1>
          <p className="mt-2 text-gray-400 text-center">Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.</p>
        </div>

        <div className="col p-3 ">
          <div className="icon">
            <img src="images/agent.png" className="mx-auto" alt="servicesIcon.png" />
          </div>
          <h1 className=" font-kuf text-main font-bold text-xl text-center">Experience Agent</h1>
          <p className="mt-2 text-gray-400 text-center">Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition.</p>
        </div>

        <div className="col p-3 ">
          <div className="icon">
            <img src="images/support.png" className="mx-auto" alt="servicesIcon.png" />
          </div>
          <h1 className=" font-kuf text-main text-xl text-center">Member Support</h1>
          <p className="mt-2 text-gray-400 text-center">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. lverall value proposition Organically grow holistic .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
