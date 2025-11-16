export type Experience = {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  image_url: string;
};

export type Slot = {
  id: number;
  date: string;
  time: string;
  availableSeats: number;
  total_seats: number;
  experience: Experience;
};

export type data = {
  experience: Experience;
  slots: Slot[];
};

export type Bookings = {
  email: string;
  id: number;
  name: string;
  person: number;
  price: number;
  slot: {
    date: string;
    time: string;
    id: number;
    experience: {
      id: number;
      location: string;
      price: number;
      title: string;
    };
  };
};
