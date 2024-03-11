import type { Metadata } from "next";
import "./globals.css";
import { anton, inter } from "../../utils/fonts";

export const metadata: Metadata = {
  title: "Link Portfolio",
  description:
    "Link Portfolio contains my important links made by Dazzler Abhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
