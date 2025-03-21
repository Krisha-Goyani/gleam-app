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
        <meta name="description" content="Experience expert cleaning services for your home with Gleam Your Casa including deep cleaning dusting and more." />
        <meta name="keywords" content="cleaning service, professional cleaning, home cleaning, gleam app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gleam App | Professional Cleaning Services | Transform Your Space" />
        <meta property="og:description" content="Experience exceptional cleaning services with Gleam. Our expert team delivers professional, eco-friendly solutions for homes and offices, ensuring pristine results every time." />
        <meta property="og:image" content="https://gleam-app.netlify.app/Image/og-img.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gleam App | Professional Cleaning Services | Transform Your Space" />
        <meta name="twitter:description" content="Experience exceptional cleaning services with Gleam. Our expert team delivers professional, eco-friendly solutions for homes and offices, ensuring pristine results every time." />
        <meta name="twitter:image" content="https://gleam-app.netlify.app/Image/og-img.png" />
        
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
