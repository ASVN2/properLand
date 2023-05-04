import React from 'react';
import { useParams } from 'react-router-dom';
import dataHouses from '../../../data/house.json';
import Footer from '../../../sharedComponents/Footer';
import Navbar from '../../../sharedComponents/Navbar';
import Gallery from './Gallery';
import Info from './Info';
import Propertiex from './Properties';

const House = () => {
  const id = useParams();
  const houseData = dataHouses.houses[id.id - 1];

  return (
    <div>
      <Navbar image={''} title={''} background={houseData.picture} backgroundState={true} btnstate={false} headState={false} headtext={''} />
      <Info data={houseData} />
      <Gallery />
      <Propertiex />
      <Footer />
    </div>
  );
};

export default House;
