import React, { useState } from "react";
import { MapPin, Star, Clock, Dumbbell, MessageSquare } from "lucide-react";
import { GymCardProps } from "./../../types/gym";
import GymRating from "./GymRating";
import GymFeatures from "./GymFeatures";
import GymLocation from "./GymLocation";
import ReviewButton from "./ReviewButton";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleClick = () => {
  navigate("/Card"); // Replace with your desired route
};

const GymCard: React.FC<GymCardProps> = ({
  name,
  image,
  rating,
  reviewCount,
  address,
  distance,
  features,
  hours,
  price,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-black border border-red-600 rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 m-2 rounded-md text-sm font-bold">
          ${price}/mo
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <GymRating rating={rating} reviewCount={reviewCount} />
        </div>

        <GymLocation address={address} distance={distance} />

        <div className="flex items-center text-gray-400 mt-2 mb-3">
          <Clock size={16} className="mr-1" />
          <span className="text-sm">{hours}</span>
        </div>

        <GymFeatures features={features} />

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handleClick}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium"
          >
            View Details
          </button>
          <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium">
            Book Now
          </button>
        </div>

        <ReviewButton isHovered={isHovered} />
      </div>
    </div>
  );
};

export default GymCard;
