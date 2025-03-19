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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-[606px] bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-circular-std text-gray-light-primary">
              Cart
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="px-5 pt-5 border-b-8 border-gray-light-secondary">
              <ServiceItem
                name="Regular House Cleaning"
                rating={4.0}
                image="/Image/cart-img.png"
                rooms={[
                  { name: "1 bdr", icon: "/Image/bed.png" },
                  { name: "1 bth", icon: "/Image/bath.png" },
                  { name: "1 ktchn", icon: "/Image/kitchen.png" },
                ]}
                items={[
                  { label: "Bathroom", quantity: 1.5, price: 10.0 },
                  { label: "Bedroom", quantity: 1, price: 10.0 },
                ]}
                onDelete={handleDeleteService}
                isSticky={true}
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
                items={[
                  { label: "Bathroom", quantity: 1.5, price: 10.0 },
                  { label: "Bedroom", quantity: 1, price: 10.0 },
                  { label: "Clean Fridge Inside", quantity: 1, price: 10.0 },
                  { label: "Clean Fridge Oven", quantity: 1, price: 10.0 },
                ]}
                onDelete={handleDeleteService}
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

          <div className="flex justify-between px-5 py-4 mt-2 bg-white">
            <div className="flex justify-between items-center mb-3">
              <div className="flex w-56 flex-col text-black-secondary">
                <span className="text-xl text-black-secondary font-circular-std">
                  € 225.00
                </span>
                <span className="text-base text-black-secondary">
                  Amount to pay
                </span>
              </div>
            </div>
            <button className="w-80 h-14 bg-green-primary text-white py-4 px-11 rounded-lg font-circular-std hover:bg-green-600 transition-colors relative">
              Confirm & Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
