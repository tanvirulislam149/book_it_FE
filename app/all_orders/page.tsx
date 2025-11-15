"use client";
import { Bookings } from "@/types/experience";
import axios from "axios";
import React, { useEffect, useState } from "react";
import format_time from "../utils.js/format_time";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const All_orders = () => {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState<Bookings[]>([]);
  console.log(bookings);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/booking/`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <div className="bg-gray-100 h-screen p-6">
        <div className="max-w-full mx-auto">
          <div className="bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">
                All Orders
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tour title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Person
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-100">
                  {bookings.map((b, index) => (
                    <tr key={b.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {b.slot.experience.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {b.slot.experience.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {b.person}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        ৳ {b.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {b.slot.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {format_time(b.slot.time)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {b.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {b.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-center">
                        <button className="text-base px-3 py-2 rounded-md bg-yellow-50 text-yellow-700 hover:bg-yellow-100">
                          <RiDeleteBinLine />
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base text-center">
                        <button className="text-base px-3 py-2 rounded-md bg-yellow-50 text-yellow-700 hover:bg-yellow-100">
                          <GrUpdate />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All_orders;
