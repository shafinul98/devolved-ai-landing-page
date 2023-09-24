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
  title: "Devolved AI",
  description: "The next step towards Decentralized AI",
  keywords: [
    "federated learning",
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
