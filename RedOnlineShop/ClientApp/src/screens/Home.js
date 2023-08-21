import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { CustomFooter } from "../components/CustomFooter";
import { useNavigate } from "react-router-dom";
import { faqList } from "../constants/FAQ";

const Home = () => {
  const navigate = useNavigate();
  const [newProductList, getNewProductList] = useState([]);

  const getNewArrivals = useQuery({
    queryFn: async () => await axios.get("getNewProduct"),
    queryKey: ["getNewArrivals"],
    onSuccess: (res) => {
      console.log(res);
      getNewProductList(res);
    },
  });

  const Item = ({ item }) => {
    return (
      <div key={item.id} className="w-full shadow-md rounded-lg bg-white">
        <img
          src={`data:text/plain;base64,${item.image}`}
          alt="Front of men&#039;s Basic Tee in black."
          className="w-full rounded-t-lg"
        />
        <div className="p-4 flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <h5 className="text-lg truncate">{item.title}</h5>
            <h6 className="text-lg">&#8356;{item.price}</h6>
          </div>
          <h5 className="text-gray-400 truncate">{item.description}</h5>
          <button
            onClick={() =>
              navigate("/product-detail", { state: { id: item.id } })
            }
            className="w-full border !border-[#ff3333] text-[#ff3333] rounded-2xl py-1 mt-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  };

  const Accordion = ({ item }) => {
    const [active, setActive] = useState(false);
    return (
      <>
        <button
          onClick={() => setActive(!active)}
          className="accordion flex items-center justify-between"
        >
          <span className="flex flex-row items-center text-base font-medium">
            <i className="material-icons text-[#ff3333] mr-2">info_outline</i>
            {item.question}
          </span>
          <i className="fa fa-angle-down text-2xl"></i>
        </button>
        {active && (
          <div className="panel">
            <p className="py-4">{item.answer}</p>
          </div>
        )}
      </>
    );
  };
  return (
    <div>
      <section className="w-full">
        <div className="relative px-[10%] py-10 justify-center flex">
          <img
            className="rounded-xl w-full"
            src={require("../assets/cheerful-lady-standing-with-shopping-bags-smiling-looking-happy-pink-background.jpg")}
            alt="banner"
          />
          <div className="absolute right-[14%]">
            <h3 className="text-[5vw]">Shop Now and get</h3>
            <h1 className="text-[12vw]">20% off</h1>
            <h5 className="text-[4vw]">on your first purchese!</h5>
          </div>
        </div>
        <div className="flex flex-col items-center bg-red-50 py-20">
          <h1 className="text-4xl font-semibold">New Arrivals</h1>
          <span className="border-t-0.5 border-solid border-[#ff3333] w-[30%]"></span>
          <h5 className="text-2xl w-4/5 text-center my-4 text-gray-600">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </h5>
          <div className="w-4/5 mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {newProductList.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div id="features" className="flex flex-col items-center py-20">
          <h1 className="text-4xl font-semibold">Features</h1>
          <span className="border-t-0.5 border-solid border-[#ff3333] w-[30%]"></span>

          <div className="w-4/5 mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
            <div className="w-full">
              <div className="bg-[#ff3333] h-14 w-14 flex items-center justify-center rounded-xl mb-4">
                <i className="fa fa-mobile text-white text-[44px]"></i>
              </div>
              <h3 className="text-2xl font-semibold">Mobile App</h3>
              <p className="text-justify">
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="#" className="flex text-red-500 items-center">
                Discover More
                <i className="fa fa-angle-right ml-2 text-xl text-red-500 no-underline"></i>
              </a>
            </div>
            <div className="w-full">
              <div className="bg-[#ff3333] h-14 w-14 flex items-center justify-center rounded-xl mb-4">
                <i className="fa fa-truck text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold">Free Delivary</h3>
              <p className="text-justify">
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="#" className="flex text-red-500 items-center">
                Discover More
                <i className="fa fa-angle-right ml-2 text-xl text-red-500 no-underline"></i>
              </a>
            </div>
            <div className="w-full">
              <div className="bg-[#ff3333] h-14 w-14 flex items-center justify-center rounded-xl mb-4">
                <i className="fa fa-dollar text-white text-4xl"></i>
              </div>
              <h3 className="text-2xl font-semibold">Best Price</h3>
              <p className="text-justify">
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="#" className="flex text-red-500 items-center">
                Discover More
                <i className="fa fa-angle-right ml-2 text-xl text-red-500 no-underline"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-red-50 py-20">
          <h1 className="text-4xl font-semibold">FAQs</h1>
          <span className="border-t-0.5 border-solid border-[#ff3333] w-[30%]"></span>
          <div className="w-4/5 mt-8 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-1 xl:gap-x-8">
            {faqList.map((item) => (
              <Accordion item={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center py-20">
          <h1 className="text-4xl font-semibold text-center">
            Newsletter Subscription
          </h1>
          <span className="border-t-0.5 border-solid border-[#ff3333] w-[30%]"></span>
          <div className="w-4/5 mt-8 grid grid-cols-1 sm:grid-cols-1">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              odit error ut consectetur eos veniam blanditiis nemo quidem
              aperiam accusamus laboriosam, dolor tenetur dolores. Doloribus
              animi dolore incidunt illum illo.
            </p>
          </div>
          <div className="w-4/5 sm:w-4/5 lg:w-2/5 mt-6 grid sm:grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Entre your Email ..."
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 px-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
            <button className="rounded-md bg-[#FF3333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3333]">
              Submit
            </button>
          </div>
        </div>
      </section>
      <CustomFooter />
    </div>
  );
};

export { Home };
