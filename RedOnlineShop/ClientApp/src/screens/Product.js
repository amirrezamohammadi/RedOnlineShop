import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { CustomFooter } from "../components/CustomFooter";

const Product = () => {
  const [productList, setProductList] = useState([]);
  const [active, setActive] = useState("All");

  const navigate = useNavigate();

  const getAllProduct = useQuery({
    queryFn: async () =>
      active === "All"
        ? await axios.get("getAllProduct")
        : active === "Men"
        ? await axios.get("getAllProduct/1")
        : active === "Women"
        ? await axios.get("getAllProduct/2")
        : active === "Kids"
        ? await axios.get("getAllProduct/3")
        : await axios.get("getDiscountProduct"),
    queryKey: ["getAllProduct", active],
    onSuccess: (res) => {
      console.log(res);
      setProductList(res);
    },
  });
  const onClickCategory = (category) => {
    setActive(category);
  };
  const ProductItem = ({ item }) => {
    return (
      <div
        onClick={(event) => {
          event.preventDefault();
          navigate("/product-detail/#detail", { state: { id: item.id } });
        }}
        className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:cursor-pointer"
      >
        <img
          src={`data:text/plain;base64,${item.image}`}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {item.brand}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {item.title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              &#8356;{item.newPrice ? item.newPrice : item.price}
            </p>
            {item.newPrice ? (
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">
                  &#8356; {item.price}
                </p>
              </del>
            ) : null}
            <div className="ml-auto">
              <i
                className="fa fa-shopping-bag text-lg text-[#333]"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section className="w-full flex flex-col items-center py-20">
        <div className="flex flex-col items-center px-10">
          <h1 className="font-bold text-4xl">Products</h1>
          <span className="!border-t-0.5  !border-solid !border-[#ff3333] !w-[30%]"></span>
          <div
            id="category-section"
            className="py-6 flex flex-wrap justify-center gap-2"
          >
            <span
              onClick={() => onClickCategory("All")}
              className={`category ${active === "All" && "active-category"}`}
            >
              <h3>All</h3>
            </span>
            <span
              onClick={() => onClickCategory("Men")}
              className={`category ${active === "Men" && "active-category"}`}
            >
              <h3>Men</h3>
            </span>
            <span
              onClick={() => onClickCategory("Women")}
              className={`category ${active === "Women" && "active-category"}`}
            >
              <h3>Women</h3>
            </span>
            <span
              onClick={() => onClickCategory("Kids")}
              className={`category ${active === "Kids" && "active-category"}`}
            >
              <h3>Kids</h3>
            </span>
            <span
              onClick={() => onClickCategory("Discount")}
              className={`category ${
                active === "Discount" && "active-category"
              }`}
            >
              <h3>Discount</h3>
            </span>
          </div>
        </div>
        {getAllProduct.isLoading ? (
          <Spinner className="text-[#ff3333]" />
        ) : (
          <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {productList?.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
      <CustomFooter />
    </div>
  );
};

export { Product };
