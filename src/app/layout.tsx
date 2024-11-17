import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { dbConnect } from "../lib/mongo";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"]
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
      <body className={cn("min-h-screen", poppins.className)}>
        {children}
      </body>
    </html>
  );
}
