import React, { useReducer } from "react";
import { formReducer, initialState } from "../../reducers/userReducer";
import { CreateAccountFormData, FormErrors } from "../../types/user";
import { InputField } from "../forms/InputField";
import { SelectField } from "../forms/SelectField";
import { PasswordField } from "../forms/PasswordField";
import { userService } from "../../services/user";
import { handleNetworkError } from "../../utils/networkErrorHandler";
import { useNotification } from "../../hooks/useNotification";
import { Notification } from "../ui/Notification";
import { Spinner } from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import SearchBar from "../hero/SearchBar";
import GymCard from "../gym-card/GymCard";
import AdBox from "../ad-box/AdBox";

export const SingleSearch: React.FC = () => {
  const gymData = [
    {
      name: "PowerFit Gym",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.7,
      reviewCount: 128,
      address: "123 Fitness Ave, New York",
      distance: "0.8 mi",
      features: ["24/7 Access", "Personal Training", "Cardio", "Free Weights"],
      hours: "Open 24 Hours",
      price: 49,
    },
    {
      name: "Iron Athletics",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.5,
      reviewCount: 96,
      address: "456 Muscle St, New York",
      distance: "1.2 mi",
      features: ["CrossFit", "Group Classes", "Sauna", "Protein Bar"],
      hours: "5:00 AM - 11:00 PM",
      price: 65,
    },
    {
      name: "Elite Fitness Center",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.9,
      reviewCount: 215,
      address: "789 Strength Blvd, New York",
      distance: "0.5 mi",
      features: ["Pool", "Basketball Court", "Yoga Studio", "Massage"],
      hours: "6:00 AM - 10:00 PM",
      price: 79,
    },
    {
      name: "Flex Zone",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.3,
      reviewCount: 87,
      address: "321 Pump Ave, New York",
      distance: "1.5 mi",
      features: [
        "Powerlifting",
        "Strongman Equipment",
        "Chalk Allowed",
        "24/7 Access",
      ],
      hours: "Open 24 Hours",
      price: 55,
    },
    {
      name: "Urban Fitness Studio",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.8,
      reviewCount: 156,
      address: "555 Downtown Rd, New York",
      distance: "0.3 mi",
      features: ["HIIT Classes", "Yoga", "Pilates", "Nutrition Coaching"],
      hours: "6:00 AM - 9:00 PM",
      price: 89,
    },
    {
      name: "Strength & Conditioning",
      image:
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.6,
      reviewCount: 112,
      address: "777 Athletic Dr, New York",
      distance: "1.0 mi",
      features: [
        "Olympic Lifting",
        "Sports Training",
        "Recovery Center",
        "Performance Testing",
      ],
      hours: "5:00 AM - 10:00 PM",
      price: 75,
    },
    {
      name: "Women's Fitness Club",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.9,
      reviewCount: 203,
      address: "888 Ladies Ln, New York",
      distance: "0.7 mi",
      features: ["Women Only", "Childcare", "Group Classes", "Spa Services"],
      hours: "6:00 AM - 9:00 PM",
      price: 69,
    },
    {
      name: "CrossFit Revolution",
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.7,
      reviewCount: 178,
      address: "999 Box Way, New York",
      distance: "1.8 mi",
      features: [
        "CrossFit",
        "Open Gym",
        "Mobility Classes",
        "Competition Training",
      ],
      hours: "5:30 AM - 8:30 PM",
      price: 125,
    },
    {
      name: "Budget Fitness",
      image:
        "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 3.9,
      reviewCount: 95,
      address: "111 Economy St, New York",
      distance: "2.2 mi",
      features: [
        "Basic Equipment",
        "Cardio Machines",
        "Low Cost",
        "No Contract",
      ],
      hours: "7:00 AM - 11:00 PM",
      price: 19,
    },
    {
      name: "Luxury Health Club",
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 5.0,
      reviewCount: 267,
      address: "222 Premium Blvd, New York",
      distance: "0.4 mi",
      features: [
        "Towel Service",
        "Sauna & Steam",
        "Rooftop Pool",
        "Executive Lounge",
      ],
      hours: "5:00 AM - 11:00 PM",
      price: 199,
    },
  ];

  return (
    <div>
      <div className="container">
        <NavBar />
      </div>
      <div>
        <div className="w-full flex justify-center mt-24">
          <SearchBar />
        </div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 border-b border-red-600 pb-4">
            Search Results...
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gymData.map((gym, index) => (
              <GymCard
                key={index}
                name={gym.name}
                image={gym.image}
                rating={gym.rating}
                reviewCount={gym.reviewCount}
                address={gym.address}
                distance={gym.distance}
                features={gym.features}
                hours={gym.hours}
                price={gym.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <AdBox
        title="Special Offer: 50% Off First Month"
        description="Join PowerFit today and get 50% off your first month's membership. Limited time offer!"
        imageUrl="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ctaText="Claim Offer Now"
        ctaLink="#"
      />
    </div>
  );
};
