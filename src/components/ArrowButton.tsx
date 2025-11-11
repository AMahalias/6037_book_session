interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
};

export const ArrowButton = ({ direction, onClick, disabled }: ArrowButtonProps ) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`hidden md:block hover:bg-gray-100 rounded-full transition z-20 ${
        disabled ? "cursor-not-allowed opacity-20" : "cursor-pointer"
      }`}
    >
      <img
        src={"/icons/chevron-right.svg"}
        alt={`${direction === "left" ? "Left" : "Right"} Arrow`}
        className={`size-[24px] ${direction === "left" ? "-rotate-180" : ""}`}
      />
    </button>
  );
};
