import React from 'react';
import Header from '../../../sharedComponents/Header';

import blogs from '../../../data/blogs.json';

const Blog = () => {
  console.log('🔥', blogs);

  return (
    <div className="blog bg-[#F5F1EF]">
      <div className="mx1200 mt-20 py-32">
        <div className="header flex justify-center">
          <Header num={'06'} text="Neighborhoods" />
        </div>
        <h1 className="font-kuf text-center text-main text-3xl font-bold py-2 mb-8">More than 50+ Brands Trusted World Wide</h1>
        <div className="blogs">
          {blogs &&
            blogs.blogs.map((blog) => {
              return (
                <div className="blog cursor-pointer max-w-[1000px] mx-auto mb-12 overflow-hidden">
                  <div style={{ background: `URL(${blog.image})` }} className="image bg-cover rounded-md shadow-md bg-center h-[350px] flex justify-center"></div>
                  <div className="py-8 flex gap-1 justify-center text-border text-[19px]">
                    <p>{blog.date}</p>
                    <p>{blog.state}</p>
                  </div>
                  <p className="title font-kuf text-4xl text-center w-[80%] mx-auto text-main"> {blog.title} </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
