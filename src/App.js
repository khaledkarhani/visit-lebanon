
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Cuisine from './pages/Cuisine';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
     
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;