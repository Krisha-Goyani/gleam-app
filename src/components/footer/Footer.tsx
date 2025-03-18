import { useState } from 'react';

const Footer = () => {
  const [emailAddress, setEmailAddress] = useState('');

  return (
    <footer className="bg-blue-600 text-white">
      {/* Desktop View */}
      <div className="hidden md:block container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1 - About Us */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:opacity-80">Who we are</a></li>
              <li><a href="#" className="hover:opacity-80">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 - Need Help? */}
          <div className="col-span-2">
            <h3 className="font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:opacity-80">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-80">Privacy policy</a></li>
              <li><a href="#" className="hover:opacity-80">Refund policy</a></li>
              <li><a href="#" className="hover:opacity-80">Terms of service</a></li>
              <li><a href="#" className="hover:opacity-80">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter and Contact */}
          <div className="col-span-8">
            <div className="flex justify-end space-x-4 mb-8">
              {/* Social Media Icons */}
              <a href="#"><img src="/instagram-icon.svg" alt="Instagram" className="h-6 w-6" /></a>
              <a href="#"><img src="/linkedin-icon.svg" alt="LinkedIn" className="h-6 w-6" /></a>
            </div>
            
            <div className="flex justify-end space-x-4 mb-8">
              {/* Payment Method Icons */}
              <img src="/mastercard-icon.svg" alt="Mastercard" className="h-8" />
              <img src="/paypal-icon.svg" alt="PayPal" className="h-8" />
              <img src="/amex-icon.svg" alt="American Express" className="h-8" />
              <img src="/applepay-icon.svg" alt="Apple Pay" className="h-8" />
              <img src="/gpay-icon.svg" alt="Google Pay" className="h-8" />
            </div>

            <div className="flex justify-between items-end">
              <div className="max-w-sm">
                <h3 className="text-sm mb-2">Sign up to our newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded text-gray-800"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600">
                    Sign up
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm mb-3">Reliable at-home services for all your cleaning needs</p>
                <div className="flex gap-4">
                  <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600">
                    Contact us
                  </button>
                  <button className="border border-white px-6 py-2 rounded hover:bg-blue-700">
                    +34 638 11 53 14
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm">
          Copyright © 2024, GleamYourCasa
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-6 py-8">
        <div className="space-y-6">
          {/* About Us Section */}
          <div>
            <h3 className="font-semibold mb-3 flex justify-between items-center">
              About Us
              <span className="text-xl">▼</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:opacity-80">Who we are</a></li>
              <li><a href="#" className="hover:opacity-80">Blog</a></li>
            </ul>
          </div>

          {/* Need Help Section */}
          <div>
            <h3 className="font-semibold mb-3 flex justify-between items-center">
              Need Help?
              <span className="text-xl">▼</span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:opacity-80">Contact Us</a></li>
              <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Refund Policy</a></li>
              <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-80">FAQs</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#"><img src="/instagram-icon.svg" alt="Instagram" className="h-6 w-6" /></a>
            <a href="#"><img src="/linkedin-icon.svg" alt="LinkedIn" className="h-6 w-6" /></a>
          </div>

          {/* Payment Methods */}
          <div className="flex gap-4">
            <img src="/mastercard-icon.svg" alt="Mastercard" className="h-8" />
            <img src="/paypal-icon.svg" alt="PayPal" className="h-8" />
            <img src="/amex-icon.svg" alt="American Express" className="h-8" />
            <img src="/applepay-icon.svg" alt="Apple Pay" className="h-8" />
            <img src="/gpay-icon.svg" alt="Google Pay" className="h-8" />
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm mb-2">Sign up to our newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded text-gray-800"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <button className="bg-green-500 px-6 py-2 rounded hover:bg-green-600">
                Sign up
              </button>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-sm mb-2">Get in touch</h3>
            <p className="text-sm mb-3">Reliable at-home services for all your constructional needs</p>
            <div className="space-y-2">
              <button className="w-full bg-green-500 px-6 py-2 rounded hover:bg-green-600">
                Contact us
              </button>
              <button className="w-full border border-white px-6 py-2 rounded hover:bg-blue-700">
                +34 638 11 53 14
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