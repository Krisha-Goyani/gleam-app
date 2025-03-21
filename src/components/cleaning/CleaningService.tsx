import React, { useState, useCallback, memo } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, CleaningExtra } from "@/types/redux";
import { updateExtra } from "@/store/slices/cleaningSlice";
// import ServiceChecklist from "../ui/ServiceChecklist";
import CartMenu from "@/components/cart/CartMenu";
import IncludedExcluded from "./IncludedExcluded";
import Dropdown from "@/components/Dropdown";

// Types
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
// Memoized UI Components
const RatingStars = memo(({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(4)].map((_, index) => (
      <span
        key={index}
        className="text-yellow-primary text-lg font-circular-std"
      >
        {"★"}
      </span>
    ))}
    <span className="ml-3 text-black-secondary font-circular-std">
      {rating.toFixed(1)}
    </span>
  </div>
));
RatingStars.displayName = "RatingStars";

const ServiceIncludes = memo(({ bdr, bath, ktchn }: ServiceIncludes) => (
  <div className="flex items-center gap-4 text-sm font-circular-std text-gray-light-secondary md-lg:mt-2">
    <span className="font-circular-std text-gray-light-primary">
      Includes :{" "}
    </span>
    <div className="flex items-center gap-2 text-gray-light-primary">
      <span className="font-circular-std flex items-center gap-1 text-gray-light-primary">
        <Image
          src="/Image/bed.png"
          title="bed"
          alt="Bedroom"
          width={16}
          height={16}
        />
        {bdr} bdr
      </span>
      <span className="font-circular-std">•</span>
      <span className="font-circular-std flex items-center gap-1 text-gray-light-primary">
        <Image
          src="/Image/bath.png"
          title="bath"
          alt="Bathroom"
          width={16}
          height={16}
        />
        {bath} bath
      </span>
      <span className="font-circular-std">•</span>
      <span className="font-circular-std flex items-center gap-1 text-gray-light-primary">
        <Image
          src="/Image/kitchen.png"
          title="ktchn"
          alt="Kitchen"
          width={16}
          height={16}
        />
        {ktchn} ktchn
      </span>
    </div>
  </div>
));
ServiceIncludes.displayName = "ServiceIncludes";

