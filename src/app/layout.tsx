import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wos Publications",
  description: "Professional editing and research publication services.",
  icons: {
    icon: [
      "/favicon.ico?v=4",
      "/favicon-16x16.png?v=4",
      "/favicon-32x32.png?v=4",
    ],
    apple: ["/apple-touch-icon.png?v=4"],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png?v=4",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png?v=4",
      },
    ],
  },
  manifest: "/site.webmanifest?v=4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
