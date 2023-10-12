import Header from "@/components/Custom Components/Header";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Custom Components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import GoogleAnalytics from "./GoogleAnalytics";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  generator: "Devolved AI",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  title: "Devolved AI - Democratizing the Future of AI",
  applicationName: "Devolved AI Website",
  description:
    "Elevate AI governance and innovation with our decentralized ecosystem. Token-weighted voting, user-friendly tools, and rewarding community engagement—powered by Argocoin.",
  keywords: [
    " federated learning",
    " decentralized ai",
    " future of AI",
    " transparent AI",
    " community driven AI",
    " proof of value (PoV) protocol",
    " substrate blockchain",
    " argocoin (AGC)",
    " commUnity module",
    " token weighted voting",
    " smart contracts",
    " advanced nlp",
    " transparency reports",
    " decentralized governance model",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} grid`} style={{ userSelect: "none" }}>
        <Header />
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
