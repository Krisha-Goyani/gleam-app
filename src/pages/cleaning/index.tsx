import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/types/redux';
import CleaningService from '@/components/cleaning/CleaningService';

const CleaningPage = () => {
  const { selectedService } = useSelector((state: RootState) => state.cleaning);

  if (!selectedService) return null;

  return (
    <>
      <CleaningService />
    </>
  );
};

export default CleaningPage;