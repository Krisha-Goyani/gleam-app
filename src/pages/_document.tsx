import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        {/* Default Meta Tags - Override these in individual pages as needed */}
        <meta name="description" content="Gleam App - Your Professional Cleaning Service Solution" />
        <meta name="keywords" content="cleaning service, professional cleaning, home cleaning, gleam app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gleam App" />
        <meta property="og:description" content="Professional Cleaning Service Solution" />
        <meta property="og:image" content="https://gleam-app.netlify.app/Image/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gleam App" />
        <meta name="twitter:description" content="Professional Cleaning Service Solution" />
        <meta name="twitter:image" content="https://gleam-app.netlify.app/Image/og-image.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
