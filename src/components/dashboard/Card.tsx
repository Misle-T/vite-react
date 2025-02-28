import React, { useState } from "react";
import { NavBar } from "./../navbar/NavBar";
import Footer from "../ui/Footer";
import "./card.css";

export const Card: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const gymInfo = {
    name: "PowerFit Gym",
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
    phone: "(207) 760-7216",
  };

  return (
    <div>
      <NavBar />
      <section className="relative mt-[90px] flex items-center bg-black min-h-[80vh]">
        {/* Background overlay with gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="cardContainer relative z-10 flex justify-center w-full">
          <div className="cardcontent-container w-full max-w-4xl mx-auto p-4">
            <div className="cardprofile flex justify-evenly">
              <div className="cardprofile-info">
                <h2>{gymInfo.name}</h2>
                <p>Open 24 Hours</p>
                <div className="cardratings">
                  ⭐ ⭐ ⭐ ⭐ ⭐ ({gymInfo.reviewCount} ratings){" "}
                  <a href="#">Leave a review</a>
                </div>
              </div>
              {/* Replace with an actual image or placeholder */}
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Gym profile"
                className="rounded-full"
              />
            </div>
            <div className="cardcontact">
              <p>GYM Location:</p>
              <p>{gymInfo.address}</p>
              <p>Distance: {gymInfo.distance}</p>
              <p>
                <a href={`tel:+1${gymInfo.phone.replace(/\D/g, "")}`}>
                  {gymInfo.phone}
                </a>
              </p>
            </div>
            <div className="cardtabs">
              {[
                "Overview",
                "Experience",
                "Insurance",
                "Ratings",
                "About GYM",
                "Locations",
              ].map((tab) => (
                <a
                  href="#"
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </a>
              ))}
            </div>

            <div className="cardcontent">
              {activeTab === "Overview" && (
                <div>
                  <h3>Features:</h3>
                  <ul>
                    {gymInfo.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p>Hours: {gymInfo.hours}</p>
                  <p>Price: ${gymInfo.price}</p>
                </div>
              )}
              {activeTab === "Experience" && <div>Experience details...</div>}
              {activeTab === "Insurance" && <div>Insurance information...</div>}
              {activeTab === "Ratings" && <div>Ratings and reviews...</div>}
              {activeTab === "About GYM" && <div>About the GYM...</div>}
              {activeTab === "Locations" && <div>Location details...</div>}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
