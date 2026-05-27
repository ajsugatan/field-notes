import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Notes — AJ Sugatan",
  description:
    "An ongoing journal of design research, strategy, and the practice of unperforming. Field notes from the work of AJ Sugatan.",
  openGraph: {
    title: "Field Notes — AJ Sugatan",
    description:
      "An ongoing journal of design research, strategy, and the practice of unperforming.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=JetBrains+Mono:wght@300..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Cursor />
        <Navigation />
        <main className="px-6 md:px-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
