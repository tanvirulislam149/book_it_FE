"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <p>Loading...</p>
      ) : (
        experiences?.map((e: Experience) => (
          <div key={e._id}>
            <p>{e.title}</p>
          </div>
        ))
      )}
    </div>
  );
}
