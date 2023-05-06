import React, { useEffect } from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { IoMdMail } from 'react-icons/io';
import { RiPhoneFill } from 'react-icons/ri';
import { BiRuler, BiBed, BiCar, BiBath } from 'react-icons/bi';

const Info = ({ data }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <div className="mx1200 py-32">
      <div className="row flex flex-wrap xl:flex-nowrap gap-6 justify-between place-items-center">
        <div className="col flex-1">
          <p className="mt-4 flex gap-4 text-2xl place-items-center text-gray-500">
            <GrMapLocation className="text-blue-400" />
            {data.location.country} • {data.location.city} • {data.location.state}
          </p>
          <h1 className="text-main text-3xl mt-4 font-bold font-kuf">{data.title}</h1>
          <p className="text-gray-400">
            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically .
          </p>
        </div>
        <div className="col flex-1">
          <p className="text-3xl text-yellow-400 font-bold">{data.price}</p>
          <div className="flex gap-4 mt-4">
            <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500   px-2 rounded-sm w-fit">
              <BiBed className="text-main" />
              {data.bathrooms}
            </p>
            <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500   px-2 rounded-sm w-fit">
              <BiBath className="text-main" />
              {data.beds}
            </p>
            <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500   px-2 rounded-sm w-fit">
              <BiCar className="text-main" />
              {data.parks}
            </p>
            <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500  px-2 rounded-sm w-fit">
              <BiRuler className="text-main" />
              {data.size}
            </p>
          </div>
          <button className="text-white mt-5 bg-main p-2 px-4 font-semibold rounded-md">For sale</button>
        </div>
      </div>

      {/* about */}
      <div className="about mt-10 border-t place-items-center flex-col md:flex-row flex gap-10 pb-8 border-gray-200">
        <div className="col">
          <h2 className="text-main text-3xl font-kuf mt-5">About the property</h2>
          <p className="text-gray-400 mb-4">
            Laminate flooring is a more affordable option in place of hardwood flooring that can cost almost ten times the cost of laminate flooring. Laminate flooring is light,
            durable and can be made to resemble.
          </p>

          <p className="text-gray-400 mb-4">
            Appropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive quality{' '}
            <span className="text-main font-kuf">vectors global sources services.</span> Uniquely matrix economically sound value through cooperative technology. Competently
            parallel task fully researched data and enterprise process improvements.
          </p>

          <ul className="text-gray-400 mb-4 list-inside">
            <li className="mb-2">Dynamically target high-payoff intellectual capital for customize</li>
            <li className="mb-2">Interactively procrastinate high-payoff content</li>
            <li className="mb-2">Credibly reinter mediate backend ideas for cross-platform models</li>
          </ul>

          <p className="text-gray-400 mb-4">
            Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.
            Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </p>

          <p className="bg-main text-white p-10 font-semibold">
            “Democracy must be built through open societies that share information. When there is information, there is enlightenment. When there is no sharing of power, no rule of
            law, no accountability, there is abuse, corruption and indignation.”
          </p>
          <h2 className="text-main mt-4 text-3xl font-kuf">Make real time a build services</h2>

          <p className="text-gray-400 mb-4">
            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize
            customer directed convergence without revolutionary ROI.
          </p>

          <ul className="text-gray-400 mb-4">
            <li>Dynamically target high-payoff intellectual capital for customized</li>
            <li>Interactively procrastinate high-payoff content</li>
            <li>Credibly reinter backend ideas for cross-platform models</li>
            <li>We provide operational efficiency, data security, and flexible scale</li>
          </ul>

          <p className="text-gray-400 mb-4">
            It is a long established fact that a reader will be distracted by the readable content page when looking at its layout. The point of using Lorem Ipsum is that it
            more-or-less normal distribution of letters, as felt opposed to using 'Content here making it look like readable.
          </p>
        </div>
        {/* secend */}
        <div className="col">
          <div className="aboutme bg-[#DAC5BB] p-10 border border-border rounded-md">
            <h1 className="text-main text-xl font-kuf">About Agent</h1>
            <p className="text-gray-500">
              A perfect property finder and seller with great knowledge in the real estate field. Talented in searching for a property with in the customer's needed areas.
            </p>
            <div className="char flex gap-2 place-items-center py-4">
              <img src="/images/xp-2.png" className=" rounded-md w-20 " alt="avatar02.png" />
              <div className="name">
                <h1 className="text-main mb-2">Anne Hathaway</h1>
                <p className="text-gray-500">Land Seller</p>
              </div>
            </div>
            <div className="media p-4 bg-white">
              <p className="flex gap-2 place-items-center text-gray-600">
                <IoMdMail className="text-yellow-400" /> anne-hathaway@mail.com
              </p>
              <p className="flex gap-2 place-items-center text-gray-600">
                <RiPhoneFill className="text-yellow-400" /> +1 719-504-1984
              </p>
            </div>
          </div>

          <div className="form bg-[#DAC5BB] mt-6 p-10 border border-border rounded-md">
            <form className="w-full">
              <input type="text" placeholder="Name" className="outline-none border w-full border-gray-400 mb-4 rounded-sm p-2 block" />
              <input type="email" placeholder="Email" className="outline-none border w-full border-gray-400 rounded-sm mb-4 p-2 block" />
              <input type="number" placeholder="Phone" className="outline-none mb-4 w-full border border-gray-400  rounded-sm p-2 block" />
              <textarea placeholder="Message" className="outline-none mb-4 border w-full border-gray-400  rounded-sm p-2 block"></textarea>
              <button className="bg-main font-kuf p-2 px-4 text-[15px] w-full text-white">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
