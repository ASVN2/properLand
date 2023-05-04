import Header from '../../../sharedComponents/Header';
import dataHouses from '../../../data/house.json';
import { BsArrowRightShort } from 'react-icons/bs';
import Card from '../../homepage/components/Card';

const Propertiex = () => {
  return (
    <div className="bg-[#fff0e9] py-20 pt-32 relative overflow-hidden">
      <div className="holder mx1200">
        <div className="flex justify-center">
          <Header num={'02'} text={'properties'} />
        </div>
        <h1 className="font-kuf text-main text-4xl font-bold py-2 pb-8 text-center">Properties for sale in your favorite area</h1>
        <div className="houses grid grid-cols-twoinrow gap-6">{dataHouses && <Card dataHouses={dataHouses} />}</div>

        <div className="touch cursor-pointer relative z-20 flex gap-2 bg-white w-fit p-3 mx-auto mt-16 place-items-center font-kuf">
          touch with us
          <button className="font-kuf">
            <div className="text-white bg-yellow-400 p-1 rounded-full">
              <BsArrowRightShort />
            </div>
          </button>
        </div>

        <div className="halfCircle absolute h-[500px] w-[500px] rounded-full bottom-[-200px] translate-x-[-50%] left-[50%] bg-gradient-to-t from-[#fff0e9] to-[#eab196] opacity-[50%]"></div>
      </div>
    </div>
  );
};

export default Propertiex;
