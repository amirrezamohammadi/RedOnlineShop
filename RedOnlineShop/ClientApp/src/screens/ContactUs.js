import React from 'react'

import { CustomFooter } from '../components/CustomFooter'

 const ContactUs = () => {
  return (
    <>
        <section className="w-full flex flex-col items-center px-[10%] py-20">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-semibold">Contact Us</h1>
            <span className="border-top-[2px] border-solid border-[#ff3333] w-[30%]"></span>
            <h5 className="text-2xl w-full text-center my-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi,
              odit saepe veniam eveniet qui, alias deserunt laboriosam magni ducimus
              iste neque aliquid eum libero tempore numquam iure omnis earum.
            </h5>
            <div id="googleMap" className="w-full h-[400px]">

            </div>
            <div className="w-full mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="h-60 flex flex-col justify-between">
                <div className="flex">
                  <div
                    className="h-11 w-11 bg-red-100 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i className="fa fa-location-arrow text-lg text-red-500"></i>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold text-gray-700">Location:</h3>
                    <p className="text-red-400">
                      A108 Adam Street, Birmingham, B192AT, UK
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div
                    className="h-11 w-11 bg-red-100 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i className="fa fa-envelope text-lg text-red-500"></i>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold text-gray-700">Email:</h3>
                    <p className="text-red-400">info@redshop.com</p>
                  </div>
                </div>
                <div className="flex">
                  <div
                    className="h-11 w-11 bg-red-100 rounded-lg flex items-center justify-center mr-4"
                  >
                    <i className="fa fa-phone text-lg text-red-500"></i>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold text-gray-700">Call:</h3>
                    <p className="text-red-400">+44 768 765 123</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      className="block w-full rounded-md border border-gray-300 shadow-sm px-1.5 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                  </div>
                  <div className="sm:col-span-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      className="block w-full rounded-md border border-gray-300 shadow-sm px-1.5 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      id="subject"
                      name="name"
                      type="text"
                      required
                      placeholder="Subject"
                      className="block w-full rounded-md border border-gray-300 shadow-sm px-1.5 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Message"
                      className="block w-full h-32 rounded-md border border-gray-300 shadow-sm px-1.5 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 flex justify-end">
                    <input
                      id="submit"
                      name="submit"
                      type="submit"
                      value="Send Message"
                      className="flex justify-center rounded-md bg-[#FF3333] px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm group-hover:bg-white hover:border hover:border-[#FF3333]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <CustomFooter/>
      </>
  )
}

export {ContactUs}