import { FaSignOutAlt } from 'react-icons/fa';
import pic from '../assets/pic.jpg';

export default function Profile() {
  return (
    <div className="min-h-screen mt-24 bg-[#212121] flex flex-col items-center p-6 space-y-6">
      <h1 className="pb-2 text-3xl font-bold text-white tracking-[0.2em] text-center">PROFILE</h1>
      {/* Profile Image */}
      <img
        src={pic}
        alt="Profile"
        className="w-28 h-28 rounded-full border-4 border-gray-700 object-cover"
      />

      {/* Name and Email */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-white pb-2">Nicolas James</h2>
        <p className="text-sm text-gray-400 pb-4">nicola91@gmail.com</p>
      </div>

      {/* Info Table */}
      <div className="w-full max-w-sm space-y-2 text-gray-500 text-sm">
        <div className="flex justify-between pb-4 border-gray-600 py-1">
          <span>Mobile Number</span>
          <span className="text-gray-500 font-medium">+91 5326953265</span>
        </div>
        <div className="flex justify-between pb-4 border-gray-600 py-1">
          <span>Country</span>
          <span className="text-gray-500 font-medium">India</span>
        </div>
        <div className="flex justify-between pb-4 border-gray-600 py-1">
          <span>Subscriber Plan</span>
          <span className="text-gray-500 font-medium">Video Edit</span>
        </div>
        <div className="flex justify-between pb-4 border-gray-600 py-1">
          <span>Package Details</span>
          <span className="text-gray-500 font-medium">Basic</span>
        </div>
      </div>

      {/* Logout Button */}
      <button className="mt-4 bg-white text-[#212121] font-semibold px-6 py-2 rounded-full flex items-center gap-2">
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}
