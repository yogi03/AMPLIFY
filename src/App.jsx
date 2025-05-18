import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Logo from './components/Logo';
import Services from './pages/Services';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#212121] roboto">
        <Logo />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <Navbar />
      </div>
      
    </Router>
  );
}
