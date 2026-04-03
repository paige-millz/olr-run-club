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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💧</text></svg>",
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
