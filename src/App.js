import Blogs from './pages/blogs/Blogs';
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import Properties from './pages/properties/Properties';
import { Route, Routes } from 'react-router-dom';
import House from './pages/properties/components/House';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/house/:id" element={<House />} />
      </Routes>
    </div>
  );
}

export default App;
