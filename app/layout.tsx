import Header from "@/components/Custom Components/Header";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Custom Components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Devolved AI - Democratizing the Future of AI",
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
  openGraph: {
    images:
      "https://drive.google.com/file/d/1u-Exh17L_6PN7_GtaNQE3sCBZxmZ91c-/view?usp=sharing",
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
        {children}
        <Analytics />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
