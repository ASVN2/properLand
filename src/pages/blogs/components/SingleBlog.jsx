import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../../../data/blogs.json';
import Navbar from '../../../sharedComponents/Navbar';
import MoreInfo from './MoreInfo';

const SingleBlog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  const { id } = useParams();

  return (
    <div>
      <Navbar headtext={'November 05, 2021  |   Architecture'} headState={true} title={'Here’s how to decorate your new home from scratch'} />
      <MoreInfo image={blogs.blogs[id - 1].image} blogs={blogs} />
    </div>
  );
};

export default SingleBlog;
