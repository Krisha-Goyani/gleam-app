import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Button from './Button';

interface DropdownProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ quantity, onQuantityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [1, 1.5, 2, 2.5, 3, 3.5, 4];

  const handleQuantitySelect = useCallback(
    (newQuantity: number) => {
      onQuantityChange(newQuantity);
      setIsOpen(false);
    },
    [onQuantityChange]
  );

  const renderDropdown = useMemo(() => (
    <div className="relative">
      <Button
        text={
          <div className="flex items-center justify-between gap-2 w-full">
            <span>{quantity > 0 ? quantity : "Select"}</span>
            <Image
              src="/Image/arrow-down.png"
              alt="arrow"
              title="arrow"
              width={16}
              height={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        }
        className={`h-8 w-20 px-2 hover:border-gray-tertary transition-colors min-w-[100px] text-center flex items-center justify-between gap-2 
          ${quantity > 0 ? "bg-green-light border border-green-primary text-black-primary" : "bg-transparent border border-gray-300 text-gray-600 hover:bg-gray-50"}
          font-circular-std rounded-lg text-sm relative`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              className={`py-2 px-4 hover:bg-gray-50 cursor-pointer ${option === quantity ? "bg-green-primary text-white" : ""}`}
              onClick={() => handleQuantitySelect(option)}
            >
              {option.toFixed(1)}
            </div>
          ))}
        </div>
      )}
      {quantity > 0 && (
        <Image
          src="/Image/cross-icon.png"
          alt="cross"
          title="cross"
          width={16}
          height={16}
          className="absolute -top-2 -right-2 cursor-pointer"
          onClick={() => handleQuantitySelect(0)}
        />
      )}
    </div>
  ), [isOpen, quantity, handleQuantitySelect]);

  return renderDropdown;
};

export default Dropdown;