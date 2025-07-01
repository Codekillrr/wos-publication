import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wos Publications",
  description:
    "Professional academic editing and publishing support for researchers, students, and scholars. We offer expert services in thesis and dissertation editing, research paper proofreading, statistical analysis, plagiarism checking, journal selection, and resubmission support. From proposal to publication, we help you enhance clarity, accuracy, and impact.",
  url: "https://www.wospublications.co.uk",
  logo: "https://www.wospublications.co.uk/logo.png",
  image: "https://www.wospublications.co.uk/logo.png",
  sameAs: ["https://www.facebook.com/wospublications"],

  // Additional SEO enhancements:
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@wospublications.co.uk", // Support email
    url: "https://www.wospublications.co.uk/contact",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB", // Country
    addressRegion: "England", // City
  },
  foundingDate: "2020", // Founding year
  keywords:
    "academic editing, research publication, manuscript editing, publication services, thesis editing, dissertation editing, research paper editing, proofreading service, statistical analysis, journal selection, resubmission support, peer review services, plagiarism checker, literature search, research proposal editing, academic writing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
