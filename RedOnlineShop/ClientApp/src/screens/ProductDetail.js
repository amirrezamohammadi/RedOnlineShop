import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomFooter } from "../components/CustomFooter";

const clothingSize = ["XS", "S", "M", "L", "XL", "XXL"];
const shoeSize = [
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "13",
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sizes] = useState(
    location.state.item.isShoes === true ? shoeSize : clothingSize
  );
  const [activeSize, setActiveSize] = useState(
    location.state.item.isShoes === true ? shoeSize[0] : clothingSize[0]
  );
  console.log(location.state);
  const SizeItem = ({ item }) => {
    return (
      <span
        key={item}
        onClick={() => setActiveSize(item)}
        className={`flex h-14 flex-grow border border-1 border-gray-200 rounded-md justify-center items-center hover:!border-black hover:cursor-pointer ${
          activeSize === item && "!border-black"
        }`}
      >
        <span key={item} className="text-base">
          {item}
        </span>
      </span>
    );
  };

  return (
    <>
      <section
        id="#detail"
        className="w-full flex flex-col items-center px-[10%]"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 py-20 gap-2">
          <div className="p-4 border-[#ff3333] md:border-r-2 md:!border-b-0 border-b-2">
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
            <span className="flex justify-between mb-2">
              <h3 className="text-base font-semibold">Select Size</h3>
              <Link
                target="_blank"
                to={"https://www.nike.com/gb/size-fit/mens-tops-alpha"}
              >
                Size Guide
              </Link>
            </span>
            <div className="grid gap-2 grid-cols-3">
              {sizes.map((item) => (
                <SizeItem key={item} item={item} />
              ))}
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
                var obj;
                var cart = JSON.parse(localStorage.getItem("cart"));
                if (cart === null) {
                  cart = JSON.parse(localStorage.setItem("cart", "[]"));
                }
                obj = {
                  id: location.state.item.id,
                  title: location.state.item.title,
                  image: location.state.item.image,
                  price: location.state.item.newPrice
                    ? location.state.item.newPrice
                    : location.state.item.price,
                  amount: 1,
                  size: activeSize,
                };
                var index = cart.findIndex(
                  (i) => i.id === obj.id && i.size === activeSize
                );
                if (index !== -1) {
                  cart[index].amount = cart[index].amount + 1;
                  localStorage.setItem("cart", JSON.stringify(cart));
                } else {
                  cart.push(obj);
                  localStorage.setItem("cart", JSON.stringify(cart));
                }

                navigate("/shopping-cart");
              }}
              className="group w-full h-12 border !border-[#ff3333] text-[#ff3333] hover:bg-[#ff3333] hover:text-white rounded-full py-1 my-4"
            >
              Add to Bag
              <i
                className="fa fa-plus text-sm text-[#ff3333] ml-2 group-hover:text-white"
                aria-hidden="true"
              ></i>
            </button>
            <p className="text-justify bg-gray-100 p-4">
              This product is made from at least 50% sustainable materials,
              using a blend of both recycled polyester and organic cotton
              fibres. The blend is at least 10% recycled fibres or at least 10%
              organic cotton fibres.
            </p>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export { ProductDetail };
