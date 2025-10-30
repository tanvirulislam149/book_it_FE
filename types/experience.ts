export type Experience = {
  _id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  image_url: string;
};

export type Slot = {
  _id: String;
  date: Date;
  time: string;
  availableSeats: number;
  total_seats: number;
};

export type data = {
  experience: Experience;
  slots: Slot[];
};
