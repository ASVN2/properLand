import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import Brands from '../homepage/components/Brands';
import Goals from '../homepage/components/Goals';
import Reviews from '../homepage/components/Reviews';
import Experts from './components/Experts';
import LearnMore from './components/LearnMore';
import Process from './components/Process';
import VIntro from './components/VIntro';

const About = () => {
  return (
    <div>
      <Navbar image={'images/about.png'} title={'About Our Real Estate'} btnstate={false} btntext={'Explore Property'} headState={true} headtext={'ABOUT PROPERLAND'} />
      <VIntro />
      <Process />
      <Reviews />
      <LearnMore />
      <div className="goals bg-yellow-400">
        <Goals />
      </div>
      <Experts />
      <Brands />
      <Footer />
    </div>
  );
};

export default About;
