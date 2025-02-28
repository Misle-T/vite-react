import React, { useEffect, useState } from "react";
import HeroStats from "./HeroStats";
import SearchBar from "./SearchBar";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative mt-[90px] flex items-center bg-black min-h-[80vh] overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollY * 0.3}px)`, // Parallax Effect
        }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="flex flex-col items-center justify-center w-11/12 lg:w-7/10 mx-auto space-y-6 mt-28">
          {/* Hero Stats */}
          <div className="w-full flex justify-center">
            <HeroStats />
          </div>

          {/* Search Bar */}
          <div className="w-full flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
