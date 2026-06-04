import type { Metadata } from "next";
import SystemBar from "@/components/SystemBar";
import Footer from "@/components/Footer";
import { RailProvider } from "@/components/rail/RailContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Notes™ — an archive of attention",
  description:
    "Field Notes — an archive of attention. Alexandra Julia Sugatan: multi-disciplinary designer and strategist. Field studies of how people move through tools, spaces, feelings, and institutions, and the things made by looking long enough to redesign them.",
  openGraph: {
    title: "Field Notes™ — an archive of attention",
    description:
      "An archive of attention — field studies of how people move through tools, spaces, feelings, and institutions.",
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
      <body className="flex min-h-screen flex-col bg-white text-black">
        <RailProvider>
          <SystemBar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </RailProvider>
      </body>
    </html>
  );
}
