import Image from "next/image";

export const MobileHeader = () => {
  return (
    <header className="md:hidden relative flex w-full text-white px-5 pt-6">
      <div className="flex flex-col justify-between gap-5 z-10 mb-[50px]">
        <div className="flex flex-col">
          <h1 className="font-sans text-[6vw] sm:text-[5vw] leading-tight font-semibold">
            Cool session
          </h1>
          <p className="font-sans text-[3.8vw] sm:text-[3.2vw] text-white/80">
            Additional type
          </p>
        </div>
        <div className="flex items-center gap-2 py-1 px-3 w-fit bg-white/20 rounded-full backdrop-blur-sm">
          <img
            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/icons/clock.svg`}
            alt="Clock Icon"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span className="text-[3.5vw] sm:text-[3vw] font-medium">30 min</span>
        </div>
      </div>
      <div className="absolute right-0 top-[40px] w-[70vw] sm:w-[60vw] aspect-square bg-[var(--mob-bg-circle)] border-[3px] sm:border-[4px] border-[var(--mob-bg-circle-border)] rounded-full translate-x-1/4 -translate-y-1/4" />
      <div className="absolute right-[-60px] bottom-[-60px] w-[100vw] sm:w-[70vw] z-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/images/bg_girl.png`}
          alt="Background image"
          className="object-contain"
          width={500}
          height={500}
          priority
        />
      </div>
    </header>
  );
};
