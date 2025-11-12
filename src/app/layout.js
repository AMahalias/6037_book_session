import './globals.css';

export const metadata = {
  title: "Booking Session",
  description: "Choose a date and time that is convenient for you to e-meet your stylist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Kaisei+Tokumin:wght@700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
