import React from 'react';
import Image from 'next/image';

// Rating Stars Component
interface RatingProps {
  rating: number;
}

export const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-yellow-400 text-lg font-circular-std">
          {index < Math.floor(rating) ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-1 text-gray-600 font-circular-std">{rating.toFixed(1)}</span>
    </div>
  );
};

// Service Includes Component
interface ServiceIncludesProps {
  bdr: number;
  bath: number;
  ktchn: number;
}

export const ServiceIncludes: React.FC<ServiceIncludesProps> = ({ bdr, bath, ktchn }) => {
  return (
    <div className="flex items-center gap-4 text-sm font-circular-std text-gray-600">
      <span className="font-circular-std">Includes : </span>
      <div className="flex items-center gap-2">
        <span className="font-circular-std">{bdr} bdr</span>
        <span className="font-circular-std">•</span>
        <span className="font-circular-std">{bath} bath</span>
        <span className="font-circular-std">•</span>
        <span className="font-circular-std">{ktchn} ktchn</span>
      </div>
    </div>
  );
};

// Price Component
interface PriceProps {
  price: number;
  originalPrice: number;
}

export const Price: React.FC<PriceProps> = ({ price, originalPrice }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-circular-std">€ {price.toFixed(2)}</span>
      {originalPrice > price && (
        <span className="text-gray-500 line-through font-circular-std">€ {originalPrice.toFixed(2)}</span>
      )}
    </div>
  );
};

// Extra Item Component
interface ExtraItemProps {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity?: number;
  onQuantityChange: (quantity: number) => void;
}

export const ExtraItem: React.FC<ExtraItemProps> = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  quantity = 0,
  onQuantityChange 
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <Image src={image} alt={name} width={40} height={40} className="rounded" />
        <div>
          <h4 className="font-circular-std text-base text-gray-700">{name}</h4>
          <Price price={price} originalPrice={originalPrice} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button 
          className={`w-8 h-8 rounded flex items-center justify-center ${
            quantity > 0 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'border border-gray-300 text-gray-300'
          } transition-colors font-circular-std`}
          onClick={() => onQuantityChange(quantity > 0 ? quantity - 0.5 : 0)}
        >
          -
        </button>
        <span className="w-8 text-center font-circular-std">{quantity.toFixed(1)}</span>
        <button 
          className="w-8 h-8 rounded flex items-center justify-center bg-green-500 text-white hover:bg-green-600 transition-colors font-circular-std"
          onClick={() => onQuantityChange(quantity + 0.5)}
        >
          +
        </button>
      </div>
    </div>
  );
};

// Thumbnail Gallery Component
interface ThumbnailGalleryProps {
  images: string[];
  onSelect: (index: number) => void;
  selectedIndex: number;
}

export const ThumbnailGallery: React.FC<ThumbnailGalleryProps> = ({ 
  images, 
  onSelect, 
  selectedIndex 
}) => {
  return (
    <div className="flex gap-4 mt-4">
      {images.map((image, index) => (
        <button
          key={index}
          className={`relative w-20 h-20 border-2 rounded overflow-hidden ${
            selectedIndex === index ? 'border-green-500' : 'border-transparent'
          }`}
          onClick={() => onSelect(index)}
        >
          <Image
            src={image}
            alt={`Thumbnail ${index + 1}`}
            fill
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
};

// Share Button Component
export const ShareButton: React.FC = () => {
  return (
    <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
      <Image src="/Image/share.png" alt="Share" width={24} height={24} className="w-6 h-6" />
    </button>
  );
};

// Favorite Button Component
interface FavoriteButtonProps {
  isActive?: boolean;
  onClick: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isActive = false, onClick }) => {
  return (
    <button 
      className={`p-2 ${isActive ? 'text-red-500' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
      onClick={onClick}
    >
      <Image src="/Image/heart.png" alt="Favorite" width={24} height={24} className="w-6 h-6" />
    </button>
  );
};
