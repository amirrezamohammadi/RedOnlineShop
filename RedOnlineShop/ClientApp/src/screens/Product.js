import React from 'react'
import { CustomFooter } from '../components/CustomFooter'

 const Product = () => {  return (
    <div>
      <section className="w-full flex flex-col items-center py-20">
    <div className="flex flex-col items-center px-10">
      <h1 className="font-bold text-4xl">Products</h1>
      <span className="border-t-0.5  border-solid border-[#ff3333] w-[30%]"></span>
      <div
        id="category-section"
        className="py-6 flex flex-wrap justify-center gap-2"
      >
        <a href="#" className="category active-category"><h3>All</h3></a>
        <a href="#" className="category"><h3>Men</h3></a>
        <a href="#" className="category"><h3>Women</h3></a>
        <a href="#" className="category"><h3>Kids</h3></a>
        <a href="#" className="category"><h3>Discount</h3></a>
      </div>
    </div>
    <div
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <div
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={require("../assets/men/s1.webp")}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Nike</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                &#8356; 100
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; 130
                </p>
              </del>
              <div className="ml-auto">
                <i
                  className="fa fa-shopping-bag text-lg text-[#333]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={require("../assets/men/s2.webp")}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Nike</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                &#8356; 100
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; 130
                </p>
              </del>
              <div className="ml-auto">
                <i
                  className="fa fa-shopping-bag text-lg text-[#333]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={require("../assets/men/s3.webp")}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Nike</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                &#8356; 100
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; 130
                </p>
              </del>
              <div className="ml-auto">
                <i
                  className="fa fa-shopping-bag text-lg text-[#333]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={require("../assets/men/t1.webp")}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Nike</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                &#8356; 100
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; 130
                </p>
              </del>
              <div className="ml-auto">
                <i
                  className="fa fa-shopping-bag text-lg text-[#333]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={require("../assets/men/t2.webp")}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Nike</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                &#8356; 100
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; 130
                </p>
              </del>
              <div className="ml-auto">
                <i
                  className="fa fa-shopping-bag text-lg text-[#333]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
      >
        <a href="#">
          <img
            src={require("../assets/men/t3.webp")}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">Nike</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                &#8356; 100
              </p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; 130
                </p>
              </del>
              <div className="ml-auto">
                <i
                  className="fa fa-shopping-bag text-lg text-[#333]"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
      </section>
      <CustomFooter/>
    </div>
  )
}

export {Product}