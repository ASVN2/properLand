import Footer from '../../sharedComponents/Footer';
import Navbar from '../../sharedComponents/Navbar';
import Aboutus from '../homepage/components/Aboutus';
import ExpertsAgents from './components/ExpertsAgents';

const Agents = () => {
  return (
    <div>
      <Navbar image={''} title={'PROPERTY EXPERTS'} background={'/images/AgentsBanner.png'} backgroundState={true} btnstate={false} headState={true} headtext={'Meet Our Agents'} />
      <ExpertsAgents />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default Agents;
