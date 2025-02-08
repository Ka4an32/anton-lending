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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Portfolio" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Anthony Belyi</title>
        <meta
          name="description"
          content="Product Manager and Principle Product Designer with 5 years experience"
        />
        <meta name="theme-color" content="black" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://belyi.tech/" />
        <meta property="og:title" content="Antony Belyi Protfolio" />
        <meta
          property="og:description"
          content="Product Manager and Principle Product Designer with 5 years experience"
        />
        <meta property="og:image" content="/opengraph.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
