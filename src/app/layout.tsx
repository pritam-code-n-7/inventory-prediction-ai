import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { dbConnect } from "../lib/mongo";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inventory Prediction AI",
  description: "stidax",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const conn = await dbConnect();
  console.log(conn);

  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>{children}</body>
    </html>
  );
}