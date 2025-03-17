import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/store";
import { HeaderIcon, LocationSelector, NavLink } from "../ui/HeaderComponents";

const Header = () => {
  const { favorites, notifications, cartItems } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <header className="border-b border-gray-200 container-main">
      {/* Top Row */}
      <div className="px-16">
        <div className="flex items-center justify-between pt-4 pb-2">
          {/* Left - Location */}
          <div className="w-1/3">
            <LocationSelector />
          </div>

          {/* Center - Logo */}
          <div className="w-1/3 flex justify-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Image/logo.png"
                alt="Gleam"
                width={150}
                height={35}
                priority
                className="w-40 h-18 object-contain"
              />
            </Link>
          </div>

          {/* Right - Icons */}
          <div className="w-1/3 flex items-center justify-end gap-11">
            <HeaderIcon src="/Image/search.png" alt="Search" />
            <HeaderIcon
              src="/Image/heart.png"
              alt="Favorites"
              badgeCount={favorites.length}
            />
            <HeaderIcon
              src="/Image/notification.png"
              alt="Notifications"
              badgeCount={notifications}
            />
            <HeaderIcon
              src="/Image/cart.png"
              alt="Cart"
              badgeCount={cartItems}
            />
            <HeaderIcon src="/Image/profile.png" alt="Profile" />
          </div>
        </div>
        {/* Bottom Row - Navigation */}
        <nav className="flex  justify-center justify-self-center gap-10 pb-7">
          <NavLink href="">
            <span className="flex items-center gap-1">
              Cleaning Services
              <Image
                src="/Image/arrow-down.png"
                alt="Dropdown"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </span>
          </NavLink>
          <NavLink href="">Cleaning Tips</NavLink>
          <NavLink href="">About Us</NavLink>
          <NavLink href="">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
