import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import type { RootState } from '@/types/store';

// HeaderIcon Component
interface HeaderIconProps {
  src: string;
  alt: string;
  badgeCount?: number;
}

export const HeaderIcon = ({ src, alt, badgeCount }: HeaderIconProps) => {
  return (
    <button className="relative text-gray-700 hover:text-gray-900">
      <Image src={src} alt={alt} width={24} height={24} className="w-6 h-6" />
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {badgeCount}
        </span>
      )}
    </button>
  );
};

// LocationSelector Component
export const LocationSelector = () => {
  const location = useSelector((state: RootState) => state.user.location);

  return (
    <button className="flex items-center text-gray-700 hover:text-gray-900">
      <Image src="/Image/location.png" alt="Location" width={24} height={24} className="w-6 h-6" />
      <span className="text-sm font-circular-std font-medium ">{location}</span>
    </button>
  );
};

// NavLink Component
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className=" text-base font-normal text-black-secondary font-circular-std h-full flex items-center"
    >
      {children}
    </Link>
  );
};
