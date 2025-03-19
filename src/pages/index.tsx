import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/types/types";
import { selectService } from "@/store/slices/cleaningSlice";
import Header from "@/components/layout/Header";
import CleaningService from "@/components/cleaning/CleaningService";
import ServiceReviews from "@/components/reviews/ServiceReviews";
import UserReviews from "@/components/reviews/UserReviews";
import Footer from "@/components/footer/Footer";

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
    <div className="container-main">
      <Header />
      <CleaningService />
      <div className=" px-4 sm:px-6 md:px-8 md-lg:px-16 container-main">
        <ServiceReviews />
        <UserReviews />
      </div>
      <Footer />
    </div>
  );
}
