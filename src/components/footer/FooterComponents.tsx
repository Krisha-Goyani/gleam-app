// src/components/footer/FooterComponents.tsx
import React from "react";
import Image from "next/image";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<LinkProps> = ({ href, children }) => (
  <li>
    <a href={href} className="font-normal hover:opacity-80">
      {children}
    </a>
  </li>
);

interface SocialIconProps {
  src: string;
  alt: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <a href="#">
    <Image
      src={src}
      alt={alt}
      title={alt}
      width={24}
      height={24}
      className="h-5 w-5"
    />
  </a>
);

interface PaymentIconProps {
  src: string;
  alt: string;
}

export const PaymentIcon: React.FC<PaymentIconProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    title={alt}
    width={56}
    height={35}
    className="h-8 w-14 xs-md:w-16 border border-white-primary rounded-md"
  />
);

export const NewsletterSignup: React.FC<{
  emailAddress: string;
  setEmailAddress: (email: string) => void;
}> = ({ emailAddress, setEmailAddress }) => (
  <div>
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 w-56 md-lg:w-[470px] h-11 md-lg:h-14 px-4 py-2 border border-white bg-blue-secondary rounded-lg text-white text-lg"
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
      />
  </div>
);

// Add this to FooterComponents.tsx
export const Line: React.FC = () => (
  <Image
    src="/Image/line.png"
    height={1}
    width={360}
    className="w-full"
    alt="line"
    title="line"
  />
);
