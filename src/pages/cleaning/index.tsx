import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import type { RootState } from '@/types/redux';
import CleaningService from '@/components/cleaning/CleaningService';

const CleaningPage = () => {
  const { selectedService } = useSelector((state: RootState) => state.cleaning);

  if (!selectedService) return null;

  return (
    <>
      <Head>
        <title>{selectedService.name} | Gleam Cleaning Services</title>
        <meta name="description" content="Professional cleaning services for your home and office. We deliver exceptional cleanliness with eco-friendly solutions and trained professionals." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Gleam Cleaning Services" />
        <meta property="og:title" content="Professional Cleaning Services | Gleam Cleaning" />
        <meta property="og:description" content="Transform your space with our professional cleaning services. Expert cleaners, eco-friendly products, and guaranteed satisfaction for homes and offices." />
        <meta property="og:url" content="https://gleam-app.netlify.app/cleaning" />
        <meta property="og:image" content="https://gleam-app.netlify.app/Image/og-img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Cleaning Services | Gleam Cleaning" />
        <meta name="twitter:description" content="Transform your space with our professional cleaning services. Expert cleaners, eco-friendly products, and guaranteed satisfaction for homes and offices." />
        <meta name="twitter:image" content="https://gleam-app.netlify.app/Image/og-img.png" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="house cleaning, office cleaning, professional cleaners, eco-friendly cleaning, deep cleaning, residential cleaning, commercial cleaning, cleaning services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gleam-app.netlify.app/cleaning" />
      </Head>
      <CleaningService />
    </>
  );
};

export default CleaningPage;