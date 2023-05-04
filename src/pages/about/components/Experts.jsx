import React from 'react';
import Header from '../../../sharedComponents/Header';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Experts = () => {
  return (
    <div className="mx1200 py-20">
      <div className="header flex justify-center">
        <Header num={'06'} text={'Experts'} />
      </div>
      <h1 className="font-kuf text-center py-4 text-main text-2xl font-bold">Our Property Team</h1>

      <div className="experts flex flex-wrap xl:flex-nowrap justify-center gap-4 mt-4">
        <div className="col w-fit bg-gray-100">
          <img src="images/xp-1.png" alt="xp-1.png" />
          <div className="info p-4">
            <h1 className="text-main font-kuf text-2xl">Peter Parker</h1>
            <div className="media flex justify-between">
              <span className="text-yellow-400">Land Seller</span>
              <div className="social flex gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="col w-fit bg-yellow-400">
          <img src="images/xp-2.png" alt="xp-2.png" />
          <div className="info p-4">
            <h1 className="text-main font-kuf text-2xl">Elena Gilberts</h1>
            <div className="media flex justify-between">
              <span className="text-white">Land Seller</span>
              <div className="social flex gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="col w-fit bg-gray-100">
          <img src="images/xp-3.png" alt="xp-3.png" />
          <div className="info p-4">
            <h1 className="text-main font-kuf text-2xl">Peter Parker</h1>
            <div className="media flex justify-between">
              <span className="text-yellow-400">Land Seller</span>
              <div className="social flex gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="col w-fit bg-gray-100">
          <img src="images/xp-4.png" alt="xp-4.png" />
          <div className="info p-4">
            <h1 className="text-main font-kuf text-2xl">Rosalina William</h1>
            <div className="media flex justify-between">
              <span className="text-yellow-400">Land Seller</span>
              <div className="social flex gap-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
