import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Perblog = () => {
  return (
    <div className="mx1200 my-20 flex gap-4 flex-col md:flex-row">
      <div className="image flex-1 flex-col md:flex-row">
        <img src="/images/perblog.png" alt="perblog.png" />
      </div>
      <div className="text flex-1">
        <div className="title text-border flex gap-3">
          <p>November 05, 2021</p>
          <p>Architecture</p>
        </div>
        <h1 className="text-main font-kuf text-2xl">Here’s how to decorate your new home from scratch</h1>
        <p className="text-gray-400">
          Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <button className="bg-yellow-400 p-4 rounded-md flex gap-2 place-items-center mt-4">
          <span className="text-main font-kuf text-xl">View More</span>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Perblog;
