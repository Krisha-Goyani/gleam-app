import { useState } from "react";

import {
  FooterLink,
  SocialIcon,
  PaymentIcon,
  NewsletterSignup,
  Line,
} from "./FooterComponents";
import Button from "../Button";

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  // Add state for section toggles
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isNeedHelpOpen, setIsNeedHelpOpen] = useState(false);

  // Define data arrays
  const aboutUsLinks = [
    { href: "#", label: "Who we are" },
    { href: "#", label: "Blog" },
  ];

  const needHelpLinks = [
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Privacy policy" },
    { href: "#", label: "Refund policy" },
    { href: "#", label: "Terms of service" },
    { href: "#", label: "FAQs" },
  ];

  const socialIcons = [
    { src: "/Image/insta.png", alt: "Instagram" },
    { src: "/Image/ln.png", alt: "LinkedIn" },
  ];

  const paymentIcons = [
    { src: "/Image/mastercard.png", alt: "Mastercard" },
    { src: "/Image/payPal.png", alt: "PayPal" },
    { src: "/Image/amex.png", alt: "American Express" },
    { src: "/Image/applePay.png", alt: "Apple Pay" },
    { src: "/Image/pay.png", alt: "Google Pay" },
  ];

  // Define button data
  const buttons = [
    {
      text: "Contact us",
      className:
        "bg-green-primary w-52 h-11 md-lg:h-14 md-lg:px-6 md-lg:py-2 rounded-lg hover:bg-green-secondary",
    },
    {
      text: "+34 638 11 53 14",
      className:
        "border border-white w-52 h-11 md-lg:h-14 md-lg:px-6 md-lg:py-2 rounded-lg hover:bg-blue-700",
    },
    {
      text: "Sign up",
      className:
        "bg-green-primary w-24 h-11 md-lg:w-52 md-lg:h-14 md-lg:px-6 md-lg:py-2 rounded-lg hover:bg-green-secondary",
    },
  ];

  return (
    <footer className="bg-blue-secondary  text-white">
      {/* Desktop View */}
      <div className="hidden md-lg:block container px-4 sm:px-6 md:px-8 md-lg:px-16 mx-auto pt-16 py-8">
        <div className="flex justify-between">
          <div className="flex gap-16">
            {/* Column 1 - About Us */}
            <div className="w-48">
              <h3 className="font-bold mb-6">About Us</h3>
              <ul className="flex flex-col gap-6">
                {aboutUsLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
            {/* Column 2 - Need Help? */}
            <div className="w-48">
              <h3 className="font-semibold mb-6">Need Help?</h3>
              <ul className="flex flex-col gap-6">
                {needHelpLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          </div>

          <div>
            {/* Column 3 - Newsletter and Contact */}
            <div className="">
              <div className="flex flex-col justify-end  mb-12">
                {/* Social Media Icons */}
                <div className="flex cursor-pointer justify-end space-x-4 mb-8">
                  {socialIcons.map((icon, index) => (
                    <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                  ))}
                </div>

                <div className="flex cursor-pointer justify-end space-x-4 mb-8">
                  {/* Payment Method Icons */}
                  {paymentIcons.map((icon, index) => (
                    <PaymentIcon key={index} src={icon.src} alt={icon.alt} />
                  ))}
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl mb-2">Get in touch</p>
                <p className="text-lg mb-7">
                  Reliable at-home services for all your cleaning needs
                </p>
                <div className="flex gap-4">
                  {buttons.slice(0, 2).map((button, index) => (
                    <Button
                      key={index}
                      text={button.text}
                      className={button.className}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter */}
        <h3 className="text-xl font-circular-std mb-2">
          Sign up to our newsletter
        </h3>
        <div className="lg-sm:flex mt-5 justify-between items-end">
          <div className="flex gap-4">
            <NewsletterSignup
              emailAddress={emailAddress}
              setEmailAddress={setEmailAddress}
            />
            <Button text={buttons[2].text} className={buttons[2].className} />
          </div>
          <div className="mt-4 lg-sm:mt-8 text-base">
            Copyright © 2024, GleamYourCasa
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md-lg:hidden py-8 px-4 sm:px-6 md:px-8 md-lg:px-16">
        <div className="space-y-6">
          {/* About Us Section */}
          <div>
            <h3
              className="font-semibold font-circular-std mb-3 flex gap-3 items-center cursor-pointer"
              onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
            >
              About Us
              <span
                className={`text-sm transition-transform ${
                  isAboutUsOpen ? "rotate-0" : "-rotate-180"
                }`}
              >
                ▼
              </span>
            </h3>
            <ul
              className={`space-y-3 font-circular-std transition-all duration-300 ${
                isAboutUsOpen
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {aboutUsLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Need Help Section */}
          <div>
            <h3
              className="font-circular-std font-semibold mb-3 flex gap-3 items-center cursor-pointer"
              onClick={() => setIsNeedHelpOpen(!isNeedHelpOpen)}
            >
              Need Help?
              <span
                className={`text-sm transition-transform ${
                  isNeedHelpOpen ? "rotate-0" : "-rotate-180"
                }`}
              >
                ▼
              </span>
            </h3>
            <ul
              className={`font-circular-std space-y-3 transition-all duration-300 ${
                isNeedHelpOpen
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {needHelpLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Line */}
          <div>
            <Line />
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex justify-between md:justify-start md:gap-3">
            {paymentIcons.map((icon, index) => (
              <PaymentIcon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>

          {/* Newsletter Signup */}
          <h3 className="text-xl font-circular-std mb-2">
            Sign up to our newsletter
          </h3>
          <div className="flex gap-4">
            <NewsletterSignup
              emailAddress={emailAddress}
              setEmailAddress={setEmailAddress}
            />
            <Button text={buttons[2].text} className={buttons[2].className} />
          </div>

          {/* Line */}
          <div>
            <Line />
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="font-circular-std text-sm mb-2">Get in touch</h3>
            <p className="font-circular-std text-sm mb-3">
              Reliable at-home services for all your constructional needs
            </p>

            <div className="flex gap-3 max-w-[992px]">
              {buttons.slice(0, 2).map((button, index) => (
                <Button
                  key={index}
                  text={button.text}
                  className={button.className}
                />
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center pt-4">
            Copyright © 2024, GleamYourCasa
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
