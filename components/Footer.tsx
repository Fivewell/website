import { Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 py-6">
          {/* Copyright */}
          <div className="text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} FiveWell Africa. All rights reserved.
            <span className="block sm:inline">
              {' '}|{' '}
              <Link href="/privacy-policy" className="hover:underline underline text-blue-400 ml-1">
                Privacy Policy
              </Link>
            </span>
          </div>
          
          {/* Social Icons */}
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-6">
            <p className="text-center sm:text-left text-sm sm:text-base">Connect with us:</p>
            <div className="flex justify-center space-x-4 sm:space-x-3">
              <a
                href="https://www.instagram.com/fivewell.africa?igsh=MWRqdnc2YW8ycW03eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/FivewellAfrica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/fivewell-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:info@fivewellafrica.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="tel:+254741865915"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
