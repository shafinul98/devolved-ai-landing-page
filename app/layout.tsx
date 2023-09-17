"use client";

import Header from "@/components/Custom Components/Header";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Custom Components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable text selection
    document.body.style.userSelect = "none";

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${lato.className} grid`} style={{ userSelect: "none" }}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
