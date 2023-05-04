import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMediaQuery } from 'react-responsive';
import '@splidejs/react-splide/css';
import dataReviews from '../../../data/reviews.json';
import { CgScrollH } from 'react-icons/cg';

const Reviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="bg-[#F3E8E2] py-20 relative">
      <div className="titles mx1200 justify-between flex">
        <div className="text text-main text-2xl font-kuf font-bold">What our customers say about us</div>
        <div className="arrow">
          <CgScrollH className=" text-4xl text-yellow-600" />
        </div>
      </div>
      <div className="reviews mt-10">
        <Splide
          options={{
            rewind: true,
            gap: '1rem',
            type: 'loop',
            perPage: isMobile ? 1.3 : 3.5,
            perMove: 1,
            loop: true,
            drag: 'free',
            omitEnd: false,
          }}
          aria-label="My Favorite Images">
          {dataReviews &&
            dataReviews.reviews.map((reviews) => {
              return (
                <SplideSlide key={reviews.name} className="">
                  <div className="text text-2xl p-10 rounded-[40px] rounded-bl-sm text-[#B16642] bg-gradient-to-bl from-[#ECC8B7] to-[#F4DBCE]">{reviews.comment}</div>
                  <div className="info  mt-8 flex gap-4 place-items-center">
                    <div className="image">
                      <img className="rounded-full w-16 h-16 border-4 border-[#ECC8B7]" src={reviews.image} alt={reviews.image} />
                    </div>
                    <div className="person">
                      <p className=" font-kuf text-main text-xl ">{reviews.name}</p>
                      <p className=" text-border text-base">{reviews.isHappy ? 'Happy customer' : 'Not happy customer'}</p>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          <div class="splide__arrows"></div>
          <ul class="splide__pagination"></ul>
        </Splide>
      </div>
    </div>
  );
};

export default Reviews;
