import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHome, FaCog, FaUser } from 'react-icons/fa';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState('/');

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/', icon: <FaHome /> },
    { label: 'Services', path: '/services', icon: <FaCog /> },
    { label: 'Profile', path: '/profile', icon: <FaUser /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around bg-[#212121] rounded-t-3xl shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)] py-2 z-50">
      {navItems.map((item) => {
        const isActive = value === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center text-sm tracking-[0.1em] font-bold px-10 py-1 rounded-full hover:cursor-pointer ${
              isActive ? 'bg-white text-white' : 'text-white'
            }`}
          >
            <div className={`text-xl ${isActive ? 'text-[#212121]' : 'text-white'}`}>
              {item.icon}
            </div>
            <span className={`mt-1 ${isActive ? 'text-[#212121]' : 'text-white'}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
