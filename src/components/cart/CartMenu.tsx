import React, { useState } from 'react';
import { CartHeader, ServiceItem, AdditionalInfo, PriceDetails, UploadImages, PromoCode } from './CartComponents';

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
    console.log('Delete service');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-[606px] bg-white shadow-xl transform transition-transform">
        <div className="flex flex-col h-full">
          <CartHeader onClose={onClose} />
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <ServiceItem
                name="Regular House Cleaning"
                rating={4.0}
                rooms={['1 bdr', '1 bth', '1 ktchn']}
                items={[
                  { label: "Bathroom", quantity: 1.5, price: 10.00 },
                  { label: "Bedroom", quantity: 1, price: 10.00 },
                ]}
                onDelete={handleDeleteService}
              />
              
              <ServiceItem
                name="Move In Move Out"
                rating={4.0}
                rooms={['1 bdr', '1 bth', '1 ktchn']}
                items={[
                  { label: "Bathroom", quantity: 1.5, price: 10.00 },
                  { label: "Bedroom", quantity: 1, price: 10.00 },
                  { label: "Clean Fridge Inside", quantity: 1, price: 10.00 },
                  { label: "Clean Fridge Oven", quantity: 1, price: 10.00 },
                ]}
                onDelete={handleDeleteService}
              />
            </div>

            <AdditionalInfo
              items={[
                {
                  question: "Do you have any pets?",
                  value: additionalInfo.hasPets,
                  onChange: (value) => setAdditionalInfo(prev => ({ ...prev, hasPets: value }))
                },
                {
                  question: "Do you require cleaning supplies?",
                  value: additionalInfo.needsSupplies,
                  onChange: (value) => setAdditionalInfo(prev => ({ ...prev, needsSupplies: value }))
                },
                {
                  question: "Do you have parking available for the cleaner?",
                  value: additionalInfo.hasParking,
                  onChange: (value) => setAdditionalInfo(prev => ({ ...prev, hasParking: value }))
                }
              ]}
            />

            <UploadImages />
            <PromoCode />

            <PriceDetails subTotal={220.00} visitFee={5.00} />
          </div>

          <div className="flex justify-between p-4 border-t border-gray-200 bg-white">
            <div className="flex justify-between items-center mb-3">
              <div className="flex w-56 flex-col">
                <span className="text-sm text-gray-600">Amount to pay</span>
                <span className="text-xl text-gray-light-primary font-circular-std">€ 225.00</span>
              </div>
            </div>
            <button className="w-80 bg-[#7AB259] text-white py-3 px-4 rounded-lg font-circular-std hover:bg-green-600 transition-colors relative">
              Confirm & Add Address
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.74 15.53L14.26 12L10.74 8.47" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;