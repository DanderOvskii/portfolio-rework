import type { Metadata,Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dander Siegers",
    template: "%s | Dander Siegers"
  },
  description: "This is the portfolio website of Dander Siegers.",
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Dander Siegers" }],
};
export const viewport:Viewport= {
  width: 'device-width',
  initialScale: 1,
};