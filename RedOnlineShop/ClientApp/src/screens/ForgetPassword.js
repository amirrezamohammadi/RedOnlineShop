import React from 'react'

 const ForgetPassword = () => {
  return (
<>
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
          Forget Password
        </h2>
        <h5 className="mt-4 text-center text-gray-400">
          Enter your email and we will send you a link to reset your password.
        </h5>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#FF3333] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF3333]"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="justify-center flex-row flex">
          <a href='./login' className="my-4 text-blue-400 flex items-center"
          >
            <i className="fa fa-angle-left mr-4" aria-hidden="true"></i>Back to
            Login
          </a>
        </div>
      </div>
    </div>
</>
  )
}

export {ForgetPassword}