import Header from '../../../sharedComponents/Header';
import { BsFillPlayFill } from 'react-icons/bs';

const Buying = () => {
  return (
    <div className="p-0 xl:p-32 lg:p-32 md:p-32">
      <div className="holder bg-gray-200 mx1200 gap-2 flex flex-col lg:flex-row xl:flex-row">
        <div className="text  p-12">
          <Header num={'01'} text={'PROPERLAND INTRO'} />
          <h1 className="font-kuf text-main text-4xl font-bold py-2">Buying & Selling Property In An Easy Way</h1>
          <p className="text-border">
            Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi.
          </p>
          <ul className="flex place-items-start justify-between gap-4 mt-4 flex-col  md:place-items-center lg:place-items-center xl:place-items-center md:flex-row lg:flex-row xl:flex-row">
            <li className="flex gap-2 place-items-center">
              <div className="icon h-8 w-8 flex justify-center place-items-center rounded-full bg-[#CFCFCF]">
                <span className="bg-[#3B3A5D] rounded-full h-3 w-3"></span>
              </div>
              <p className="text text-gray-600">Only pay when you publish</p>
            </li>
            <li className="flex gap-2 place-items-center">
              <div className="icon h-8 w-8 flex justify-center place-items-center rounded-full bg-[#CFCFCF]">
                <span className="bg-[#3B3A5D] rounded-full h-3 w-3"></span>
              </div>
              <p className="text text-gray-600">Only pay when you publish</p>
            </li>
            <li className="flex gap-2 place-items-center">
              <div className="icon h-8 w-8 flex justify-center place-items-center rounded-full bg-[#CFCFCF]">
                <span className="bg-[#3B3A5D] rounded-full h-3 w-3"></span>
              </div>
              <p className="text text-gray-600">Only pay when you publish</p>
            </li>
          </ul>
        </div>
        <div className="image relative flex place-items-center">
          <img src="images/photo01.jpg" className=" bg-content" alt="" />
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

export default Buying;
