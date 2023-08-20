import React, { useEffect, useState } from "react";
import { CustomFooter } from "../components/CustomFooter";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";

const ShoppingCart = () => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
    var sum = 0;
    products.map((i) => (sum = sum + i.price * i.amount));
    setTotal(sum);
  }, [products]);

  const filterMethod = (id, size) => {
    let temp = [...products];
    let index = temp.findIndex((i) => i.id === id && i.size === size);
    if (index !== -1) {
      temp.splice(index, 1);
    }
    setProducts(temp);
  };

  const CartItem = ({ item }) => {
    console.log(item);
    return (
      <span key={item?.id} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={`data:text/plain;base64,${item?.image}`}
            alt="item"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>{item.title}</h3>
              <p className="ml-4">&#8356; {item?.price}.00</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">Size: {item?.size}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500">Qty {item?.amount}</p>

            <div className="flex">
              <button
                onClick={() => filterMethod(item.id, item.size)}
                type="button"
                className="font-medium text-[#ff3333] hover:text-red-500"
              >
                <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </span>
    );
  };
  return (
    <>
      <section className="w-full flex flex-col items-center px-[10%]">
        <div className="w-full grid grid-cols-1 py-20 lg:px-60 divide-y divide-gray-200">
          <h1 className="text-4xl text-center my-6">Shopping Cart</h1>
          {products.length !== 0 ? (
            <div role="list" className="divide-y divide-gray-200">
              {products.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center py-4">
              <Alert color="warning">There is no item in the Cart !</Alert>
            </div>
          )}
          <div className="border-t border-gray-200 py-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>&#8356; {total}.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                onClick={(event) =>
                  products.length !== 0 ? {} : event.preventDefault()
                }
                className="flex items-center justify-center rounded-md border border-transparent bg-[#ff3333] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <Link
                  //type="button"
                  to={"/product"}
                  className="font-medium text-[#ff3333] hover:text-red-500 ml-2"
                  //onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export { ShoppingCart };
