import React, { useState } from "react";
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

  const handleDeleteService = () => {
    // Implement delete functionality
    console.log("Delete service");
  };

  // First, add this state at the top of the CartMenu component, after the additionalInfo state
  // Replace the single cartItems state with two separate states
  const [regularCleaningItems, setRegularCleaningItems] = useState([
    { label: "Bathroom", price: 10.0, quantity: 1.5 },
    { label: "Bedroom", price: 10.0, quantity: 1 },
  ]);
  
  const [moveInOutItems, setMoveInOutItems] = useState([
    { label: "Bathroom", price: 10.0, quantity: 1.5 },
    { label: "Bedroom", price: 10.0, quantity: 1 },
    { label: "Clean Fridge Inside", price: 10.0, quantity: 1 },
    { label: "Clean Fridge Oven", price: 10.0, quantity: 1 },
  ]);

  if (!isOpen) return null;

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
                className="absolute right-[20.5rem] xs-md:right-[25rem] md:right-[40rem] top-4 w-5 h-5 xs-md:w-8 xs-md:h-8 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50"
                onClick={onClose}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 13M1 1L13 13" stroke="#6E7491" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="flex mb-2 items-center p-4">
                <h2 className="text-xl font-circular-std text-gray-light-primary">
                  Cart
                </h2>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pt-4">
            <div className="px-2 xs-md:px-5 border-b-8 border-gray-light-secondary">
              <ServiceItem
                name="Regular House Cleaning"
                rating={4.0}
                image="/Image/cart-img.png"
                rooms={[
                  { name: "1 bdr", icon: "/Image/bed.png" },
                  { name: "1 bth", icon: "/Image/bath.png" },
                  { name: "1 ktchn", icon: "/Image/kitchen.png" },
                ]}
                onDelete={handleDeleteService}
                onClose={onClose}
                onQuantityChange={(index, value) => {
                  setRegularCleaningItems(prevItems => {
                    const newItems = [...prevItems];
                    newItems[index] = {
                      ...newItems[index],
                      quantity: value
                    };
                    return newItems;
                  });
                }}
                // Update the items prop to use cartItems:
                items={regularCleaningItems}
              />

              <ServiceItem
                name="Move In Move Out"
                rating={4.0}
                image="/Image/cart-img-1.png"
                rooms={[
                  { name: "1 bdr", icon: "/Image/bed.png" },
                  { name: "1 bth", icon: "/Image/bath.png" },
                  { name: "1 ktchn", icon: "/Image/kitchen.png" },
                ]}
                // items={[
                //   { label: "Bathroom", price: 10.0 },
                //   { label: "Bedroom", price: 10.0 },
                //   { label: "Clean Fridge Inside", price: 10.0 },
                //   { label: "Clean Fridge Oven", price: 10.0 },
                // ]}
                onDelete={handleDeleteService}
                onClose={onClose}
                isSticky={true}
                // Replace the empty onQuantityChange handler with this:
                onQuantityChange={(index, value) => {
                  setMoveInOutItems(prevItems => {
                    const newItems = [...prevItems];
                    newItems[index] = {
                      ...newItems[index],
                      quantity: value
                    };
                    return newItems;
                  });
                }}
                // Update the items prop to use cartItems:
                items={moveInOutItems}
              />
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
                <span className="text-base text-black-secondary">
                  Amount to pay
                </span>
              </div>
              <button className="w-52 md:w-80 h-14 bg-green-primary text-white md:py-4 md:px-11 rounded-lg font-circular-std hover:bg-green-secondary transition-colors">
                Confirm & Add Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
