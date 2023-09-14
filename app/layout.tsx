import Header from "@/components/Custom Components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Footer from "@/components/Custom Components/Footer";
import { Toaster } from "@/components/ui/toaster";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Devolved AI",
  description: "Devovled AI Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} grid`}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
