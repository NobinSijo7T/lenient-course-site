import "./global.css";

import { ReactNode } from "react";
import SmoothScrolling from "../components/smooth-scrolling";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: `Lenient Tree`,
  description: "Lenient Tree - Learning Platform",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/favicon/favicon-96x96.png",
      sizes: "96x96",
    },
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
