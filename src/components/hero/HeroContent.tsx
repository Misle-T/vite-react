import React from "react";
import HeroButton from "./HeroButton";

const HeroContent: React.FC = () => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white leading-tight">
        Transform Your Body,{" "}
        <span className="text-red-600">Transform Your Life</span>
      </h1>
      <p className="text-gray-300 text-lg mb-8">
        Join the ultimate fitness experience with state-of-the-art equipment,
        expert trainers, and a community that pushes you to be your best self.
      </p>
      <div className="flex flex-wrap gap-4">
        <HeroButton text="START YOUR JOURNEY" primary />
        <HeroButton text="EXPLORE MEMBERSHIPS" />
      </div>
    </div>
  );
};

export default HeroContent;
