import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, CleaningExtra } from '@/types/store';
import { updateExtra } from '@/store/slices/cleaningSlice';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ServiceChecklist from '../ui/ServiceChecklist';
import ServiceReviews from '../reviews/ServiceReviews';

// Component Interfaces
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

// UI Components
const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(4)].map((_, index) => (
      <span key={index} className="text-yellow-primary text-lg font-circular-std">{"★"}</span>
    ))}
    <span className="ml-3 text-black-secondary font-circular-std">{rating.toFixed(1)}</span>
  </div>
);

const ServiceIncludes = ({ bdr, bath, ktchn }: ServiceIncludes) => (
  <div className="flex items-center gap-4 text-sm font-circular-std text-gray-light-secondary mt-5">
    <span className="font-circular-std">Includes : </span>
    <div className="flex items-center gap-2">
      <span className="font-circular-std flex items-center gap-1">
        <Image src="/Image/bed.png" alt="Bedroom" width={16} height={16} />
        {bdr} bdr
      </span>
      <span className="font-circular-std">•</span>
      <span className="font-circular-std flex items-center gap-1">
        <Image src="/Image/bath.png" alt="Bathroom" width={16} height={16} />
        {bath} bath
      </span>
      <span className="font-circular-std">•</span>
      <span className="font-circular-std flex items-center gap-1">
        <Image src="/Image/kitchen.png" alt="Kitchen" width={16} height={16} />
        {ktchn} ktchn
      </span>
    </div>
  </div>
);

const Price = ({ 
  price, 
  originalPrice, 
  size = 'large' 
}: { 
  price: number; 
  originalPrice: number;
  size?: 'large' | 'small';
}) => (
  <div className="flex items-center gap-3 mt-2">
    <span className={`${
      size === 'large' ? 'text-2xl' : 'text-base'
    } text-black-secondary font-circular-std`}>
      € {price.toFixed(2)}
    </span>
    {originalPrice > price && (
      <span className={`${
        size === 'large' ? 'text-lg' : 'text-sm'
      } text-gray-light-secondary line-through font-circular-std`}>
        € {originalPrice.toFixed(2)}
      </span>
    )}
  </div>
);

const ShareButton = () => (
  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
    <Image src="/Image/share.png" alt="Share" width={24} height={24} className="w-6 h-6" />
  </button>
);

const FavoriteButton = ({ isActive = false, onClick }: { isActive: boolean; onClick: () => void }) => (
  <button
    className={`p-2 ${isActive ? "text-red-500" : "text-gray-600 hover:text-gray-900"} transition-colors`}
    onClick={onClick}
  >
    <Image src="/Image/heart.png" alt="Favorite" width={24} height={24} className="w-6 h-6" />
  </button>
);

const ExtraItem = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  quantity = 0, 
  onQuantityChange 
}: {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity?: number;
  onQuantityChange: (quantity: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderDropdown = () => {
    if (name.toLowerCase().includes('wash')) {
      return (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2 rounded-lg text-sm bg-transparent border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors font-circular-std min-w-[100px] text-center"
          >
            {quantity > 0 ? quantity.toFixed(1) : 'Select'}
          </button>
          {isOpen && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div 
                className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onQuantityChange(1);
                  setIsOpen(false);
                }}
              >
                1.0
              </div>
              <div 
                className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onQuantityChange(2);
                  setIsOpen(false);
                }}
              >
                2.0
              </div>
              <div 
                className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onQuantityChange(3);
                  setIsOpen(false);
                }}
              >
                3.0
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-lg text-sm bg-green-50 text-green-600 border border-green-100 hover:border-green-500 transition-colors font-circular-std min-w-[100px] text-center"
        >
          {quantity || 1.5}
        </button>
        {isOpen && (
          <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div 
              className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                onQuantityChange(1.5);
                setIsOpen(false);
              }}
            >
              1.5
            </div>
            <div 
              className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                onQuantityChange(2.0);
                setIsOpen(false);
              }}
            >
              2.0
            </div>
            <div 
              className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                onQuantityChange(2.5);
                setIsOpen(false);
              }}
            >
              2.5
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <Image src={image} alt={name} width={56} height={56} className="rounded-lg object-cover" />
        <div>
          <h4 className="font-circular-std text-base text-black-secondary mb-1">{name}</h4>
          <Price price={price} originalPrice={originalPrice} size="small" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        {renderDropdown()}
      </div>
    </div>
  );
};

const ThumbnailGallery = ({ 
  images, 
  onSelect, 
  selectedIndex 
}: { 
  images: string[]; 
  onSelect: (index: number) => void; 
  selectedIndex: number 
}) => (
  <div className="mt-4 overflow-x-auto scrollbar-hide" style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
    <div className="flex gap-4 min-w-max">
      {images.map((image, index) => (
        <button
          key={index}
          className={`relative w-[140px] h-[87px] border-2 rounded overflow-hidden ${
            selectedIndex === index ? "border-green-500" : "border-transparent"
          }`}
          onClick={() => onSelect(index)}
        >
          <Image
            src={image}
            alt={`Thumbnail ${index + 1}`}
            fill
            className={`object-cover transition-all duration-200 ${
              selectedIndex !== index ? "blur-[2px] brightness-75" : ""
            }`}
          />
        </button>
      ))}
    </div>
  </div>
);

// Main Component
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
        <div className="flex">
          {/* Left side - Images */}
          <div className="w-[635px]">
            <div className="relative w-[635px] h-[394px]">
              <Image
                src={selectedService.mainImage}
                alt={selectedService.name}
                fill
                className="object-cover w-[635px] h-[394px]"
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
          <div className="pl-10 flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-circular-std mb-1">{selectedService.name}</h1>
                <RatingStars rating={selectedService.rating} />
              </div>
              <div className="flex">
                <ShareButton />
                <FavoriteButton isActive={isFavorite} onClick={() => setIsFavorite(!isFavorite)} />
              </div>
            </div>

            <ServiceIncludes {...selectedService.includes} />
            {/* Price and Add to Cart */}
            <div className="mt-12 w-[477px]">
              <h3 className="text-base font-circular-std mb-3 font bold">
                Extras <span className="text-sm text-black-secondary ">(Select as needed)</span>
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
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-semibold text-gray-900">€{selectedService?.price.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through">€{selectedService?.originalPrice.toFixed(2)}</span>
              </div>
              <button className="bg-green-primary text-white py-3 rounded-lg font-circular-std hover:bg-green-600 transition-colors w-[477px]">
                Add to cart
              </button>
            </div>

            {/* Included & Excluded Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Included & Excluded</h2>
              <div className="w-[477px] border border-gray-100 rounded-lg px-6">
                <ServiceChecklist />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningService;
