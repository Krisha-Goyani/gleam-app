import React from "react";
import Image from "next/image";

// Component Interfaces
export interface ServiceItemProps {
  name: string;
  rating: number;
  rooms: {
    name: string;
    icon: string;
  }[];
  items: {
    label: string;
    quantity: number;
    price: number;
  }[];
  onDelete: () => void;
  isSticky?: boolean;
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
// Update the interface first
export interface ServiceItemProps {
  name: string;
  image: string;
  rating: number;
  rooms: {
    name: string;
    icon: string;
  }[];
  items: {
    label: string;
    quantity: number;
    price: number;
  }[];
  onDelete: () => void;
  onClose: () => void;
  isSticky?: boolean;
}

// In the ServiceItem component, use onClose for the close button
export const ServiceItem = ({
  name,
  image,
  rating,
  rooms,
  items,
  onDelete,
}: ServiceItemProps) => (
  <div className="relative">
    <div className="relative">
      <div className="flex justify-between mb-3">
        <div className="flex gap-4">
          <Image
            src={image}
            title="cart-img"
            alt={name}
            width={100}
            height={50}
            className="w-20 md:w-32 h-20"
          />
          <div className="flex flex-col w-[300px] md:w-[470px]">
            <div className="flex justify-between w-full">
              <h3 className="font-circular-std font-bold text-lg mb-1 text-gray-light-primary">
                {name}
              </h3>
              <Image
                src="/Image/delete.png"
                alt="Delete"
                title="delete"
                width={20}
                height={20}
                className="h-5 w-5 cursor-pointer self-center"
                onClick={onDelete}
              />
            </div>
            <div className="md:flex justify-between w-full">
              <div className="hidden md:flex items-center gap-2 text-base text-gray-light-primary font-circular-std">
                <span className="text-yellow-primary">★</span>
                <span>{rating}</span>
                {rooms.map((room, index) => (
                  <React.Fragment key={index}>
                    <span>•</span>
                    <div className="flex items-center gap-1 font-circular-std">
                      <Image
                        src={room.icon}
                        alt={room.name}
                        title="room-icon"
                        width={16}
                        height={16}
                      />
                      <span>{room.name}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-base">€ 40.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-light-secondary mb-4"></div>
    </div>

    <div className="pb-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="pb-3 border-l-4 border-blue-tertery border- pl-4 flex justify-between items-center"
        >
          <span className="text-black-light text-base font-circular-std w-24 md:w-72">
            {item.label}
          </span>
          <div className="flex items-center gap-3">
            <select
              className="bg-green-light text-black-primary font-circular-std border border-green-primary rounded-lg px-2 py-1 text-sm min-w-11 xs-md:min-w-20"
              value={item.quantity}
            >
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
            </select>
            <span className="text-black-light text-base font-circular-std min-w-[80px] text-right">
              € {item.price.toFixed(2)}
            </span>
            <button className="p-1">
              <Image
                src="/Image/delete.png"
                alt="Remove"
                title="remove"
                width={17.61}
                height={17.61}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
    {name === "Regular House Cleaning" && (
      <div className="mt-3 bg-purple-light p-3 rounded-lg mb-5">
        <h4 className="font-semibold mb-2">Clean Regularly, Save More</h4>
        <p className="text-sm text-gray-600 mb-3">
          Subscribe for regular cleanings and keep your home spotless. Enjoy
          automatic bookings and save time and money
        </p>
        <button className="bg-purple-primary h-10 w-56 text-white px-4 py-2 rounded-md text-sm">
          Subscribe and save more
        </button>
      </div>
    )}
  </div>
);

export const AdditionalInfo = ({ items }: { items: InfoItem[] }) => (
  <div className="py-5 px-2 xs-md:px-5 mt-2 ">
    <h3 className="font-circular-std text-black-secondary font-bold text-lg mb-3">
      Additional Information
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <span className="text-black-secondary text-base font-circular-std">
            {item.question}
          </span>
          <div className="flex gap-2">
            <button
              className={`w-12 h-6 rounded-full relative ${
                item.value ? "bg-green-primary" : " bg-blue-light"
              } transition-colors`}
              onClick={() => item.onChange(!item.value)}
            >
              <div
                className={`absolute top-1 w-5 h-4 bg-blue-light-secondary rounded-full transition-transform ${
                  item.value ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const PriceDetails = ({ subTotal, visitFee }: PriceDetailsProps) => (
  <div className="py-5 px-2 xs-md:px-5 mt-2">
    <h3 className="font-circular-std text-black-secondary font bold text-lg mb-3">
      Price Details
    </h3>
    <div className="font-circular-std">
      <div className="flex justify-between pb-4">
        <span className="text-black-secondary">Sub total</span>
        <span className="text-black-secondary">€ {subTotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between pb-4">
        <span className="text-black-secondary">Visit fee</span>
        <span className="text-black-secondary">€ {visitFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold border-t border-gray-light-secondary pt-4">
        <span className="text-black-secondary">Total</span>
        <span className="text-black-secondary">
          € {(subTotal + visitFee).toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);

export const UploadImages = () => (
  <div className="px-5 pt-1 pb-8 border-b-8 border-gray-light-secondary">
    <h3 className="font-circular-std text-black-secondary text-base mb-3">
      Upload Images
    </h3>
    <div className="w-28 h-28 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer">
      <span className="text-4xl text-gray-400">+</span>
    </div>
  </div>
);

export const PromoCode = () => (
  <div className="px-2 xs-md:px-5  pt-5 pb-8 border-b-8 border-gray-light-secondary">
    <h3 className="font-circular-std text-black-secondary font-bold text-lg mb-3">
      Apply Promo code
    </h3>
    <div className="flex items-center gap-2 border border-gray-secondary rounded-lg p-2">
      <Image
        src="/Image/discount-shape.png"
        title="discount"
        alt="Coupon"
        width={20}
        height={20}
      />
      <span className="font-circular-std">Select Coupon</span>
      <Image
        src="/Image/arrow-right.png"
        title="apply"
        alt="Apply"
        width={16}
        height={16}
        className="cursor-pointer ml-auto"
      />
    </div>
  </div>
);
