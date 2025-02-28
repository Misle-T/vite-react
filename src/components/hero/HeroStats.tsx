import React from "react";
import { Users, Award, MapPin } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-red-500 mb-2">{icon}</div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
};

const HeroStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-6 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg border border-gray-800">
      <StatItem
        icon={<Users size={24} />}
        value="500+"
        label="Fitness Seekers Connected"
      />
      <StatItem
        icon={<Award size={24} />}
        value="20+"
        label="Top Trainers in Miami"
      />
      <StatItem
        icon={<MapPin size={24} />}
        value="50+"
        label="Gyms Across Miami"
      />
    </div>
  );
};

export default HeroStats;
