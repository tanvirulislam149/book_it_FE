"use client";
import { RootState } from "@/Redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const orderData = useSelector((state: RootState) => state.order);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [bookLoading, setBookLoading] = useState(false);
  const [finalPrice, setFinalPrice] = useState(orderData.price + orderData.tax); // total price

  const router = useRouter();
  console.log(orderData);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // "Nov"
      day: "numeric", // 3
    });
  };

  const handleBooking = () => {
    console.log("object");
    if (!name || !email || !agree) {
      toast.error(
        "Please provide correct information and agree with term and policies.",
        {
          position: "top-center",
        }
      );
      return;
    }
    setBookLoading(true);
    axios
      .post("http://127.0.0.1:8000/booking/", {
        slot: orderData.slot,
        price: finalPrice,
        name,
        email,
        person: orderData.person,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          router.push(`/bookingConfirmed/${res.data.id}`);
          setBookLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.email) {
          toast.error(err.response.data.email[0], { position: "top-center" });
        } else if (err.response.data.non_field_errors) {
          toast.error(err.response.data.non_field_errors[0], {
            position: "top-center",
          });
        }
      })
      .finally(() => setBookLoading(false));
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-[1280] w-full px-8">
        <button
          onClick={() => router.back()}
          className="flex items-center my-4"
        >
          <FaArrowLeft />
          <p className="ml-2 font-bold">Checkout</p>
        </button>
        <div className="md:flex items-start justify-between w-full">
          <div className="bg-gray-100 w-full md:w-8/12 mb-5 p-5 mr-5 rounded-2xl">
            <div className="flex">
              <div className="w-full">
                <label className="text-gray-500" htmlFor="">
                  Full Name
                </label>{" "}
                <br />
                <input
                  className="bg-gray-200 text-sm rounded-lg px-4 mt-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="flex items-center mt-3">
              <label className="flex items-center cursor-pointer">
                <input
                  className="mr-2 my-3 accent-black"
                  type="checkbox"
                  onChange={() => setAgree(!agree)}
                  name=""
                  id=""
                />
                <p>I agree to the terms and safety policy</p>
              </label>
            </div>
          </div>
          <div className="md:w-4/12 w-full mx-2">
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
                  <span>₹{finalPrice}</span>
                </div>
              </div>

              <button
                disabled={bookLoading}
                onClick={handleBooking}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-2 rounded-lg disabled:bg-gray-400"
              >
                {bookLoading ? "Processing..." : "Pay and Confirm"}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
