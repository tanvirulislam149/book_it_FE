export type Experience = {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  image_url: string;
};

export type Slot = {
  _id: string;
  date: Date;
  time: string;
  availableSeats: number;
  total_seats: number;
  experience: Experience;
};

export type data = {
  experience: Experience;
  slots: Slot[];
};
