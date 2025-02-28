import React, { useState } from "react";
import { X } from "lucide-react";

interface AdBoxProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const AdBox: React.FC<AdBoxProps> = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeAd = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full h-[120px] bg-white shadow-lg flex items-center justify-between px-6">
      <div className="flex items-center h-full">
        <div
          className="bg-navy-900 h-full px-4 flex items-center justify-center rotate-180"
          style={{ writingMode: "vertical-lr" }}
        >
          <span className="text-black font-bold tracking-wider text-xs">
            ADVERTISEMENT
          </span>
        </div>

        <div className="flex items-center ml-4">
          <img
            src={imageUrl}
            alt={title}
            className="h-16 w-16 object-cover rounded"
          />
          <div className="ml-4">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href={ctaLink}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors font-semibold"
        >
          {ctaText}
        </a>

        <button
          onClick={closeAd}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close advertisement"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AdBox;
