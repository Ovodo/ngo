"use-client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dona life foundation",
  description: "Helping those in need of surgical operations and treatments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='flex [background:linear-gradiet(180deg,rgb(255,247.03,238)_0%,rgba(174.45,174.45,174.45,0)_100%)] flex-col items-center justify-start '>
          <Toaster position='top-center' />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
