import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sweet Delights</h3>
            <p className="text-gray-400">
              Crafting moments of joy through delicious pastries and exceptional service since 1995.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@sweetdelights.com
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                123 Baker Street, Sweetville
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sweet Delights. All rights reserved.</p>
          <p className="mt-2">
            Design & Developed by{' '}
            <a 
              href="https://parvej.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-rose-500 hover:text-rose-400 transition-colors"
            >
              Parvej Khan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;