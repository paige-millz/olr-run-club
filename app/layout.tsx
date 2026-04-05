import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://runolr.com"),
  title: "OLR Run Club · Old LaGrange Road",
  description:
    "Free water for runners and cyclists on Old LaGrange Road in Crestwood, KY. Community first.",
  openGraph: {
    title: "OLR Run Club · Old LaGrange Road",
    description:
      "Free water for runners and cyclists on Old LaGrange Road in Crestwood, KY. Community first.",
    images: ["/assets/FREE_WATER___RUNNERS___BIKERS_ONLY.png"],
    type: "website",
    url: "https://runolr.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "OLR Run Club · Old LaGrange Road",
    description:
      "Free water for runners and cyclists on Old LaGrange Road in Crestwood, KY. Community first.",
    images: ["/assets/FREE_WATER___RUNNERS___BIKERS_ONLY.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-cream">
        {children}
      </body>
    </html>
  );
}
