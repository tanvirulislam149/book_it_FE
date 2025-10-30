"use client";
import Loading from "@/app/components/Loading/loading";
import PriceComp from "@/app/components/PriceComp/PriceComp";
import { data } from "@/types/experience";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { use } from "react";

const ExperienceDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  console.log(data);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/experience/${id}`)
      .then((res) => {
        setData(res.data);
        setSelectedDate(res.data?.slots[0].date);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", // "Nov"
      day: "numeric", // 3
    });
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <main className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow">
            <Image
              src={
                data?.experience?.image_url ||
                "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
              }
              className="w-full h-5/12 object-cover"
              width={500}
              height={500}
              alt="image"
            />

            <h1 className="text-2xl font-semibold my-4 text-gray-800">
              {data?.experience.title}
            </h1>
            <p className="text-gray-600 mb-6">{data?.experience.description}</p>

            <h2 className="font-medium text-gray-800 mb-2">Choose date</h2>
            <div className="flex space-x-2 mb-6 text-sm">
              {data?.slots.length ? (
                data?.slots.map((s, index) => (
                  <button
                    key={index}
                    type="button"
                    name="dates"
                    // className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-medium"
                    className={`
            px-4 py-2 rounded-md font-medium transition-colors
            ${
              selectedDate === s.date
                ? "bg-yellow-400 text-black"
                : "text-gray-500 border"
            }
            hover:${selectedDate !== s.date ? "bg-gray-300" : ""}
          `}
                    value={formatDate(s.date)}
                    onClick={() => setSelectedDate(s.date)}
                  >
                    {formatDate(s.date)}
                  </button>
                ))
              ) : (
                <p>No date available</p>
              )}
            </div>

            <h2 className="font-medium text-gray-800 mb-2">Choose time</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {data?.slots.length ? (
                data?.slots.map((s, index) => (
                  <button
                    key={index}
                    type="button"
                    name="time"
                    disabled={!s.availableSeats ? true : false}
                    // className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-medium"
                    className={`
            px-4 py-2 rounded-md font-medium transition-colors ${
              !s.availableSeats && "bg-gray-300 cursor-not-allowed"
            }
            ${
              selectedTime === s.time
                ? "bg-yellow-400 text-black"
                : "text-gray-500 border"
            }
            hover:${selectedTime !== s.time ? "bg-gray-300" : ""}
          `}
                    value={s.time}
                    onClick={() => setSelectedTime(s.time)}
                  >
                    {s.time}{" "}
                    <span
                      className={`${
                        s.availableSeats ? "text-red-500" : "text-gray-500"
                      } text-xs`}
                    >
                      {s.availableSeats
                        ? `${s.availableSeats} left`
                        : "Sold out"}
                    </span>
                  </button>
                ))
              ) : (
                <p>No time available</p>
              )}
            </div>
            <p className="text-xs text-gray-500 mb-6">
              All times are in IST (GMT +5:30)
            </p>

            <h2 className="font-medium text-gray-800 mb-2">About</h2>
            <p className="text-gray-600 text-sm">
              Scenic routes, trained guides, and safety briefing. Minimum age
              10.
            </p>
          </div>

          <PriceComp />
        </main>
      )}
    </div>
  );
};

export default ExperienceDetails;
