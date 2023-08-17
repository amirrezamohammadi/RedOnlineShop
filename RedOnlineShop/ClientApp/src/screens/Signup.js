import React from 'react'

const Signup = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 w-auto"
          src={require("../assets/RedLogo.png")}
          alt="Redshop"
        />
        <h2
          className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Create new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              for="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
              >First Name</label
            >
            <div className="mt-1">
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="lastname"
              className="block text-sm font-medium leading-6 text-gray-900"
              >Last Name</label
            >
            <div className="mt-1">
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                for="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900"
                >Confirm Password</label
              >
            </div>
            <div className="mt-1">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autocomplete="current-password"
                required
                className="block w-full rounded-md border border-gray-300 shadow-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#FF3333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3333]"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="justify-center flex-row flex">
          <a
            href="./login"
            className="my-4 text-blue-400 flex items-center"
          >
            <i className="fa fa-angle-left mr-4" aria-hidden="true"></i>Back to
            Login
          </a>
        </div>
      </div>
    </div>
  )
}

export {Signup}