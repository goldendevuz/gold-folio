import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import PageIndicator from "@/components/UI/PageIndicator";
import ClearityScript from "@/components/ClarityScript";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GOLDENDEV | Yunusov Abdulmajid",
  authors: [{ name: "Yunusov Abdulmajid", url: "https://t.me/avengerdev" }],
  description:
    "Backend developer focused on creating Web sites. I really like different projects that solve real problems.",
  keywords:
    "Yunusov Abdulmajid, Goldendev, Avengerdev, Uzbek Developer, Shifu",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "GOLDENDEV | Yunusov Abdulmajid",
    description:
      "Backend developer focused on creating Web sites. I really like different projects that solve real problems.",
    siteName: "Yunusov Abdulmajid",
  },
  creator: "Yunusov Abdulmajid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta name="theme-color" content="#13FF00" />
         <meta
          name="google-site-verification"
          content="-sX78yVRTSVn0x-AH93dRDmHdSxAp7prK1M9yUO3-r0"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} bg-background text-white`}>
        <Navbar />
        <PageIndicator />
        <Menu />
        {children}
        <Footer />

        {/* Microsoft clarity */}
        <ClearityScript />
      </body>
    </html>
  );
}
