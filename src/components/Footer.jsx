import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  About Amazon
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Press Releases
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Amazon Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Sell products on Amazon
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Sell apps on Amazon
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Advertise Your Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Amazon Payment Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Amazon Payment Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Amazon Business Card
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Shop with Points
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Reload Your Balance
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Amazon Currency Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Amazon and COVID-19
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Your Account
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Your Orders
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl font-bold text-orange-400">Amazon</span>
              <span className="text-sm">.clone</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="#" className="hover:text-orange-400 transition-colors">
                Conditions of Use
              </Link>
              <Link to="#" className="hover:text-orange-400 transition-colors">
                Privacy Notice
              </Link>
              <Link to="#" className="hover:text-orange-400 transition-colors">
                Interest-Based Ads
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-gray-400 mt-4">
            © 2024 Amazon Clone. Built with React and Node.js
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
