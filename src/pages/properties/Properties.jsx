import React from 'react';
import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import Neighborhoods from '../homepage/components/Neighborhoods';
import Propertiex from './components/Properties';

const properties = () => {
  return (
    <div>
      <Navbar image={'images/properties.png'} title={'properties'} btnstate={false} headState={true} headtext={'properties'} />
      <Propertiex />
      <Neighborhoods />
      <Footer />
    </div>
  );
};

export default properties;
