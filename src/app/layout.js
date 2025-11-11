import { Poppins, Kaisei_Tokumin } from "next/font/google";
import "./globals.css";

const fontSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fontSerif = Kaisei_Tokumin({
  variable: "--font-kaisei-tokumin",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Booking Session",
  description: "Choose a date and time that is convenient for you to e-meet your stylist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
