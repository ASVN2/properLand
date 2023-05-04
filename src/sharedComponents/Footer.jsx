import { FaFacebookSquare, FaTwitterSquare, FaYoutube, FaLinkedin, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative">
      <div className="holder mx1200 pt-20 ">
        <img src="/images/Pattern.png" alt="Pattern.png" className=" absolute left-0 top-[30px] max-w-[50%]" />
        <div className="row border-t flex-col md:flex-row lg:flex-row xl:flex-row flex border-b border-gray-400">
          <div className="col pt-20 flex-1 border-transparent md:border-gray-400 lg:border-gray-400 xl:border-gray-400  p-4 border-r ">
            <img src="/images/Logo.svg" className="mb-8" alt="Logo.svg" />
            <div className="media flex gap-4">
              <FaFacebookSquare className="text-2xl text-main" />
              <FaTwitterSquare className="text-2xl text-main" />
              <FaLinkedin className="text-2xl text-main" />
              <FaInstagram className="text-2xl text-main" />
              <FaYoutube className="text-2xl text-main" />
            </div>
          </div>
          <div className="col pt-20 flex-[2]  md:pl-12 lg:pl-12 xl:pl-12 p-4">
            <form>
              <h1 className="text-4xl text-main">Get a free estimate</h1>
              <p className="text-border py-4">
                Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition. Organically grow the holistic world view of
                disruptive.
              </p>
              <div className="form flex gap-4 flex-wrap">
                <input type="email" className="outline-none   border border-gray-400 p-2" placeholder="Your Email Here" />
                <input type="submit" className="bg-main text-white cursor-pointer p-2 px-4" value="Subscribe Now" />
              </div>
            </form>
          </div>
        </div>

        <div className="row flex-col md:flex-row lg:flex-row xl:flex-row flex border-b border-gray-400">
          <div className="col justify-around flex-wrap p-10 flex-[2] col-links flex gap-4">
            <div className="col-1">
              <h1 className="text-xl text-main mb-3 font-semibold">Company</h1>
              <Link to={'/'} className="text-border block">
                About
              </Link>
              <Link to={'/'} className="text-border block">
                Blog
              </Link>
              <Link to={'/'} className="text-border block">
                Properties
              </Link>
              <Link to={'/'} className="text-border block">
                Agents
              </Link>
              <Link to={'/'} className="text-border block">
                Services
              </Link>
              <Link to={'/'} className="text-border block">
                Contact us
              </Link>
            </div>

            <div className="col-2">
              <h1 className="text-xl text-main mb-3 font-semibold">Services</h1>
              <Link to={'/'} className="text-border block">
                Rend A Home
              </Link>
              <Link to={'/'} className="text-border block">
                Sell A Home
              </Link>
              <Link to={'/'} className="text-border block">
                Buy A Home
              </Link>
              <Link to={'/'} className="text-border block">
                Property Insurance
              </Link>
              <Link to={'/'} className="text-border block">
                Member Support
              </Link>
              <Link to={'/'} className="text-border block">
                Experience Agent
              </Link>
            </div>

            <div className="col-2">
              <h1 className="text-xl text-main mb-3 font-semibold">Uitility pages</h1>
              <Link to={'/'} className="text-border block">
                Style Guide
              </Link>
              <Link to={'/'} className="text-border block">
                Licenses
              </Link>
              <Link to={'/'} className="text-border block">
                Changelog
              </Link>
              <Link to={'/'} className="text-border block">
                Password
              </Link>
              <Link to={'/'} className="text-border block">
                Not found
              </Link>
              <Link to={'/'} className="text-border block">
                More Template
              </Link>
            </div>
          </div>

          <div className="col holder  flex-[1] flex place-items-center mb-4 border-transparent md:border-gray-400 lg:border-gray-400 xl:border-gray-400 border-l pl-6">
            <div className="col w-fit p-8  bg-yellow-500 rounded-md">
              <div className="contact">
                <p className="flex gap-2">
                  {' '}
                  <FaMapMarkerAlt /> 329 Queensberry Street,
                </p>
                <p className="ml-5"> North Melbourne VIC 3051, Australia.</p>
                <p className="flex gap-2">
                  <MdCall /> 123 456 7890
                </p>
                <p className="flex gap-2">
                  {' '}
                  <MdEmail /> support@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center py-4">
          Copyright © Properland | Designed by{' '}
          <Link className="text-border font-bold " to={'/'}>
            A72
          </Link>{' '}
          - Powered by{' '}
          <Link className="text-border font-bold " to={'/'}>
            A72
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Footer;
