import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Notes — Alexandra Julia Sugatan",
  description:
    "An archive of attention — books, films, songs, scenes from the field, alongside the things I made by looking at them long enough.",
  openGraph: {
    title: "Field Notes — Alexandra Julia Sugatan",
    description:
      "An archive of attention — books, films, songs, scenes from the field.",
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
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg text-ink">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
