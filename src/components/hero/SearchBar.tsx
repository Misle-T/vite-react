import React, { useState } from "react";
import { Search, MapPin, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for gyms in:", location, "Zip code:", zipCode);

    // Navigate to the SingleSearch page and pass search parameters as state
    navigate("/single-search", { state: { location, zipCode } });
  };

  const clearLocation = () => setLocation("");
  const clearZipCode = () => setZipCode("");

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">
          Find Your Perfect Gym
        </h2>

        <form onSubmit={handleSearch} className="w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or neighborhood"
                className="block w-full pl-10 pr-10 py-3 bg-black bg-opacity-70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              {location && (
                <button
                  type="button"
                  onClick={clearLocation}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>

            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">#</span>
              </div>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip code"
                className="block w-full pl-10 pr-10 py-3 bg-black bg-opacity-70 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              {zipCode && (
                <button
                  type="button"
                  onClick={clearZipCode}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              <Search className="h-5 w-5 mr-2" />
              <span>Search</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            {[
              "Strength Training",
              "Cardio",
              "CrossFit",
              "Yoga",
              "Personal Training",
            ].map((category) => (
              <button
                key={category}
                type="button"
                className="px-4 py-1 text-sm bg-transparent border border-gray-700 rounded-full text-gray-300 hover:border-red-600 hover:text-red-500 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
