import React from "react";
import { Dumbbell } from "lucide-react";

interface GymFeaturesProps {
  features: string[];
}

const GymFeatures: React.FC<GymFeaturesProps> = ({ features }) => {
  return (
    <div className="mt-3">
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-md flex items-center"
          >
            <Dumbbell size={12} className="mr-1 text-red-500" />
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GymFeatures;
