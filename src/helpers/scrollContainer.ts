export const scrollContainer = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return;
  ref.current.scrollBy({
    left: direction === "left" ? -300 : 300,
    behavior: "smooth",
  });
};
