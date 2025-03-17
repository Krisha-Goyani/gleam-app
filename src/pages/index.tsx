import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/types/store';
import { selectService } from '@/store/slices/cleaningSlice';
import Header from '@/components/layout/Header';
import CleaningService from '@/components/cleaning/CleaningService';

export default function Home() {
  const dispatch = useDispatch();
  const { services } = useSelector((state: RootState) => state.cleaning);

  useEffect(() => {
    // Select the first service by default
    if (services.length > 0) {
      dispatch(selectService(services[0].id));
    }
  }, [dispatch, services]);

  return (
    <div className="">
      <Header />
      <CleaningService />
    </div>
  );
}
