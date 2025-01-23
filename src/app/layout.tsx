import "./global.scss";
import localFont from "next/font/local";
import React from "react";

const helvetica = localFont({
  src: "../font/helvetica.woff2",
  weight: "500",
  variable: "--font-helvetica",
});

const editiroall = localFont({
  src: "../font/editorial.woff2",
  weight: "400",
  variable: "--font-editorial",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${helvetica.variable} ${editiroall.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
