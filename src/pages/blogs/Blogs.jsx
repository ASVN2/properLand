import React from 'react';
import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import Brands from '../homepage/components/Brands';
import Blog from './components/Blog';
import Perblog from './components/Perblog';

const Blogs = () => {
  return (
    <div>
      <Navbar image={'/public/images/blog.png'} title={'ABOUT LAND'} btnstate={false} headState={true} headtext={'ABOUT LAND'} />
      <Perblog />
      <Blog />
      <Brands />
      <Footer />
    </div>
  );
};

export default Blogs;
