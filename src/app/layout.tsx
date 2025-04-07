import localFont from "next/font/local";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "./globals.css";

const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-cabinet",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cabinet.variable}>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
