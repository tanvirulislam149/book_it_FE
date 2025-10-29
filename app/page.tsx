"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";

type Experience = {
  _id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
};

export default function Home() {
  const [experiences, setExperiences] = useState<Experience[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/experience/")
      .then((res) => setExperiences(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <section
          className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          id="experienceGrid"
        >
          {experiences?.map((e: Experience) => (
            <div
              key={e._id}
              className="bg-white flex flex-col h-full rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              data-name="Kayaking"
              data-location="Udupi, Karnataka"
            >
              <img
                src="https://res.cloudinary.com/enchanting/q_90,f_auto,c_lfill,w_1400,h_800/quark-web/2019/08/SITA-Arctic-Destination-Page-Hero-Header_GOPR0643.jpg"
                className="w-full h-40 object-cover"
                alt="Kayaking in Udupi"
              />
              <div className="flex flex-col grow p-4">
                <div className="flex flex-col grow">
                  <h3 className="font-semibold text-lg">{e.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{e.location}</p>
                  <p className="text-sm text-gray-600 mb-3">{e.description}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <p className="font-semibold text-gray-800 mb-3">
                    From ${e.price}
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
