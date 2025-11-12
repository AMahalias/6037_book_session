"use client";

import Image from 'next/image';
import { useState } from 'react';
import BookingWidget from './BookingWidget';

export const BookingModal = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const onConfirm = () => {
    if (!selectedDate || !selectedTime) return;

    console.log({ timestamp: selectedDate.getTime() });
  };

  return (
    <div className="flex flex-col items-center justify-between md:gap-[2vw] w-full py-8 px-5 md:py-10 md:px-6 rounded-t-[24px] md:rounded-2xl bg-white md:w-xl md:mb-[5vw] h-[65%] md:h-fit lg:h-full z-2">
      <div className="flex flex-col gap-[3vw] w-full">
        <div className="flex gap-8 items-center justify-between md:ml-8">
          <Image
            src="images/bg_desktop.png"
            className="md:block hidden rounded-full object-cover object-right size-[120px]"
            alt="Booking Image"
            width={120}
            height={120}
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-serif text-[28px]">Book a Session</h1>
            <p className="text-sm text-[var(--secondary-text)]">
              Choose a date and time that is convenient for you to e-meet your stylist
            </p>
          </div>
        </div>
        <BookingWidget
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <button
        className="flex items-center justify-center rounded-[100px] py-4 w-[370px] bg-[var(--primary-text)] text-white font-semibold hover:bg-gray-700 transition-all cursor-pointer disabled:opacity-20"
        onClick={onConfirm}
        disabled={!selectedTime || !selectedDate}
      >
        Confirm
      </button>
    </div>
  );
};
