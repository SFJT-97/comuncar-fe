/* eslint-disable no-unused-vars */
// src/Components/Header.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const menuVariants = {
  closed: { x: '100%', opacity: 0 },
  open: { x: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 nav-bar shadow-md">
      <nav className="flex items-center justify-between px-4 py-2 w-full mx-auto">
        <div className="flex items-center">
          <Link to="/" className="text-brand-primary headline-medium flex flex-row items-center justify-center gap-x-5">
          <img
            src="/comunicarlogo.webp"
            alt="Comunicar Consultora"
            className="rounded-lg w-8"
          />
            Comunicar
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-on-surface focus:outline-none"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        <ul className="hidden md:flex items-center gap-4">
          <li><Link to="/" className="nav-item">Inicio</Link></li>
          <li><Link to="/about" className="nav-item">Nosotros</Link></li>
          <li><Link to="/services" className="nav-item">Servicios</Link></li>
          {/* Removed until built */}
          {/* <li><Link to="/case-studies" className="nav-item">Casos de Éxito</Link></li> */}
          <li>
            <Link to="/contact" className="btn-brand">
              Contáctanos
            </Link>
          </li>
        </ul>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-surface border-t border-outline shadow-lg md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <ul className="flex flex-col p-4 gap-2">
                <li>
                  <Link to="/" className="nav-item block" onClick={toggleMenu}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-item block" onClick={toggleMenu}>
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-item block" onClick={toggleMenu}>
                    Servicios
                  </Link>
                </li>
                {/* Removed until built */}
{/*                 <li>
                  <Link to="/case-studies" className="nav-item block" onClick={toggleMenu}>
                    Casos de Éxito
                  </Link>
                </li> */}
                <li>
                  <Link to="/contact" className="btn-brand mx-4 block text-center" onClick={toggleMenu}>
                    Contáctanos
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;