import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "FRC 854 | Iron Bears",
  description: "Official site for FRC Team 854 — Iron Bears Robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />

        {/* Vercel Speed Insights */}
        <SpeedInsights />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
