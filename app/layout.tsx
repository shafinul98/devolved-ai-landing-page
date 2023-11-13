import Header from "@/components/Custom Components/Header";
import "./globals.css";
import { Lato } from "next/font/google";
import Footer from "@/components/Custom Components/Footer";
import { Metadata } from "next";
import GoogleAnalytics from "./GoogleAnalytics";
import Script from "next/script";

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
      <head>
        <Script id="twitter-pixel" strategy="beforeInteractive">
          {`
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','ofd1d');
`}
        </Script>
        <Script id="facebook-pixel" strategy="beforeInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '855397502875334');
fbq('track', 'PageView');
`}
        </Script>
      </head>
      <body className={`${lato.className} grid`}>
        <Header />
        <GoogleAnalytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
