/* eslint-disable no-unused-vars */
// src/Components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="py-8 px-4"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-brand-primary headline-medium">Comunicar</h2>
          <p className="text-surface-variant body-large">
            Liderazgo en comunicación minera, conectando voluntades.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="label-large text-on-surface">Navegación</h3>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="text-surface-variant hover:text-primary">Inicio</Link></li>
            <li><Link to="/about" className="text-surface-variant hover:text-primary">Nosotros</Link></li>
            <li><Link to="/services" className="text-surface-variant hover:text-primary">Servicios</Link></li>
            <li><Link to="/case-studies" className="text-surface-variant hover:text-primary">Casos de Éxito</Link></li>
            <li><Link to="/contact" className="text-surface-variant hover:text-primary">Contáctanos</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="label-large text-on-surface">Contacto</h3>
          <p className="text-surface-variant body-large">
            Email: <a href="mailto:info@comuncar.com" className="hover:text-primary">gjuarez@comunicarconsultora.com</a><br />
            Email: <a href="mailto:info@comuncar.com" className="hover:text-primary">ftorti@comunicarconsultora.com</a><br />
            Teléfonos: +54 264 506 6666 / +54 264 465 9298<br />
            Dirección: San Juan, Argentina
          </p>
        </div>
{/*         <div className="flex flex-col gap-2">
          <h3 className="label-large text-on-surface">Síguenos</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="https://linkedin.com" className="text-surface-variant hover:text-primary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="text-surface-variant hover:text-primary" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="text-center pt-8 mt-8 text-surface-variant body-large">
        © {new Date().getFullYear()} Comunicar. Todos los derechos reservados.
      </div>
    </motion.footer>
  );
};

export default Footer;