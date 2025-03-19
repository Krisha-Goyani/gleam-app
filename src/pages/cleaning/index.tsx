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
        <meta name="description" content={`Professional ${selectedService.name} service including ${selectedService.includes.bdr} bedrooms, ${selectedService.includes.bath} bathrooms, and ${selectedService.includes.ktchn} kitchen`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${selectedService.name} | Gleam Cleaning Services`} />
        <meta property="og:description" content={`Professional ${selectedService.name} service including ${selectedService.includes.bdr} bedrooms, ${selectedService.includes.bath} bathrooms, and ${selectedService.includes.ktchn} kitchen`} />
        <meta property="og:image" content={selectedService.mainImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${selectedService.name} | Gleam Cleaning Services`} />
        <meta name="twitter:description" content={`Professional ${selectedService.name} service including ${selectedService.includes.bdr} bedrooms, ${selectedService.includes.bath} bathrooms, and ${selectedService.includes.ktchn} kitchen`} />
        <meta name="twitter:image" content={selectedService.mainImage} />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="cleaning service, house cleaning, professional cleaning, deep cleaning, home service" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourwebsite.com/cleaning/${selectedService.name.toLowerCase().replace(/\s+/g, '-')}`} />
      </Head>
      <CleaningService />
    </>
  );
};

export default CleaningPage;