import React from "react";
import { Star } from "lucide-react";

interface GymRatingProps {
  rating: number;
  reviewCount: number;
}

const GymRating: React.FC<GymRatingProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center mr-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < Math.floor(rating)
                ? "text-red-500 fill-red-500"
                : i < rating
                ? "text-red-500 fill-red-500 opacity-50"
                : "text-gray-400"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-400">({reviewCount})</span>
    </div>
  );
};

export default GymRating;
