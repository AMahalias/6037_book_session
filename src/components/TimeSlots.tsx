import { useState, useRef, useMemo } from 'react';
import { format, isBefore, isToday, parse, set } from 'date-fns';
import { ArrowButton } from './ArrowButton';
import { useScrollHandlers } from '../hooks/useScrollHandlers';
import { scrollContainer } from '../helpers/scrollContainer';

interface TimeSlotsProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
}

export const TimeSlots = ({
  selectedDate,
  selectedTime,
  setSelectedTime,
}: TimeSlotsProps) => {
  const [canScrollLeftTimes, setCanScrollLeftTimes] = useState(false);
  const [canScrollRightTimes, setCanScrollRightTimes] = useState(true);
  const now = new Date();
  const timeScrollRef = useRef<HTMLDivElement | null>(null);

  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    for (let h = 9; h < 18; h++) {
      for (let m = 0; m < 60; m += 15) {
        slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
      }
    }
    return slots.filter(slot => {
      if (isToday(selectedDate)) {
        const [hours, minutes] = slot.split(":").map(Number);
        const slotDate = set(selectedDate, { hours, minutes });
        return isBefore(new Date(), slotDate);
      }
      return slot;
    });
  }, [selectedDate]);

  const { handleScroll: handleTimeScroll } = useScrollHandlers(
    timeScrollRef,
    setCanScrollLeftTimes,
    setCanScrollRightTimes
  );

  return (
    <div className="relative">
      <div className="max-md:hidden absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      {timeSlots.length ? (
        <div className="flex items-center justify-between mb-3 relative">
          <ArrowButton
            direction="left"
            onClick={() => scrollContainer("left", timeScrollRef)}
            disabled={!canScrollLeftTimes}
          />
          <div
            ref={timeScrollRef}
            className="flex overflow-x-auto gap-3 no-scrollbar flex-1 mx-2 scroll-smooth"
          >
            {timeSlots.map((slot) => {
              const [hours, minutes] = slot.split(":").map(Number);
              const slotDate = set(selectedDate, { hours, minutes });
              const isPast = isBefore(slotDate, now) && isToday(selectedDate);
              const selected = selectedTime === slot;

              return (
                <button
                  key={slot}
                  disabled={isPast}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2 flex justify-center rounded-full border min-w-[80px] text-sm whitespace-nowrap transition-all cursor-pointer
                      ${
                    selected
                      ? "bg-[var(--selected-bg)] text-[var(--selected-text)] font-medium border-none"
                      : isPast
                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                        : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {format(parse(slot, "HH:mm", new Date()), "h:mm a")}
                </button>
              );
            })}
          </div>
          <ArrowButton
            direction="right"
            onClick={() => scrollContainer("right", timeScrollRef)}
            disabled={!canScrollRightTimes}
          />
        </div>
      ) : (
        <p className="flex justify-center text-sm text-[var(--secondary-text)]">
          No <span className="text-[var(--selected-text)] px-1">available</span> time slots for this date. Choose another one.
        </p>
      )}
    </div>
  );
}
