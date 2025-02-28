import React from "react";
import { MapPin } from "lucide-react";

interface GymLocationProps {
  address: string;
  distance: string;
}

const GymLocation: React.FC<GymLocationProps> = ({ address, distance }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-gray-400">
        <MapPin size={16} className="mr-1 text-red-500" />
        <span className="text-sm">{address}</span>
      </div>
      <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded">
        {distance} away
      </span>
    </div>
  );
};

export default GymLocation;
