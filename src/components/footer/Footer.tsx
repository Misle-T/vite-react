import React from "react";
import {
  Dumbbell,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-8  mb-36">
      <div className="container mx-auto px-4 py-12 border-t border-gray-700 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-2xl font-bold">Gym Finder</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming lives through fitness since 2010. Join our community
              and achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2 inline-block">
              For Members
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Account Sign Up
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Book Classes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Membership Options
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Training Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Nutrition Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2 inline-block">
              For Trainers
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Trainer Log In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Promote Your Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Claim Your Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  News and Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-red-600 pb-2 inline-block">
              Our Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gym Finder. All rights reserved.
            </p>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-gray-300">info@gym-finder.com</span>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
