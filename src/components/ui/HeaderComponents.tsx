import React from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/types/types';
import { setLocation } from '@/store/slices/userSlice';

interface HeaderIconProps {
  src: string;
  alt: string;
  badgeCount?: number;
  onClick?: () => void;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const HeaderIcon: React.FC<HeaderIconProps> = ({ src, alt, badgeCount, onClick }: HeaderIconProps) => {
  return (
    <button 
      onClick={onClick} 
      className="relative inline-block"
    >
      <Image src={src} alt={alt} width={24} height={24} className="w-6 h-6" />
      {typeof badgeCount === 'number' && badgeCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badgeCount}
        </span>
      )}
    </button>
  );
};

export const LocationSelector: React.FC = () => {
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.user.location);

  return (
    <button 
      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
      onClick={() => dispatch(setLocation('New York'))}
    >
      <Image
        src="/Image/location.png"
        alt="Location"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="font-circular-std">{location}</span>
      <Image
        src="/Image/arrow-down.png"
        alt="Select"
        width={16}
        height={16}
        className="w-4 h-4"
      />
    </button>
  );
};

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`font-circular-std text-base transition-colors ${
        isActive
          ? 'text-gray-900'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </a>
  );
};
