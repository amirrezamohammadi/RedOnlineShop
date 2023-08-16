import React from 'react'

const CustomFooter = () => {
  return (
    <footer className="bg-gray-800 flex flex-col items-center pt-10">
      <div
        className="w-4/5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div>
          <a href="#">
            <img className="w-20" src={require("../assets/RedLogo.png")} alt="" />
          </a>
          <p className="text-justify text-white mt-4 mr-6">
            The Red Shop is an enchanting inline store that ignites your senses
            with its vibrant and captivating ambiance.
          </p>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-4">Links</h4>
          <ul className="flex flex-col">
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Home</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Products</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#features" className="underline">Features</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">About Us</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-4">Our Products</h4>
          <ul className="flex flex-col">
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Men</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Women</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Kids</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Discount</a>
            </li>
            <li className="nav-item mb-2">
              <i className="fa fa-chevron-right text-xs mr-2"></i
              ><a href="#" className="underline">Club</a>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <ul className="flex gap-x-2">
            <li className="nav-item">
              <a href="https://www.twitter.com" target="_blank"
                ><i className="fa fa-twitter text-lg mr-2"></i
              ></a>
            </li>
            <li className="nav-item">
              <a href="https://www.facebook.com" target="_blank"
                ><i className="fa fa-facebook text-lg mr-2"></i
              ></a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com" target="_blank"
                ><i className="fa fa-instagram text-lg mr-2"></i
              ></a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com" target="_blank"
                ><i className="fa fa-linkedin text-lg mr-2"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-white mt-5 border-t w-4/5 text-center py-4">
        &copy; Red Shop - 2023
      </h1>
    </footer>
  )
}

export {CustomFooter}