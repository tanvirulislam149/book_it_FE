"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Link from "next/link";
import { Experience } from "@/types/experience";
import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  const [experiences, setExperiences] = useState<Experience[] | null>(null);
  const [loading, setLoading] = useState(true);
  const query = useSelector((state: RootState) => state.search.query);
  const data = useSelector((state: RootState) => state.order);
  console.log(data);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/experience/`)
      .then((res) => setExperiences(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="flex justify-center">
      <div className="max-w-[1280]">
        {loading ? (
          <Loading />
        ) : experiences?.length ? (
          <section
            className="p-8 pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            id="experienceGrid"
          >
            {experiences?.map((e: Experience) => (
              <div
                key={e.id}
                className="bg-white flex flex-col h-full rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                data-name="Kayaking"
                data-location="Udupi, Karnataka"
              >
                <Image
                  src={e.image_url}
                  className="w-full h-40 object-cover"
                  width={500}
                  height={500}
                  alt="image"
                />
                <div className="flex flex-col grow p-4">
                  <div className="flex flex-col grow">
                    <div className="">
                      <h3 className="font-semibold text-base my-1">
                        {e.title}
                      </h3>
                      <div className="flex items-center">
                        <CiLocationOn />
                        <p className="text-sm text-black ml-1 my-1">
                          {e.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {e.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-gray-800 font-semibold text-xl">
                      <span className="text-sm font-normal">From</span> ৳
                      {e.price}
                    </p>
                    <Link href={`/experience/${e.id}`}>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-sm text-black px-2 py-1 rounded-sm font-semibold">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <p className="text-xl mt-14">No result found.</p>
        )}
      </div>
    </div>
  );
}
