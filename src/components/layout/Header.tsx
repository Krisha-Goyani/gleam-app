import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import type { RootState } from "@/types/types";
import { HeaderIcon, LocationSelector, NavLink } from "../ui/HeaderComponents";

const Header = () => {
  const { favorites, notifications, cartItems } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <header className="border-b border-gray-200">
      <div className="container-main">
        {/* Top Row */}
        <div className="px-4 md:px-16">
          <div className="flex items-center justify-between pt-4 pb-2">
            {/* Left - Location */}
            <div className="hidden md:block w-1/3">
              <LocationSelector />
            </div>

            {/* Center - Logo */}
            <div className="w-1/3 flex md:justify-center">
              <a href="#" className="flex-shrink-0">
                <Image
                  src="/Image/logo.png"
                  alt="Gleam"
                  width={150}
                  height={35}
                  priority
                  className="w-40 h-18 object-contain"
                />
              </a>
            </div>

            {/* Right - Icons */}
            <div className="hidden md:block">
            <div className="w-1/3 flex items-center justify-end gap-11">
              <HeaderIcon src="/Image/search.png" alt="Search" />
              <HeaderIcon
                src="/Image/heart.png"
                alt="Favorites"
                badgeCount={favorites?.length || 0}
              />
              <HeaderIcon
                src="/Image/notification.png"
                alt="Notifications"
                badgeCount={notifications || 0}
              />
              <HeaderIcon
                src="/Image/cart.png"
                alt="Cart"
                badgeCount={cartItems || 0}
              />
              <HeaderIcon src="/Image/profile.png" alt="Profile" />
            </div>
            </div>
            <div className="md:hidden">
              <Image src="/Image/menu.png" alt="Menu" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Bottom Row - Navigation */}
        <div className="hidden md:block px-4 md:px-16">
          <nav className="flex  justify-center justify-self-center gap-10 pb-7">
            <NavLink href="#">Cleaning Services</NavLink>
            <NavLink href="#">Cleaning Tips</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Contact Us</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
