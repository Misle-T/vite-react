import React from "react";
import { MessageSquare, Star } from "lucide-react";

interface ReviewButtonProps {
  isHovered: boolean;
}

const ReviewButton: React.FC<ReviewButtonProps> = ({ isHovered }) => {
  return (
    <div className="mt-4 relative">
      <button
        className={`
          w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 
          text-white py-3 px-4 rounded-md 
          transition-all duration-300 
          transform ${isHovered ? "scale-[1.03]" : "scale-100"} 
          shadow-lg ${isHovered ? "shadow-red-500/40" : "shadow-red-500/20"}
          flex items-center justify-center font-bold
          overflow-hidden
        `}
      >
        {/* Decorative stars */}
        <Star
          size={14}
          className={`absolute top-2 left-2 text-yellow-300 opacity-70 transition-all duration-300 ${
            isHovered ? "rotate-45" : "rotate-0"
          }`}
          fill="currentColor"
        />
        <Star
          size={10}
          className={`absolute bottom-2 left-6 text-yellow-300 opacity-50 transition-all duration-300 ${
            isHovered ? "rotate-90" : "rotate-0"
          }`}
          fill="currentColor"
        />
        <Star
          size={12}
          className={`absolute top-3 right-4 text-yellow-300 opacity-60 transition-all duration-300 ${
            isHovered ? "-rotate-45" : "rotate-0"
          }`}
          fill="currentColor"
        />

        {/* Button content */}
        <div
          className={`flex items-center transition-all duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          <MessageSquare size={18} className="mr-2" />
          <span>Add Your Review</span>
        </div>
      </button>
    </div>
  );
};

export default ReviewButton;
