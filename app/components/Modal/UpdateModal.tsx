"use client";
import format_time from "@/app/utils.js/format_time";
import { Bookings } from "@/types/experience";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import axios from "axios";
import { useState } from "react";

export default function UpdateModal({
  open,
  setOpen,
  get_bookings,
  updateBooking,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  get_bookings: () => void;
  updateBooking: Bookings;
}) {
  const [person, setPerson] = useState(1);
  console.log(updateBooking);
  const handleDelete = () => {
    if (updateBooking && updateBooking.slot.availableSeats) {
      axios
        .patch(`http://127.0.0.1:8000/booking/${updateBooking.id}/`, {
          slot: updateBooking.slot.id,
          person: person,
          price: updateBooking?.slot?.experience?.price * person,
        })
        .then((res) => {
          setOpen(false);
          get_bookings();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h1"
                      className="text-xl mb-2 font-semibold text-center text-white"
                    >
                      Update Booking
                    </DialogTitle>
                    <div className="flex border-b border-gray-400 pb-2 justify-between items-center my-2 text-white text-sm">
                      <p>Tour Title</p>
                      <p className="font-semibold text-white">
                        {updateBooking?.slot?.experience?.title}
                      </p>
                    </div>
                    <div className="flex border-b border-gray-400 pb-2 justify-between items-center my-2 text-white text-sm">
                      <p>Date</p>
                      <p className="font-semibold text-white">
                        {updateBooking?.slot?.date}
                      </p>
                    </div>
                    <div className="flex border-b border-gray-400 pb-2 justify-between items-center my-2 text-white text-sm">
                      <p>Time</p>
                      <p className="font-semibold text-white">
                        {format_time(updateBooking?.slot?.time)}
                      </p>
                    </div>
                    <div className="flex border-b border-gray-400 pb-2 justify-between items-center my-2 text-white text-sm">
                      <p>Available Seats</p>
                      <p className="font-semibold text-white">
                        {updateBooking?.slot?.availableSeats}
                      </p>
                    </div>
                    <div className="flex border-b border-gray-400 pb-2 justify-between items-center my-2 text-white text-sm">
                      <p>Starts at</p>
                      <p className="font-semibold text-white">
                        ৳{updateBooking?.slot?.experience?.price * person}
                      </p>
                    </div>

                    <div className="flex border-b border-gray-400 pb-2 justify-between items-center mb-2 text-white text-sm">
                      <span>Person</span>
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          disabled={person === 1 ? true : false}
                          onClick={() => setPerson(person - 1)}
                          className="px-2 py-1"
                        >
                          −
                        </button>
                        <span className="px-3">{person}</span>
                        <button
                          disabled={
                            person >= updateBooking?.slot?.availableSeats
                              ? true
                              : false
                          }
                          onClick={() => setPerson(person + 1)}
                          className="px-2 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => handleDelete()}
                  className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                >
                  Update
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
