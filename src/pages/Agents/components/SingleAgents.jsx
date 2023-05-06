import { AgentsGoal } from './AgentsGoal';
import Navbar from './NavbarAgents';
import Featured from '../../homepage/components/Featured';
import Footer from '../../../sharedComponents/Footer';
import data from '../../../data/agents.json';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SingleAgents = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const id = useParams();
  const single = data.data[id.id - 1];
  console.log('id', single);

  return (
    <div>
      <Navbar
        headtext={'SELLING AGENT'}
        name={single.name}
        disc={
          'Distinctively re-engineer revolutionary meta-services and premium At vero eos et accusamus et iusto Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        phone={'+1 735 8237 234'}
        email={'Email@fackes.com'}
      />
      <AgentsGoal image={single.image} />
      <div className="featured mt-32">
        <Featured />
      </div>
      <Footer />
    </div>
  );
};

export default SingleAgents;
