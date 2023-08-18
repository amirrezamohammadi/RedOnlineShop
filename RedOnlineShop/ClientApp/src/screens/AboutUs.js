import React from "react";
import { CustomFooter } from "../components/CustomFooter";

const AboutUs = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center px-[10%]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 py-20 gap-2">
          <div>
            <img
              src={require("../assets/6183551_3053975.jpg")}
              alt="about-us"
            />
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold border-b-2 border-[#ff3333] mb-4">
              About Us
            </h3>
            <p className="text-justify text-lg">
              The Red Shop is an enchanting inline store that ignites your
              senses with its vibrant and captivating ambiance. Step into a
              world of crimson hues and discover a curated collection of
              products that celebrate the color red in all its glory. From
              fashion accessories to home decor, each item has been thoughtfully
              selected to showcase the power and passion associated with this
              iconic shade. Whether you're searching for a bold statement piece
              or a unique gift, the Red Shop promises an extraordinary shopping
              experience that is sure to leave you feeling inspired and
              captivated by the allure of red.
            </p>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export { AboutUs };
