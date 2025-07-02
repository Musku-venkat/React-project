import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MatchDetails from './pages/MatchDetails';
import Schedule from './pages/Schedule';
import News from './pages/News';
import Spiner from './components/Spiner';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='d-flex justify-content-center mt-2'>
        <Spiner/>
      </div>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
