import React from "react";
import { useLocation } from "react-router-dom";
import { CustomFooter } from "../components/CustomFooter";

const ProductDetail = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <section className="w-full flex flex-col items-center px-[10%]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 py-20 gap-2">
          <div className="p-4">
            <img
              src={`data:text/plain;base64,${location.state.item.image}`}
              alt="about-us"
            />
          </div>
          <div className="p-8">
            <h3 className="text-3xl mb-4">{location.state.item.title}</h3>
            <h3 className="text-xl text-gray-400 mb-2">
              {location.state.item.description}
            </h3>
            <h3 className="text-lg text-gray-400 mb-4">
              {location.state.item.brand}
            </h3>
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              &#8356;{location.state.item.price}
            </p>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export { ProductDetail };
