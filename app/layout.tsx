import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartProvider";

export const metadata: Metadata = {
  title: "Scoopease — Happiness by the scoop",
  description: "Small-batch ice cream made with joyful ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
