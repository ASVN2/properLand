import React from 'react';
import Footer from '../../sharedComponents/Footer';
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Brands from './components/Brands';
import Buying from './components/Buying';
import Featured from './components/Featured';
import Goals from './components/Goals';
import Neighborhoods from './components/Neighborhoods';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Why from './components/Why';
import Navbar from '../../sharedComponents/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar
        image={'images/Image.png'}
        title={'Find the perfect place to Live with your family'}
        disc={'Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate.'}
        btnstate={true}
        btntext={'Explore Property'}
        headState={true}
        headtext={'Real Estate Agency'}
      />
      <Buying />
      <Featured />
      <Why />
      <Aboutus />
      <Services />
      <Reviews />
      <Goals />
      <Neighborhoods />
      <Brands />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homepage;
