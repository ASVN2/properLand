import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Footer from '../../../sharedComponents/Footer';

const MoreInfo = ({ image, blogs }) => {
  return (
    <div className=" pt-32">
      <div className="holder mx1200">
        <div className="image flex justify-center mb-20">
          <img className=" relative w-full rounded-md shadow-md top-[-50%]" src={`/${image}`} alt={image} />
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h1 className="text-main text-xl font-kuf py-4">Perfect Property For Building</h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="text-gray-600 mb-4">
          Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti Mauris commodo quis imperdiet
          massa tincidunt nunc pulvinar Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
        </p>
        <p className="text-white rounded-md bg-main p-20 text-center text-2xl">
          “Democracy must be built through open societies that share information. When there is information, there is enlightenment. When there is no sharing of power, no rule of
          law, no accountability, there is abuse, corruption and indignation.”
        </p>
        <h1 className="text-main text-xl font-kuf py-4">Setting the mood with incense</h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600 mb-4">
          Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti Mauris commodo quis imperdiet
          massa tincidunt nunc pulvinar Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
        </p>
      </div>

      <div className="me bg-yellow-400 py-10 ">
        <div className="holder mx1200 flex gap-10 place-items-center  ">
          <div className="image">
            <img src="/images/avatar03.png" className=" rounded-md" alt="avatar03.png" />
          </div>
          <div className="info w-full">
            <div className="hold flex justify-between w-full">
              <div className="name text-main font-kuf text-xl">Deborah Roderick</div>
              <div className="media flex gap-2 text-xl">
                <BsFacebook />
                <AiFillInstagram />
                <AiOutlineTwitter />
                <BsYoutube />
              </div>
            </div>
            <p className="text-white text-xl">Vloger</p>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        </div>
      </div>

      <div className="lastBlogs mt-32">
        {blogs &&
          blogs.blogs.slice(0, 2).map((blog) => {
            return (
              <div className="blog cursor-pointer max-w-[1000px] mx-auto mb-12 overflow-hidden">
                <div style={{ background: `URL(/${blog.image})` }} className="image bg-cover rounded-md shadow-md bg-center h-[350px] flex justify-center"></div>
                <div className="py-8 flex gap-1 justify-center text-border text-[19px]">
                  <p>{blog.date}</p>
                  <p>{blog.state}</p>
                </div>
                <p className="title font-kuf text-4xl text-center w-[80%] mx-auto text-main"> {blog.title} </p>
              </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
};

export default MoreInfo;
