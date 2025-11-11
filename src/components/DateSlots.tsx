"use client";

import { useState, useMemo } from 'react';
import { format, isSameDay, addDays, startOfToday } from 'date-fns';
import { ArrowButton } from './ArrowButton';
import { useScrollHandlers } from '../hooks/useScrollHandlers';
import { scrollContainer } from '../helpers/scrollContainer';

interface DateSlotsProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  setSelectedTime: (time: string) => void;
  dateScrollRef: React.RefObject<HTMLDivElement>;
};

export const DateSlots = ({
  selectedDate,
  setSelectedDate,
  setSelectedTime,
  dateScrollRef,
}: DateSlotsProps) => {
  const [canScrollLeftDates, setCanScrollLeftDates] = useState(false);
  const [canScrollRightDates, setCanScrollRightDates] = useState(true);
  const today = startOfToday();

  const days = useMemo(() => {
    return Array.from({ length: 42 }, (_, i) => addDays(today, i));
  }, [today]);

  const { handleScroll: handleDateScroll } = useScrollHandlers(
    dateScrollRef,
    setCanScrollLeftDates,
    setCanScrollRightDates
  );

  return (
    <div className="relative">
      <div className="max-md:hidden absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex items-center justify-between mb-6 relative">
        <ArrowButton
          direction="left"
          onClick={() => scrollContainer("left", dateScrollRef)}
          disabled={!canScrollLeftDates}
        />
        <div
          ref={dateScrollRef}
          className="flex overflow-x-auto gap-3 no-scrollbar flex-1 mx-2 pb-2 scroll-smooth"
        >
          {days.map(day => {
            const selected = isSameDay(day, selectedDate);
            const dayName = format(day, "EEE");
            const dayNum = format(day, "d");

            return (
              <div
                key={day.toISOString()}
                data-date={day.toISOString()}
                className="flex flex-col items-center relative overflow-visible relative"
              >
                <button
                  onClick={() => {
                    setSelectedDate(day);
                    setSelectedTime(null);
                  }}
                  className={`flex flex-col items-center justify-center size-16 rounded-xl border transition-all min-w-[50px] cursor-pointer text-[var(--primary-text)]
                      ${selected
                    ? "bg-[var(--selected-bg)] text-[var(--selected-text)] font-medium border-none"
                    : "border-gray-200 hover:bg-gray-50"
                  }`
                  }
                >
                  <span className="text-md">{dayName}</span>
                  <span className="text-md">{dayNum}</span>
                </button>
              </div>
            );
          })}
        </div>
        <ArrowButton
          direction="right"
          onClick={() => scrollContainer("right", dateScrollRef)}
          disabled={!canScrollRightDates}
        />
      </div>
    </div>
  );
}
