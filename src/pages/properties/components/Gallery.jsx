import React from 'react';

const Gallery = () => {
  return (
    <div className="py-32 bg-[#F5F1EF]">
      <div className="holder  mx1200">
        <h1 className=" font-kuf text-2xl mb-4 text-main font-semibold">Property gallery</h1>
        <div className="gallery w-fit flex gap-4 justify-center  xl:flex-nowrap flex-wrap">
          <img src="/images/ga1.png" className="rounded-md " alt="ga1.png" />
          <img src="/images/ga2.png" className="rounded-md " alt="ga2.png" />
          <img src="/images/ga3.png" className="rounded-md " alt="ga3.png" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
