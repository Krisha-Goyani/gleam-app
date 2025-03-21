import React, { useState } from "react";
import Image from "next/image";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/types/types";
import { HeaderIcon, LocationSelector, NavLink } from "./HeaderComponents";
import CartMenu from '@/components/cart/CartMenu';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="hidden md-lg:block border-b border-gray-200">
      <div className="container-main">
        {/* Top Row */}
        <div className="px-4 md:px-16">
          <div className="flex items-center justify-between pt-4 pb-2">
            {/* Left - Location */}
            <div className="block w-1/3">
              <LocationSelector />
            </div>

            {/* Center - Logo */}
            <div className="w-1/3 flex justify-center">
              <a href="#" className="flex-shrink-0">
                <Image
                  src="/Image/logo.png"
                  alt="Gleam"
                  title="gleam"
                  width={165}
                  height={73}
                  priority
                  className="w-40 h-16 object-contain"
                />
              </a>
            </div>

            {/* Right - Icons */}
            <div className="w-1/3 flex items-center justify-end gap-11">
              <HeaderIcon src="/Image/search.png" alt="Search" title="search" />
              <HeaderIcon src="/Image/heart.png" alt="Favorites" title="favorites" />
              <HeaderIcon src="/Image/notification.png" alt="Notifications" title="notifications" />
              <HeaderIcon 
                src="/Image/cart.png" 
                alt="Cart" 
                title="cart"
                onClick={() => setIsCartOpen(true)}
              /> 
              <HeaderIcon src="/Image/profile.png" alt="Notifications" title="profile" />
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
      <CartMenu 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  );
};

export default Header;
