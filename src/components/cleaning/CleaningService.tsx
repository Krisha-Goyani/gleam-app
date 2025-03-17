import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, CleaningExtra } from '@/types/store';
import { updateExtra } from '@/store/slices/cleaningSlice';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  RatingStars,
  ServiceIncludes,
  Price,
  ExtraItem,
  ThumbnailGallery,
  ShareButton,
  FavoriteButton
} from './CleaningComponents';

interface ServiceIncludes {
  bdr: number;
  bath: number;
  ktchn: number;
}

interface CleaningState {
  selectedService: {
    mainImage: string;
    name: string;
    rating: number;
    includes: ServiceIncludes;
    price: number;
    originalPrice: number;
    thumbnails: string[];
    extras: CleaningExtra[];
  };
  selectedExtras: CleaningExtra[];
}

const CleaningService = () => {
  const dispatch = useDispatch();
  const { selectedService, selectedExtras } = useSelector((state: RootState) => state.cleaning as CleaningState);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!selectedService) return null;

  const handleExtraQuantityChange = (id: number, quantity: number) => {
    dispatch(updateExtra({ id, quantity }));
  };

  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Deep House Cleaning', href: '#deep-cleaning' }
  ];

  return (
    <div className="container-main">
      <div className="px-16 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="px-16 py-8">
        <div className="flex gap-8">
          {/* Left side - Images */}
          <div className="w-[635px]">
            <div className="relative w-[635px] h-[394px] ">
              <Image
                src={selectedService.mainImage}
                alt={selectedService.name}
                fill
                className="object-cover w-[635px] h-[394px] "
                priority
              />
            </div>
            <ThumbnailGallery
              images={selectedService.thumbnails}
              onSelect={setSelectedImageIndex}
              selectedIndex={selectedImageIndex}
            />
          </div>

          {/* Right side - Details */}
          <div className="">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-circular-std mb-2">{selectedService.name}</h1>
                <RatingStars rating={selectedService.rating} />
              </div>
              <div className="flex">
                <ShareButton />
                <FavoriteButton
                  isActive={isFavorite}
                  onClick={() => setIsFavorite(!isFavorite)}
                />
              </div>
            </div>

            <ServiceIncludes {...selectedService.includes} />
            <Price price={selectedService.price} originalPrice={selectedService.originalPrice} />

            {/* Extras Section */}
            <div className="mt-8">
              <h3 className="text-xl font-circular-std mb-4">
                Extras <span className="text-sm text-gray-500">(Select as needed)</span>
              </h3>
              <div className="space-y-4">
                {selectedService.extras.map((extra: CleaningExtra) => (
                  <ExtraItem
                    key={extra.id}
                    {...extra}
                    quantity={selectedExtras.find((e: CleaningExtra) => e.id === extra.id)?.quantity || 0}
                    onQuantityChange={(quantity) => handleExtraQuantityChange(extra.id, quantity)}
                  />
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-8 w-full bg-green-500 text-white py-3 rounded-lg font-circular-std hover:bg-green-600 transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningService;
