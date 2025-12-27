'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { MessageCircle, Menu, X } from 'lucide-react'; // Import Menu and X icons
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const whatsappUrl = `https://api.whatsapp.com/send?phone=593123456789&text=${encodeURIComponent("Hola BACSS, estoy interesado en sus servicios de software.")}`;

  const navLinks = (
    <>
      <Link href="/#servicios" className="hover:text-bacss-gold transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
      <Link href="/#nosotros" className="hover:text-bacss-gold transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
      <Link href="/#contacto" className="hover:text-bacss-gold transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
    </>
  );

  return (
    <header className="bg-gray-100/80 dark:bg-bacss-dark-gray/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 text-black dark:text-white">
        <Link href="/" className="text-2xl font-bold text-bacss-gold tracking-wider">
          <Image src="/bacss_logo.png" alt="BACSS S.A.S. Logo" width={120} height={40} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks}
        </div>

        <div className="flex items-center space-x-2">
            <ThemeToggle />
            <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full items-center space-x-2 transition-transform duration-300 hover:scale-105"
            >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
            </a>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 dark:bg-bacss-dark-gray absolute top-full left-0 w-full shadow-lg pb-4"
          >
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
