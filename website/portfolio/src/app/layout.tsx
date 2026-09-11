
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";
import { metadata } from "./metadata";
export { metadata };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      
    >
      <RootLayoutClient>{children}</RootLayoutClient>
    </html>
  );
}
