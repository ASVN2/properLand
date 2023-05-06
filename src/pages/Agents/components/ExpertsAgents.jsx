import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import data from '../../../data/agents.json';

const ExpertsAgents = () => {
  console.log();
  return (
    <div className="py-20 mx1200">
      <div className="experts flex flex-wrap justify-center gap-4 mt-4">
        {data &&
          data.data.map((card) => {
            return (
              <Link to={`/agents/singleAgents/${card.id}`} key={card.id} className={`col w-fit ${card.yellow ? 'bg-yellow-400' : 'bg-gray-100'}`}>
                <img src={card.image} alt={card.image} />
                <div className="info p-4">
                  <h1 className="text-main font-kuf text-2xl">{card.name}</h1>
                  <div className="media flex justify-between">
                    <span className="text-yellow-400">{card.state}</span>
                    <div className="social flex gap-3">
                      <FaFacebook />
                      <FaInstagram />
                      <FaTwitter />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ExpertsAgents;
