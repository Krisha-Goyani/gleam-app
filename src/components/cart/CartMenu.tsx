import React, { useState } from "react";
import Button from "../Button";
import {
  ServiceItem,
  AdditionalInfo,
  PriceDetails,
  UploadImages,
  PromoCode,
} from "./CartComponents";

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu = ({ isOpen, onClose }: CartMenuProps) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    hasPets: false,
    needsSupplies: false,
    hasParking: false,
  });

  // Define the state types
  const [regularCleaningItems, setRegularCleaningItems] = useState<{
    name: string;
    rating: number;
    image: string;
    rooms: { name: string; icon: string; }[];
    items: { label: string; price: number; quantity: number; }[];
  } | null>({
    name: "Regular House Cleaning",
    rating: 4.0,
    image: "/Image/cart-img.png",
    rooms: [
      { name: "1 bdr", icon: "/Image/bed.png" },
      { name: "1 bth", icon: "/Image/bath.png" },
      { name: "1 ktchn", icon: "/Image/kitchen.png" },
    ],
    items: [
      { label: "Bathroom", price: 10.0, quantity: 1.5 },
      { label: "Bedroom", price: 10.0, quantity: 1 },
    ],
  });

  const [moveInOutItems, setMoveInOutItems] = useState<{
    name: string;
    rating: number;
    image: string;
    rooms: { name: string; icon: string; }[];
    items: { label: string; price: number; quantity: number; }[];
  } | null>({
    name: "Move In Move Out",
    rating: 4.0,
    image: "/Image/cart-img-1.png",
    rooms: [
      { name: "1 bdr", icon: "/Image/bed.png" },
      { name: "1 bth", icon: "/Image/bath.png" },
      { name: "1 ktchn", icon: "/Image/kitchen.png" },
    ],
    items: [
      { label: "Bathroom", price: 10.0, quantity: 1.5 },
      { label: "Bedroom", price: 10.0, quantity: 1 },
      { label: "Clean Fridge Inside", price: 10.0, quantity: 1 },
      { label: "Clean Fridge Oven", price: 10.0, quantity: 1 },
    ],
  });

  // Delete handlers
  const handleDeleteRegularCleaning = () => {
    setRegularCleaningItems(null);
  };

  const handleDeleteMoveInOut = () => {
    setMoveInOutItems(null);
  };

  if (!isOpen) return null;

  // Remove the standalone ServiceItem components and keep only the ones in the return statement
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full xs:max-w-[330px] xs-md:max-w-[400px] md:max-w-[606px] bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Fixed Header */}
          <div className="sticky top-0 bg-white z-10 px-2 xs-md:px-5 border-b border-gray-200">
            <div className="relative">
              <button
                className="absolute right-[20.5rem] xs-md:right-[25rem] md:right-[40rem] top-4 w-4 h-4 xs-md:w-8 xs-md:h-8 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50"
                onClick={onClose}
              >
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13M1 1L13 13"
                    stroke="#6E7491"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="flex mb-2 items-center p-4">
                <h2 className="text-xl font-circular-std text-black-light">
                  Cart
                </h2>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pt-5">
            <div className="px-2 xs-md:px-5 border-b-8 border-gray-light-secondary">
            {regularCleaningItems && (
              <ServiceItem
                name={regularCleaningItems.name}
                rating={regularCleaningItems.rating}
                image={regularCleaningItems.image}
                rooms={regularCleaningItems.rooms}
                items={regularCleaningItems.items}
                onDelete={handleDeleteRegularCleaning}
                onClose={onClose}
                onItemDelete={(index) => {
                  setRegularCleaningItems((prev) => {
                    if (!prev) return null;
                    const newItems = [...prev.items];
                    newItems.splice(index, 1);
                    return {
                      ...prev,
                      items: newItems
                    };
                  });
                }}
                onQuantityChange={(index, value) => {
                  setRegularCleaningItems((prev) => prev && ({
                    ...prev,
                    items: prev.items.map((item, i) =>
                      i === index ? { ...item, quantity: value } : item
                    ),
                  }));
                }}
              />
            )}
              <div className="mt-1 bg-purple-light p-3 rounded-lg mb-5">
                <h4 className="font-semibold mb-2">
                  Clean Regularly, Save More
                </h4>
                <p className="text-sm text-black-light mb-3 font-circular-std">
                  Subscribe for regular cleanings and keep your home spotless.
                  Enjoy automatic bookings and save time and money
                </p>
                <Button 
                text="Subscribe and save more"
                className="bg-purple-primary font-circular-std h-10 w-56 text-white px-4 py-2 rounded-md text-sm"
              />
              </div>
              {moveInOutItems && (
              <ServiceItem
                name={moveInOutItems.name}
                rating={moveInOutItems.rating}
                image={moveInOutItems.image}
                rooms={moveInOutItems.rooms}
                items={moveInOutItems.items}
                onDelete={handleDeleteMoveInOut}
                onClose={onClose}
                isSticky={true}
                onItemDelete={(index) => {
                  setMoveInOutItems((prev) => {
                    if (!prev) return null;
                    const newItems = [...prev.items];
                    newItems.splice(index, 1);
                    return {
                      ...prev,
                      items: newItems
                    };
                  });
                }}
                onQuantityChange={(index, value) => {
                  setMoveInOutItems((prev) => prev && ({
                    ...prev,
                    items: prev.items.map((item, i) =>
                      i === index ? { ...item, quantity: value } : item
                    ),
                  }));
                }}
              />
            )}
            </div>

            <AdditionalInfo
              items={[
                {
                  question: "Do you have any pets?",
                  value: additionalInfo.hasPets,
                  onChange: (value) =>
                    setAdditionalInfo((prev) => ({ ...prev, hasPets: value })),
                },
                {
                  question: "Do you require cleaning supplies?",
                  value: additionalInfo.needsSupplies,
                  onChange: (value) =>
                    setAdditionalInfo((prev) => ({
                      ...prev,
                      needsSupplies: value,
                    })),
                },
                {
                  question: "Do you have parking available for the cleaner?",
                  value: additionalInfo.hasParking,
                  onChange: (value) =>
                    setAdditionalInfo((prev) => ({
                      ...prev,
                      hasParking: value,
                    })),
                },
              ]}
            />

            <UploadImages />
            <PromoCode />

            <PriceDetails subTotal={220.0} visitFee={5.0} />
          </div>

          {/* Fixed Footer */}
          <div className="sticky bottom-0 px-2 xs-md:px-5 py-4 bg-white border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex w-32 md:w-56 flex-col text-black-secondary">
                <span className="text-xl text-black-secondary font-circular-std">
                  € 225.00
                </span>
                <span className="text-base text-black-secondary font-circular-std">
                  Amount to pay
                </span>
              </div>
              <Button 
                text="Confirm & Add Address"
                className="w-52 md:w-80 h-14 bg-green-primary text-white md:py-4 md:px-11 rounded-lg font-circular-std hover:bg-green-secondary transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
