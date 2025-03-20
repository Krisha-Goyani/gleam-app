import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/types";

interface HeaderIconProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const HeaderIcon: React.FC<HeaderIconProps> = ({
  src,
  alt,  
  onClick,
}: HeaderIconProps) => {
  return (
    <button onClick={onClick} className="relative inline-block">
      <Image
        src={src}
        title="header-icon"
        alt={alt}
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
  );
};

export const LocationSelector: React.FC = () => {
  const location = useSelector((state: RootState) => state.user.location);

  return (
    <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
      <Image
        src="/Image/location.png"
        alt="Location"
        title="location"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="font-circular-std">{location}</span>
      <Image
        src="/Image/arrow-down.png"
        alt="Select"
        title="select"
        width={16}
        height={16}
        className="w-4 h-4"
      />
    </button>
  );
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a
      href={href}
      className="font-circular-std text-base transition-colors text-gray-600 hover:text-gray-900"
    >
      {children}
    </a>
  );
};
