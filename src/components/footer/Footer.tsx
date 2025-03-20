import { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState("");
  // Add state for section toggles
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(true);
  const [isNeedHelpOpen, setIsNeedHelpOpen] = useState(true);

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
                <li>
                  <a href="#" className="font-normal hover:opacity-80">
                    Who we are
                  </a>
                </li>
                <li>
                  <a href="#" className="font-normal hover:opacity-80">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 - Need Help? */}
            <div className="w-48">
              <h3 className="font-semibold mb-6">Need Help?</h3>
              <ul className="flex flex-col gap-6">
                <li>
                  <a href="#" className="hover:opacity-80">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">
                    Refund policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-80">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {/* Column 3 - Newsletter and Contact */}
            <div className="">
              <div className="flex flex-col justify-end  mb-12">
                {/* Social Media Icons */}
                <div className="flex justify-end space-x-4 mb-8">
                  <a href="#">
                    <Image
                      src="/Image/insta.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="h-5 w-5 "
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/Image/ln.png"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="h-5 w-5"
                    />
                  </a>
                </div>

                <div className="flex justify-end space-x-4 mb-8">
                  {/* Payment Method Icons */}
                  <Image
                    src="/Image/mastercard.png"
                    alt="Mastercard"
                    width={56}
                    height={35}
                    className="h-8 border border-white-primary rounded-md"
                  />
                  <Image
                    src="/Image/payPal.png"
                    alt="PayPal"
                    width={56}
                    height={35}
                    className="h-8 border border-white-primary rounded-md"
                  />
                  <Image
                    src="/Image/amex.png"
                    alt="American Express"
                    width={56}
                    height={35}
                    className="h-8 border border-white-primary rounded-md"
                  />
                  <Image
                    src="/Image/applePay.png"
                    alt="Apple Pay"
                    width={56}
                    height={35}
                    className="h-8 border border-white-primary rounded-md"
                  />
                  <Image
                    src="/Image/pay.png"
                    alt="Google Pay"
                    width={56}
                    height={35}
                    className="h-8 border border-white-primary rounded-md"
                  />
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl mb-2">Get in touch</p>
                <p className="text-lg mb-7">
                  Reliable at-home services for all your cleaning needs
                </p>
                <div className="flex gap-4">
                  <button className="bg-green-primary w-52 h-14 px-6 py-2 rounded-lg hover:bg-green-600">
                    Contact us
                  </button>
                  <button className="border border-white w-52 h-14 px-6 py-2 rounded-lg hover:bg-blue-700">
                    +34 638 11 53 14
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10 justify-between items-end">
          <div className="">
            <h3 className="text-xl font-circular-std  mb-2">Sign up to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 w-[470px] h-14 px-4 py-2 border border-white bg-blue-secondary rounded-lg text-white text-lg"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <button className="bg-green-primary  w-52 h-14 px-6 py-2 rounded-lg hover:bg-green-600">
                Sign up
              </button>
            </div>
          </div>
        <div className="mt-8 text-base">Copyright © 2024, GleamYourCasa</div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md-lg:hidden py-8 px-4 sm:px-6 md:px-8 md-lg:px-16">
        <div className="space-y-6">
          {/* About Us Section */}
          <div>
            <h3 
              className="font-semibold mb-3 flex gap-3 items-center cursor-pointer"
              onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
            >
              About Us
              <span className={`text-sm transition-transform ${isAboutUsOpen ? 'rotate-0' : '-rotate-180'}`}>
                ▼
              </span>
            </h3>
            <ul className={`space-y-3 transition-all duration-300 ${isAboutUsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <li>
                <a href="#" className="hover:opacity-80">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Need Help Section */}
          <div>
            <h3 
              className="font-semibold mb-3 flex gap-3 items-center cursor-pointer"
              onClick={() => setIsNeedHelpOpen(!isNeedHelpOpen)}
            >
              Need Help?
              <span className={`text-sm transition-transform ${isNeedHelpOpen ? 'rotate-0' : '-rotate-180'}`}>
                ▼
              </span>
            </h3>
            <ul className={`space-y-3 transition-all duration-300 ${isNeedHelpOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <li>
                <a href="#" className="hover:opacity-80">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#">
              <Image
                src="/Image/insta.png"
                alt="Instagram"
                width={24}
                height={24}
                className="h-4 w-4"
              />
            </a>
            <a href="#">
              <Image
                src="/Image/ln.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="h-4 w-4"
              />
            </a>
          </div>

          {/* Payment Methods */}
          <div className="flex gap-2">
            <Image
              src="/Image/mastercard.png"
              alt="Mastercard"
              width={56}
              height={35}
              className="h-9 border border-white-primary rounded-md"
            />
            <Image
              src="/Image/payPal.png"
              alt="PayPal"
              width={56}
              height={35}
              className="h-9 border border-white-primary rounded-md"
            />
            <Image
              src="/Image/amex.png"
              alt="American Express"
              width={56}
              height={35}
              className="h-9 border border-white-primary rounded-md"
            />
            <Image
              src="/Image/applePay.png"
              alt="Apple Pay"
              width={56}
              height={35}
              className="h-9 border border-white-primary rounded-md"
            />
            <Image
              src="/Image/pay.png"
              alt="Google Pay"
              width={56}
              height={35}
              className="h-9 border border-white-primary rounded-md"
            />
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm mb-2">Sign up to our newsletter</h3>
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="w-56 h-11 flex-1 px-4 py-2 rounded text-gray-800"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <button className=" w-24 h-11 bg-green-primary py-2 rounded hover:bg-green-600">
                Sign up
              </button>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-sm mb-2">Get in touch</h3>
            <p className="text-sm mb-3">
              Reliable at-home services for all your constructional needs
            </p>

            <div className="flex gap-3 max-w-[992px]">
              <button className="w-36 h-11 bg-green-primary px-6 py-2 rounded hover:bg-green-600">
                Contact us
              </button>
              <button className="w-44 h-11 border border-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-1">
                <Image 
                  src="/Image/whatsapp.png" 
                  alt="WhatsApp" 
                  height={16} 
                  width={16}
                  className="w-4 h-4"
                /> 
                <span className=" text-lg">+34 638 11 53 14</span>
              </button>
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
