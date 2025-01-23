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

const fairfax = localFont({
  src: "../font/fairfax.ttf",
  weight: "500",
  variable: "--font-fairfax",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${helvetica.variable} ${editiroall.variable} ${fairfax.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
