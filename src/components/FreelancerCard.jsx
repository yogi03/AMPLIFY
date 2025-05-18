import { FaCheckCircle } from "react-icons/fa";

export default function FreelancerCard({ avatar, title, description }) {
  return (
    <div className="mx-auto w-[250px] h-[300px] rounded-[30px] bg-[#212121] shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)] flex flex-col items-center justify-center text-white cursor-pointer p-8">
      {/* Profile Image */}
      <img
        src={avatar}
        alt="freelancer"
        className="w-20 h-20 rounded-full object-cover mb-2 border border-gray-500"
      />

      {/* Title */}
      <p className="font-bold text-xl">{title}</p>

      {/* Description */}
      <ul className="text-sm text-gray-300 space-y-2 pt-2">
        <li className="flex items-start gap-2">
          <FaCheckCircle className="text-white mt-0.5" size={14} />
          <span>{description}</span> 
        </li>
        </ul>
    </div>
  );
}
