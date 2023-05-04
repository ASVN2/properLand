import React from 'react';

const Header = ({ num, text }) => {
  return (
    <div>
      <p className=" uppercase text-main border-x-2 mb-4 border-main w-fit px-2 ">
        {' '}
        <span className="text-yellow-500">{num}</span> {text}
      </p>
    </div>
  );
};

export default Header;