const Price = memo(
  ({
    price,
    originalPrice,
    size = "large",
  }: {
    price: number;
    originalPrice: number;
    size?: "large" | "small";
  }) => (
    <div className="flex items-center gap-3 mt-2">
      <span
        className={`${
          size === "large" ? "text-2xl" : "text-base"
        } text-black-secondary font-circular-std`}
      >
        € {price.toFixed(2)}
      </span>
      {originalPrice > price && (
        <span
          className={`${
            size === "large" ? "text-lg" : "text-sm"
          } text-gray-light-primary line-through font-circular-std`}
        >
          € {originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  )
);
Price.displayName = "Price";

const ActionButton = memo(
  ({
    icon,
    onClick,
    // isActive = false,
    // activeColor = "text-red-500",
    children
  }: {
    icon?: string;
    onClick?: () => void;
    isActive?: boolean;
    activeColor?: string;
    children?: React.ReactNode;
  }) => (
    <button
      className={`p-2 transition-colors rounded-full`}
      onClick={onClick}
    >
      {children || (
        <Image
          src={icon!}
          alt="Action"
          title="action"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      )}
    </button>
  )
);
ActionButton.displayName = "ActionButton";

const ExtraItem = memo(
  ({
    name,
    image,
    price,
    originalPrice,
    quantity = 1.5, // Set default quantity to 1.5
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
    // Set initial quantity for first two items
    React.useEffect(() => {
      if (index < 2 && quantity === 0) {
        onQuantityChange(1.5);
      }
    }, []);

    return (
      <div
        className={`flex items-center justify-between py-3 ${
          index !== totalItems - 1 ? "border-b border-gray-tertary" : ""
        }`}
      >
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt={name}
            title="cleaning-img"
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
        <div className="flex items-center gap-2">
          <Dropdown quantity={quantity} onQuantityChange={onQuantityChange} />
        </div>
      </div>
    );
  }
);
ExtraItem.displayName = "ExtraItem";

const ThumbnailGallery = memo(
  ({
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
            className={`shrink-0 relative w-[140px] h-[87px] border-2  overflow-hidden transition-all duration-300 ${
              selectedIndex === index
                ? "border-blue-primary"
                : "border-transparent hover:border-blue-primary/50"
            }`}
            onClick={() => onSelect(index)}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              title="cleaning-img"
              fill
              className={`object-cover transition-all duration-300 ${
                selectedIndex !== index ? "brightness-75" : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
);
ThumbnailGallery.displayName = "ThumbnailGallery";

// Main Component
const CleaningService: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedService, selectedExtras } = useSelector(
    (state: RootState) => state.cleaning as CleaningState
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleExtraQuantityChange = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateExtra({ id, quantity }));
    },
    [dispatch]
  );

  const handleFavoriteToggle = useCallback(() => {
    setIsFavorite((prev) => !prev);
  }, []);

  const handleCartToggle = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);

  if (!selectedService) return null;

  return (
    <div className="container-main">
      <div className="px-4 md-lg:px-16 md-lg:pt-4">
        <nav className="hidden bg-blue-light-primary w-60 pl-3 h-10 rounded md-lg:flex items-center gap-2 font-circular-std text-sm">
          <a href="#" className="text-gray-light-tertary hover:text-gray-600">
            Home
          </a>
          <span className="text-gray-light-tertary">
            <Image
              src="/Image/arrow-right.png"
              alt="arrow"
              title="arrow"
              width={12}
              height={12}
            />
          </span>
          <a href="#" className="text-black-secondary border-b border-black-secondary hover:text-gray-600">
            Regular House Cleaning
          </a>
        </nav>
      </div>
      <div className="md-lg:px-16 md-lg:py-8 container-main">
        <div className="md-lg:flex space-between gap-10 max-w-[1310px] w-full">
          {/* Left side - Images */}
          <div className="md-lg:max-w-[450px] lg-sm:max-w-[500px] xl:max-w-[635px]">
            <div className="relative md-lg:max-w-[450px] lg-sm:max-w-[500px] xl:max-w-[635px] h-[233px] sm:h-[270px] md:h-[300px] md-lg:h-[394px]">
              {/* Header overlay */}
              <div className="md-lg:hidden absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-gradient-to-b from-black/30 to-transparent">
                <ActionButton icon="/Image/arrow-square-left.png" />
                <div className="flex gap-4">
                  <ActionButton
                    icon="/Image/shopping-cart.png"
                    onClick={handleCartToggle}
                  />
                  <ActionButton icon="/Image/mini-share.png" />
                </div>
              </div>
              {/* Bottom slider bar */}
              <div className="hidden md-lg:block absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[80%] h-[3px] bg-gray-200/50 rounded-full">
                <div 
                  className="absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-300"
                  style={{ 
                    width: `${100 / selectedService.thumbnails.length}%`,
                    transform: `translateX(${selectedImageIndex * 100}%)`
                  }}
                />
              </div>
              <Image
                src={selectedService.thumbnails[selectedImageIndex]}
                alt={selectedService.name}
                title="Main Image"
                fill
                className="object-cover md-lg:max-w-[450px] lg-sm:max-w-[500px] xl:max-w-[635px] h-[394px]"
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
          <div className="pt-6 md-lg:pt-0 px-4 sm:px-6 md:px-8 md-lg:px-0 flex-1 md-lg:max-w-[400px] lg-xs:max-w-[490px] lg-sm:max-w-[500px] xl:max-w-[635px]">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-circular-std">
                  {selectedService.name}
                </h1>
                <RatingStars rating={selectedService.rating} />
              </div>
              {/* // Replace the heart ActionButton in the CleaningService component with: */}
              <div className="flex gap-3">
                <div className="hidden md-lg:block">
                  <ActionButton>
                    <div className="w-12 h-12 rounded-full bg-[#F0ECE7] bg-opacity-50 flex items-center justify-center pt-1">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12Z" 
                          fill="#0071B4"
                        />
                        <path 
                          d="M15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z" 
                          fill="#0071B4"
                        />
                        <path 
                          d="M15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.3431 10.3431 15 12 15C13.6569 15 15 16.3431 15 18Z" 
                          fill="#0071B4"
                        />
                        <path 
                          d="M5.63605 13.0503L11.364 16.9497" 
                          stroke="#0071B4" 
                          strokeWidth="2"
                        />
                        <path 
                          d="M11.364 7.05025L5.63605 10.9497" 
                          stroke="#0071B4" 
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </ActionButton>
                </div>
                <ActionButton onClick={handleFavoriteToggle}>
                  <div className="w-12 h-12 rounded-full bg-[#F0ECE7] bg-opacity-50 flex items-center justify-center">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.69006C2 5.60006 4.49 3.10006 7.56 3.10006C9.38 3.10006 10.99 3.98006 12 5.34006C13.01 3.98006 14.63 3.10006 16.44 3.10006C19.51 3.10006 22 5.60006 22 8.69006C22 15.6901 15.52 19.8201 12.62 20.8101Z" 
                        fill={isFavorite ? "#0071B4" : "none"} 
                        stroke="#0071B4" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </ActionButton>
              </div>
            </div>

            <ServiceIncludes {...selectedService.includes} />

            {/* Price Section */}
            <div className="mt-3">
              <Price
                price={selectedService.price}
                originalPrice={selectedService.originalPrice}
                size="large"
              />
              <div className="h-2 md-lg:h-px bg-gray-light-secondary -mx-4 sm:-mx-6 md:-mx-8 md-lg:mx-0"></div>
            </div>

            {/* Extras Section */}
            <div className="mt-6 md-lg:w-[400px] lg-sm:w-[477px]">
              <h3 className="text-base text-black-secondary font-circular-std mb-3 font-bold">
                Extras{" "}
                <span className="text-sm text-black-secondary">
                  (Select as needed)
                </span>
              </h3>
              <div className="space-y-4">
                {selectedService.extras.map(
                  (extra: CleaningExtra, index: number) => (
                    <ExtraItem
                      key={extra.id}
                      {...extra}
                      index={index}
                      totalItems={selectedService.extras.length}
                      quantity={
                        selectedExtras.find(
                          (e: CleaningExtra) => e.id === extra.id
                        )?.quantity || 0
                      }
                      onQuantityChange={(quantity) =>
                        handleExtraQuantityChange(extra.id, quantity)
                      }
                    />
                  )
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-3">
              <button
                className="bg-green-primary text-white py-3 rounded-lg font-circular-std hover:bg-green-secondary transition-colors w-full md-lg:w-[400px] lg-sm:w-[477px]"
                onClick={handleCartToggle}
              >
                Add to cart
              </button>
              <div className="h-2 bg-gray-light-secondary mt-8"></div>
            </div>

            {/* Included & Excluded Section */}
            <IncludedExcluded />
          </div>
        </div>
      </div>
      <CartMenu isOpen={isCartOpen} onClose={handleCartToggle} />
    </div>
  );
};

CleaningService.displayName = "CleaningService";

export default memo(CleaningService);
