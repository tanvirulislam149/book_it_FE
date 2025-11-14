"use client";
import { setOrderData } from "@/Redux/OrderDataSlice";
import { AppDispatch } from "@/Redux/store";
import { Slot } from "@/types/experience";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const PriceComp = ({
  selectedSlot,
  confirm,
}: {
  selectedSlot: Slot | null;
  confirm: boolean;
}) => {
  const [quantity, setQuantity] = useState(1);
  if (!selectedSlot?.experience) return null;
  const { price } = selectedSlot?.experience;
  const [totalPrice, setTotalPrice] = useState(price);
  let tax = parseInt(String(price * quantity * 0.05));

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const data = {
    slot: selectedSlot.id,
    price: price * quantity,
    tax: tax,
    title: selectedSlot.experience.title,
    date: selectedSlot.date,
    time: selectedSlot.time,
    person: quantity,
  };

  //   console.log(data);

  useEffect(() => {
    tax = parseInt(String(price * quantity * 0.05));
    const total = tax + price * quantity;
    setTotalPrice(total);
  }, [quantity]);
  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-6 h-fit">
        <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
          <span>Starts at</span>
          <span className="font-semibold text-gray-800">
            ₹{price * quantity}
          </span>
        </div>

        <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
          <span>Quantity</span>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              disabled={quantity === 1 ? true : false}
              onClick={() => setQuantity(quantity - 1)}
              className="px-2 py-1"
            >
              −
            </button>
            <span className="px-3">{quantity}</span>
            <button
              disabled={quantity === selectedSlot.availableSeats ? true : false}
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between text-gray-600 text-sm mb-1">
          <span>Subtotal</span>
          <span>₹{price * quantity}</span>
        </div>
        <div className="flex justify-between text-gray-600 text-sm mb-3">
          <span>Taxes</span>
          <span>₹{tax}</span>
        </div>

        <div className="border-t pt-3 mb-4">
          <div className="flex justify-between font-semibold text-gray-800 text-lg">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        <button
          onClick={() => {
            dispatch(setOrderData(data));
            if (confirm) {
              router.push("/checkout");
            } else {
              toast.error("You haven't selected the time.", {
                position: "top-center",
              });
            }
          }}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PriceComp;
