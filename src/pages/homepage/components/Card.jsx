import { GrMapLocation } from 'react-icons/gr';
import { BiRuler, BiBed, BiCar, BiBath } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Card = ({ dataHouses }) => {
  return dataHouses.houses.map((house) => {
    return (
      <Link to={`/properties/house/${house.id}`} className="house relative z-20 bg-white p-6">
        <div
          style={{
            backgroundImage: `URL(${house.picture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="image  h-[300px] bg-red-500 mb-4"></div>
        <div className="price flex justify-between place-items-center">
          <p className="text-xl text-yellow-400 font-bold">{house.price}</p>
          <button className="bg-yellow-400 text-main p-2 px-4 font-semibold rounded-md">For sale</button>
        </div>
        <h1 className="text-main text-2xl font-bold font-kuf">{house.title}</h1>
        <p className="mt-4 flex gap-4 place-items-center text-gray-500">
          <GrMapLocation className="text-red-400" />
          {house.location.country} • {house.location.city} • {house.location.state}
        </p>
        <div className="flex gap-4 mt-4">
          <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500   px-2 rounded-sm w-fit">
            <BiBed className="text-main" />
            {house.bathrooms}
          </p>
          <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500   px-2 rounded-sm w-fit">
            <BiBath className="text-main" />
            {house.beds}
          </p>
          <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500   px-2 rounded-sm w-fit">
            <BiCar className="text-main" />
            {house.parks}
          </p>
          <p className="flex gap-2 place-items-center border-2 border-gray-300 text-gray-500  px-2 rounded-sm w-fit">
            <BiRuler className="text-main" />
            {house.size}
          </p>
        </div>
      </Link>
    );
  });
};

export default Card;
