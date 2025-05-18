import { FaCheckCircle } from "react-icons/fa";

export default function ServiceCard({ title, description, image, deliverables }) {

  return (
    <div className="mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg h-[500px] rounded-[30px] bg-[#212121] shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)] flex flex-col text-white p-6 cursor-pointer">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-2 text-center">{title}</h1>

      {/* Image */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            className="w-full h-60 object-cover rounded-[20px]"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-gray-300 mb-2">{description}</p>
      
      {/* Deliverables */}
      <ul className="text-sm text-gray-200 space-y-2">
        {deliverables.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <FaCheckCircle className="text-white mt-0.5" size={14} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
