import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { CustomFooter } from "../components/CustomFooter";
import { Alert, Spinner } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    userRef: localStorage.getItem("accessToken"),
    createdDate: "",
    postCode: "",
    shippingAddress: "",
  });
  const [orderDetails, setOrderDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [products] = useState(
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  const postOrder = useMutation({
    mutationKey: "postOrder",
    mutationFn: (params) => {
      return axios.post("/postOrder", params);
    },

    onSuccess: (data) => {
      //alert("Your account Created!");
      localStorage.setItem("cart", "[]");
      navigate("/message", {
        state: {
          type: "success",
          text: "We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!",
        },
      });
    },
    onError: () =>
      navigate("/message", {
        state: {
          type: "danger",
          text: "Something went wrong !",
        },
      }),
  });

  useEffect(() => {
    //calculate total price
    var sum = 0;
    products.map((i) => (sum = sum + i.price * i.amount));
    setTotal(sum);
    //set orderdetails
    var temp = [];
    products.forEach((item) => {
      temp.push({ productId: item.id, amount: item.amount, size: item.size });
    });
    setOrderDetails(temp);
  }, [products]);

  const onChange = (event) => {
    //console.log(event.id);
    let tempform = order;
    tempform = { ...tempform, [event.id]: event.value };
    console.log(tempform);
    setOrder(tempform);
  };

  const CartItem = ({ item }) => {
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">
            {item.title} {`(${item.amount})`}
          </h6>
          <small className="text-body-secondary">Size: {item.size}</small>
        </div>
        <span className="text-body-secondary">
          &#8356;{item.amount * item.price}
        </span>
      </li>
    );
  };

  const onSubmit = (event) => {
    var postData = {
      userDetails: {
        firstName: order.firstName,
        lastName: order.lastName,
        email: order.email,
      },
      orderItem: {
        userRef: order.userRef,
        createdDate: getTodayDate(),
        postCode: order.postCode,
        shippingAddress: order.shippingAddress,
      },
      orderDetails: orderDetails,
    };
    postOrder.mutate(postData);
    event.preventDefault();
  };

  const getTodayDate = () => {
    var today = new Date();
    var yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    var formattedToday = yyyy + "-" + mm + "-" + dd;
    return formattedToday;
  };
  return (
    <>
      <section className="w-full flex flex-col items-center py-20 lg:px-60 divide-y divide-gray-200 px-6">
        <h1 className="text-4xl my-6 w-full">Checkout</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 py-6">
          <div className="md:col-span-4 md:order-2 sm:order-1">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-[#ff3333] text-base font-semibold">
                Your cart
              </span>
              <span className="badge bg-[#ff3333] rounded-pill">
                {products?.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {products?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              {/* <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">−$5</span>
              </li> */}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (GBP)</span>
                <strong>&#8356;{total}</strong>
              </li>
            </ul>
          </div>
          <div className="md:col-span-8 md:order-1 sm:order-2">
            <h4 className="">Billing address</h4>
            <hr className="my-4" />
            <form
              className="needs-validation"
              noValidate
              onSubmit={(e) => onSubmit(e)}
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    required
                    onChange={(e) => onChange(e.currentTarget)}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    required
                    onChange={(e) => onChange(e.currentTarget)}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                    onChange={(e) => onChange(e.currentTarget)}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="shippingAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shippingAddress"
                    placeholder="1234 Main St"
                    required
                    onChange={(e) => onChange(e.currentTarget)}
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="postCode" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postCode"
                    placeholder=""
                    required
                    onChange={(e) => onChange(e.currentTarget)}
                  />
                  <div className="invalid-feedback">Post code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>
              <Alert color="warning">
                Currently, only the cash payment option is active!
              </Alert>
              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    disabled
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="cash"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    Cash
                  </label>
                </div>
              </div>

              <hr className="my-4" />

              <button
                className="w-full bg-[#ff3333] text-white py-2 rounded-md text-base"
                type="submit"
              >
                {postOrder.isLoading ? <Spinner size="sm" /> : "Place Order"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <CustomFooter />
    </>
  );
};

export { Checkout };
