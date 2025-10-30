import React from "react";

const PriceComp = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow p-6 h-fit">
        <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
          <span>Starts at</span>
          <span className="font-semibold text-gray-800">₹999</span>
        </div>

        <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
          <span>Quantity</span>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button className="px-2 py-1">−</button>
            <span className="px-3">1</span>
            <button className="px-2 py-1">+</button>
          </div>
        </div>

        <div className="flex justify-between text-gray-600 text-sm mb-1">
          <span>Subtotal</span>
          <span>₹999</span>
        </div>
        <div className="flex justify-between text-gray-600 text-sm mb-3">
          <span>Taxes</span>
          <span>₹59</span>
        </div>

        <div className="border-t pt-3 mb-4">
          <div className="flex justify-between font-semibold text-gray-800 text-lg">
            <span>Total</span>
            <span>₹958</span>
          </div>
        </div>

        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PriceComp;
