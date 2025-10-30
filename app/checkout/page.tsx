"use client";
import { RootState } from "@/Redux/store";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const Checkout = () => {
  const orderData = useSelector((state: RootState) => state.order);
  const router = useRouter();
  console.log(orderData);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // "Nov"
      day: "numeric", // 3
    });
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-[1280] w-full px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center my-4"
        >
          <FaArrowLeft />
          <p className="ml-2 font-bold">Details</p>
        </button>
        <div className="flex items-start justify-between w-full">
          <div className="bg-gray-100 w-8/12 p-5 mr-5 rounded-2xl">
            <div className="flex">
              <div className="w-full">
                <label className="text-gray-500" htmlFor="">
                  Full Name
                </label>{" "}
                <br />
                <input
                  className="bg-gray-200 text-sm rounded-lg px-4 mt-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                  placeholder="Your name"
                  required
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full ml-3">
                <label className="text-gray-500" htmlFor="">
                  Email
                </label>{" "}
                <br />
                <input
                  className="bg-gray-200 text-sm rounded-lg px-4 mt-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                  type="email"
                  required
                  placeholder="Your email"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-full mr-3">
                <input
                  className="bg-gray-200 text-sm rounded-lg px-4 mt-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                  type="text"
                  placeholder="Promo Code"
                  name=""
                  id=""
                />
              </div>
              <button className="px-3 py-1 mt-2 bg-black text-white rounded-lg text-base">
                Apply
              </button>
            </div>
            <div className="flex items-center mt-3">
              <label className="flex items-center cursor-pointer">
                <input
                  className="mr-2 my-3 accent-black"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>I agree to the terms and safety policy</p>
              </label>
            </div>
          </div>
          <div className="w-4/12 mx-2">
            <div className="bg-gray-200 rounded-2xl shadow p-6">
              <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
                <span>Experience</span>
                <span className="text-gray-800">{orderData.title}</span>
              </div>
              <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
                <span>Date</span>
                <span className="text-gray-800">
                  {formatDate(orderData.date)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
                <span>Time</span>
                <span className="text-gray-800">{orderData.time}</span>
              </div>

              <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
                <span>Qty</span>
                <div className="flex items-center rounded-lg overflow-hidden">
                  {orderData.person}
                </div>
              </div>

              <div className="flex justify-between text-gray-600 text-sm mb-1">
                <span>Subtotal</span>
                <span>₹{orderData.price}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm mb-3">
                <span>Taxes</span>
                <span>₹{orderData.tax}</span>
              </div>

              <div className="border-t pt-3 mb-4">
                <div className="flex justify-between font-semibold text-gray-800 text-lg">
                  <span>Total</span>
                  <span>₹{orderData.price + orderData.tax}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  // dispatch(setOrderData(data));
                  // router.push("/checkout");
                }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-2 rounded-lg"
              >
                Pay and Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
