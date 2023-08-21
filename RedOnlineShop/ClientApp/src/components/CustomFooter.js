import React from "react";
import { Link } from "react-router-dom";

const CustomFooter = () => {
  return (
    <footer className="bg-gray-800 flex flex-col items-center pt-10">
      <div className="w-4/5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div>
          <Link to="/">
            <img
              className="w-20"
              src={require("../assets/RedLogo.png")}
              alt="Logo"
            />
          </Link>
          <p className="text-justify text-white mt-4 mr-6">
            The Red Shop is an enchanting inline store that ignites your senses
            with its vibrant and captivating ambiance.
          </p>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-4">Links</h4>
          <ul className="flex flex-col">
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/product" className="text-white">
                Products
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/#features" className="text-white">
                Features
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/about-us" className="text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/contact-us" className="text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-4">Our Products</h4>
          <ul className="flex flex-col">
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/product" className="text-white">
                Men
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/product" className="text-white">
                Women
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/product" className="text-white">
                Kids
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/product" className="text-white">
                Discount
              </Link>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i>
              <Link to="/product" className="text-white">
                Club
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <ul className="flex gap-x-2">
            <li className="nav-item">
              <Link to="https://www.twitter.com" target="_blank">
                <i className="fa fa-twitter text-lg text-white mr-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.facebook.com" target="_blank">
                <i className="fa fa-facebook text-lg text-white mr-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.instagram.com" target="_blank">
                <i className="fa fa-instagram text-lg text-white mr-2"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.linkedin.com" target="_blank">
                <i className="fa fa-linkedin text-lg text-white mr-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-white mt-5 border-t w-4/5 text-center py-4">
        &copy; Red Shop - 2023
      </h1>
    </footer>
  );
};

export { CustomFooter };
