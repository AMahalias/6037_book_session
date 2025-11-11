"use client";

import { useEffect } from "react";

const handleScrollForArrowButtons = (container: HTMLDivElement | null, setLeft: (value: boolean) => void, setRight: (value: boolean) => void) => {
  if (!container) return;

  const atStart = container.scrollLeft <= 5;
  const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

  setLeft(!atStart);
  setRight(!atEnd);
};

export const useScrollHandlers = (
  scrollRef: React.RefObject<HTMLDivElement>,
  setCanScrollLeft: (value: boolean) => void,
  setCanScrollRight: (value: boolean) => void
) => {
  const handleScroll = () => {
    handleScrollForArrowButtons(scrollRef.current, setCanScrollLeft, setCanScrollRight);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  return { handleScroll };
};
