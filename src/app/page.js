import { BookingModal } from '@/components/BookingModal';
import { MobileHeader } from '@/components/MobileHeader';

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center font-sans bg-[var(--background)]">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute bg-[var(--mob-bg-circle)] rounded-full blur-3xl
            right-[-15vw] top-[-10vh] w-[55vw] h-[55vw]
            sm:right-[-10vw] sm:top-[5vh] sm:w-[45vw] sm:h-[45vw]
            md:right-[-5vw] md:top-[-8vw] md:w-[35vw] md:h-[35vw]
            lg:right-[-15vw] lg:top-[-25vw] lg:w-[50vw] lg:h-[50vw]
          "
        />
        <div
          className="
            absolute bg-[var(--mob-bg-circle)] rounded-full blur-3xl
            left-[-15vw] bottom-[40vh] w-[55vw] h-[55vw]
            sm:left-[-10vw] sm:bottom-[15vh] sm:w-[45vw] sm:h-[45vw]
            md:left-[-5vw] md:bottom-[-8vw] md:w-[35vw] md:h-[35vw]
            lg:left-[-15vw] lg:bottom-[-25vw] lg:w-[50vw] lg:h-[50vw]
          "
        />
      </div>
      <nav className="md:flex hidden w-full items-center pl-20 bg-black/20 text-white text-[22px] h-[80px] border-b border-white/40 mb-10 z-2">
        6037 Venture Partnership
      </nav>
      <main className="flex flex-col items-center justify-end h-screen md:justify-center w-full max-md:overflow-hidden">
        <MobileHeader />
        <BookingModal />
      </main>
    </div>
  );
}
