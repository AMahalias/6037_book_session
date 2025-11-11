"use client";

import React, { useState, useRef, useEffect } from "react";
import { format, startOfToday } from 'date-fns';
import { TimeSlots } from './TimeSlots';
import { DateSlots } from './DateSlots';

interface BookingWidgetProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

export default function BookingWidget({ selectedDate, setSelectedDate, selectedTime, setSelectedTime}: BookingWidgetProps) {
  const today = startOfToday();
  const [visibleMonth, setVisibleMonth] = useState(format(today, "MMM"));
  const dateScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = dateScrollRef.current;
    if (!container) return;

    const handleScrollForVisibleMonth = () => {
      const children = Array.from(container.children) as HTMLElement[];
      const containerRect = container.getBoundingClientRect();

      for (const child of children) {
        const rect = child.getBoundingClientRect();

        if (rect.left >= containerRect.left - 50) {
          const month = format(new Date(child.dataset.date || ""), "MMM");
          setVisibleMonth(month);
          break;
        }
      }
    };

    container.addEventListener("scroll", handleScrollForVisibleMonth);
    handleScrollForVisibleMonth();
    return () => container.removeEventListener("scroll", handleScrollForVisibleMonth);
  }, []);

  return (
    <div className="w-full mx-auto font-sans text-gray-800 relative">
      <div className="flex items-center mb-2 relative">
        <div className="sticky left-0 z-10 bg-white text-sm text-[var(--secondary-text)] pl-4 md:pl-7">
          {visibleMonth}
        </div>
      </div>

      <DateSlots
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setSelectedTime={setSelectedTime}
        dateScrollRef={dateScrollRef}
      />

      {selectedDate && (
        <TimeSlots
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
    </div>
  );
}
