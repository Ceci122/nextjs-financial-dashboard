import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MO-PCCO.R3 - NextJS Financial Dashboard",
  description: "Starter code for Module 25 Capstone project - Financial Dashbard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
