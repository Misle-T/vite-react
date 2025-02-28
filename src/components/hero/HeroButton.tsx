import React from "react";

interface HeroButtonProps {
  text: string;
  primary?: boolean;
  onClick?: () => void;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  text,
  primary = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-md font-semibold text-sm transition-all duration-300 ${
        primary
          ? "bg-red-600 hover:bg-red-700 text-white"
          : "bg-transparent border-2 border-gray-600 text-gray-300 hover:border-red-600 hover:text-red-500"
      }`}
    >
      {text}
    </button>
  );
};

export default HeroButton;
