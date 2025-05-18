import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Logo() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#212121] p-4 flex items-center justify-center shadow-md z-50">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10"
        />
        <span className="text-white text-4xl font-extrabold sm:tracking-[0.5em] tracking-[0.3em] ml-2">
          AMPLIFY
        </span>
      </Link>
    </div>
  );
}
