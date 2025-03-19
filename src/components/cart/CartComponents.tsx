import React from 'react';
import Image from 'next/image';

// Component Interfaces
export interface ServiceItemProps {
  name: string;
  rating: number;
  rooms: string[];
  items: {
    label: string;
    quantity: number;
    price: number;
  }[];
  onDelete: () => void;
}

export interface InfoItem {
  question: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export interface PriceDetailsProps {
  subTotal: number;
  visitFee: number;
}

// Cart Components
export const CartHeader = ({ onClose }: { onClose: () => void }) => (
  <div className="flex items-center justify-between p-4 border-b border-gray-200">
    <h2 className="text-xl font-circular-std text-gray-light-primary">Shopping Cart</h2>
    <button onClick={onClose} className="p-2">
      <Image src="/Image/delete.png" alt="Close" width={24} height={24} className="w-6 h-6" />
    </button>
  </div>
);

export const ServiceItem = ({ name, rating, rooms, items, onDelete }: ServiceItemProps) => (
  <div className="mb-6">
    <div className="flex items-start justify-between mb-4">
      <div className="flex gap-4">
        <Image 
          src="/Image/cart-img.png" 
          alt={name} 
          width={80} 
          height={80} 
          className="rounded-lg object-cover"
        />
        <div>
          <h3 className="font-circular-std text-lg mb-1 text-gray-light-primary">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-yellow-400">★</span>
            <span>{rating}</span>
            {rooms.map((room, index) => (
              <React.Fragment key={index}>
                <span>•</span>
                <span>{room}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <button onClick={onDelete} className="p-2">
        <Image src="/Image/delete.png" alt="Delete" width={20} height={20} />
      </button>
    </div>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-gray-600">{item.label}</span>
          <div className="flex items-center gap-3">
            <select 
              className="bg-[#E8F5E9] text-green-600 border border-green-100 rounded-lg px-3 py-1 text-sm min-w-[60px]"
              value={item.quantity}
            >
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
            </select>
            <span className="text-gray-900 min-w-[80px] text-right">€ {item.price.toFixed(2)}</span>
            <button className="p-1">
              <Image src="/Image/delete.png" alt="Remove" width={16} height={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
    {name === "Regular House Cleaning" && (
      <div className="mt-4 bg-purple-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Clean Regularly, Save More</h4>
        <p className="text-sm text-gray-600 mb-3">
          Subscribe for regular cleanings and keep your home spotless. Enjoy automatic bookings and save time and money
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm">
          Subscribe and save more
        </button>
      </div>
    )}
  </div>
);

export const AdditionalInfo = ({ items }: { items: InfoItem[] }) => (
  <div className="p-4 border-b border-gray-200">
    <h3 className="font-circular-std text-gray-light-primary text-lg mb-3">Additional Information</h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-gray-600">{item.question}</span>
          <div className="flex gap-2">
            <button 
              className={`w-12 h-6 rounded-full ${item.value ? 'bg-green-primary' : 'bg-gray-200'}`}
              onClick={() => item.onChange(!item.value)}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PriceDetails = ({ subTotal, visitFee }: PriceDetailsProps) => (
  <div className="p-4">
    <h3 className="font-circular-std text-gray-light-primary text-lg mb-3">Price Details</h3>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-600">Sub total</span>
        <span className="text-gray-900">€ {subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Visit fee</span>
        <span className="text-gray-900">€ {visitFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-semibold mt-4">
        <span className='text-gray-light-primary'>Total</span>
        <span>€ {(subTotal + visitFee).toFixed(2)}</span>
      </div>
    </div>
  </div>
);

export const UploadImages = () => (
  <div className="p-4 border-b border-gray-200">
    <h3 className="font-circular-std text-gray-light-primary text-lg mb-3">Upload Images</h3>
    <div className="w-24 h-24 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
      <span className="text-4xl text-gray-400">+</span>
    </div>
  </div>
);

export const PromoCode = () => (
  <div className="p-4 border-b border-gray-200">
    <h3 className="font-circular-std text-gray-light-primary text-lg mb-3">Apply Promo code</h3>
    <div className="flex items-center gap-2 border rounded-lg p-2">
      <Image src="/Image/ticket.png" alt="Coupon" width={24} height={24} />
      <input 
        type="text" 
        placeholder="Select Coupon" 
        className="flex-1 outline-none text-gray-600"
      />
      <Image src="/Image/arrow-right.png" alt="Apply" width={24} height={24} />
    </div>
  </div>
);