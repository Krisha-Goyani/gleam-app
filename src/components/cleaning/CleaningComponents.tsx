import React, { useState } from "react";
import Image from "next/image";

// Interfaces
interface ServiceIncludes {
  bdr: number;
  bath: number;
  ktchn: number;
}

// Components
export const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(4)].map((_, index) => (
      <span key={index} className="text-yellow-primary text-lg font-circular-std">
        ★
      </span>
    ))}
    <span className="ml-3 text-black-secondary font-circular-std">
      {rating.toFixed(1)}
    </span>
  </div>
);

export const ServiceIncludes = ({ bdr, bath, ktchn }: ServiceIncludes) => (
  <div className="flex items-center gap-4 text-sm font-circular-std text-gray-light-secondary md-lg:mt-2">
    <span className="font-circular-std text-gray-light-primary">Includes : </span>
    <div className="flex items-center gap-2 text-gray-light-primary">
      <span className="font-circular-std flex items-center gap-1 text-gray-light-primary">
        <Image src="/Image/bed.png" alt="Bedroom" width={16} height={16} />
        {bdr} bdr
      </span>
      <span className="font-circular-std">•</span>
      <span className="font-circular-std flex items-center gap-1 text-gray-light-primary">
        <Image src="/Image/bath.png" alt="Bathroom" width={16} height={16} />
        {bath} bath
      </span>
      <span className="font-circular-std">•</span>
      <span className="font-circular-std flex items-center gap-1 text-gray-light-primary">
        <Image src="/Image/kitchen.png" alt="Kitchen" width={16} height={16} />
        {ktchn} ktchn
      </span>
    </div>
  </div>
);

export const Price = ({
  price,
  originalPrice,
  size = "large",
}: {
  price: number;
  originalPrice: number;
  size?: "large" | "small";
}) => (
  <div className="flex items-center gap-3 mt-2">
    <span className={`${size === "large" ? "text-2xl" : "text-base"} text-black-secondary font-circular-std`}>
      € {price.toFixed(2)}
    </span>
    {originalPrice > price && (
      <span className={`${size === "large" ? "text-lg" : "text-sm"} text-gray-light-primary line-through font-circular-std`}>
        € {originalPrice.toFixed(2)}
      </span>
    )}
  </div>
);

export const ShareButton = () => (
  <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors bg-gray-light-secondary rounded-full">
    <Image src="/Image/share.png" alt="Share" width={24} height={24} className="w-6 h-6" />
  </button>
);

export const FavoriteButton = ({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    className={`p-2 ${isActive ? "text-red-500" : "text-gray-600 hover:text-gray-900"} transition-colors bg-gray-light-secondary rounded-full`}
    onClick={onClick}
  >
    <Image src="/Image/blue-heart.png" alt="Favorite" width={24} height={24} className="w-6 h-6" />
  </button>
);

export const ExtraItem = ({
  name,
  image,
  price,
  originalPrice,
  quantity = 0,
  onQuantityChange,
  index,
  totalItems,
}: {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity?: number;
  onQuantityChange: (quantity: number) => void;
  index: number;
  totalItems: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderDropdown = () => {
    if (name.toLowerCase().includes("wash")) {
      return (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-2 rounded-lg text-sm bg-transparent border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors font-circular-std min-w-[100px] text-center"
          >
            {quantity > 0 ? quantity.toFixed(1) : "Select"}
          </button>
          {isOpen && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {[1.0, 2.0, 3.0].map((value) => (
                <div
                  key={value}
                  className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    onQuantityChange(value);
                    setIsOpen(false);
                  }}
                >
                  {value.toFixed(1)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-lg text-sm bg-red-200 text-green-600 border border-green-100 hover:border-green-500 transition-colors font-circular-std min-w-[100px] text-center"
        >
          {quantity || 1.5}
        </button>
        {isOpen && (
          <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {[1.5, 2.0, 2.5].map((value) => (
              <div
                key={value}
                className="py-2 px-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  onQuantityChange(value);
                  setIsOpen(false);
                }}
              >
                {value.toFixed(1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`flex items-center justify-between py-3 ${
      index !== totalItems - 1 ? 'border-b border-gray-tertary' : ''
    }`}>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-lg object-cover"
        />
        <div>
          <h4 className="font-circular-std text-base text-black-secondary mb-1">
            {name}
          </h4>
          <Price price={price} originalPrice={originalPrice} size="small" />
        </div>
      </div>
      <div className="flex items-center gap-2">{renderDropdown()}</div>
    </div>
  );
};

export const ThumbnailGallery = ({
  images,
  onSelect,
  selectedIndex,
}: {
  images: string[];
  onSelect: (index: number) => void;
  selectedIndex: number;
}) => (
  <div
    className="hidden md-lg:block mt-4 w-full overflow-x-auto scrollbar-hide"
    style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
  >
    <div className="flex gap-4 min-w-max">
      {images.map((image, index) => (
        <button
          key={index}
          className={`shrink-0 relative w-[140px] h-[87px] border-2 rounded overflow-hidden ${
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