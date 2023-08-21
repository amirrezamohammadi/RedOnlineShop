import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";

const Signup = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: null,
  });
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isPasswordsSame, setIsPasswordsSame] = useState(true);

  useEffect(() => {
    if (signupForm.password !== confirmPassword && confirmPassword !== null) {
      setIsPasswordsSame(false);
    } else {
      setIsPasswordsSame(true);
    }
  }, [confirmPassword, signupForm.password]);

  const userSignup = useMutation({
    mutationKey: "signup",
    mutationFn: () => {
      return axios.post("/signup", { ...signupForm, role: "Customer" });
    },

    onSuccess: (data) => {
      //alert("Your account Created!");
      //navigate("../login");
      navigate("/message", {
        state: {
          type: "success",
          text: "Your account has been successfully created!",
          to: "/login",
          linkText: "Go To Login",
        },
      });
    },
    onError: (error) => {
      //console.log(error);
      navigate("/message", {
        state: {
          type: "danger",
          text:
            error.response.status === 409
              ? "This Email address is Exist ! Please Try Another One."
              : "Something went wrong !",
        },
      });
    },
  });

  const onChange = (event) => {
    let tempform = signupForm;
    tempform = { ...tempform, [event.name]: event.value };
    setSignupForm(tempform);
  };
  const onSubmit = (event) => {
    userSignup.mutate();

    event.preventDefault();
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src={require("../assets/RedLogo.png")}
          alt="Redshop"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" method="POST" onSubmit={(e) => onSubmit(e)}>
          <div>
            <label
              for="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={signupForm.firstName}
                onChange={(e) => onChange(e.currentTarget)}
                className="block w-full rounded-md border px-1 border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={signupForm.lastName}
                onChange={(e) => onChange(e.currentTarget)}
                className="block w-full rounded-md border px-1 border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                value={signupForm.email}
                onChange={(e) => onChange(e.currentTarget)}
                className="block w-full rounded-md border px-1 border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                value={signupForm.password}
                onChange={(e) => onChange(e.currentTarget)}
                className="block w-full rounded-md border px-1 border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                for="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autocomplete="current-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                className="block w-full rounded-md border px-1 border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
              {!isPasswordsSame ? (
                <div className="bg-red-100 my-2 p-2 text-red-500 rounded-md">
                  Password and Confirm password are not same!
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <button
              disabled={!isPasswordsSame}
              type="submit"
              className="disabled:opacity-40 flex w-full justify-center rounded-md bg-[#FF3333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3333]"
            >
              {userSignup.isLoading ? <Spinner size="sm" /> : "Sign up"}
            </button>
          </div>
        </form>
        <div className="justify-center flex-row flex">
          <a href="./login" className="my-4 text-blue-400 flex items-center">
            <i className="fa fa-angle-left mr-4" aria-hidden="true"></i>Back to
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export { Signup };
