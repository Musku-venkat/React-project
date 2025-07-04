import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MatchDetails from './pages/MatchDetails';
import Schedule from './pages/Schedule';
import News from './pages/News';
import About from './pages/About';
import Spiner from './components/Spiner';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="m-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <Spiner/>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
