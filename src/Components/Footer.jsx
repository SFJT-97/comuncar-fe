/* eslint-disable no-unused-vars */
// src/Components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdEmail, MdOutlinePhoneIphone, MdLocationPin } from "react-icons/md";

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
            Conectamos voluntades a través de estrategias de relaciones institucionales, comunitarias y con medios, impulsando el éxito de proyectos mineros.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="label-xl text-on-surface text-2">Navegación</h3>
          <ul className="flex flex-col gap-x-1 gap-y-4 indent-5 md:indent-0">
            <li><Link to="/" className="text-surface-variant hover:text-primary hover:underline">Inicio</Link></li>
            <li><Link to="/about" className="text-surface-variant hover:text-primary hover:underline">Nosotros</Link></li>
            <li><Link to="/services" className="text-surface-variant hover:text-primary hover:underline">Servicios</Link></li>
            <li><Link to="/case-studies" className="text-surface-variant hover:text-primary hover:underline">Casos de Éxito</Link></li>
            <li><Link to="/contact" className="text-surface-variant hover:text-primary hover:underline">Contáctanos</Link></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="label-xl text-on-surface">Contacto</h3>
          <p className="text-surface-variant body-large space-y-2">
            <div className="flex flex-row items-center gap-x-1">
              <MdEmail /> Emails:
            </div>
            <ul className="indent-10 space-y-2">
              <li>
                <a href="gjuarez@comunicarconsultora.com" className="hover:text-primary">gjuarez@comunicarconsultora.com</a><br />
              </li>
              <li>
                <a href="mailto:info@comuncar.com" className="hover:text-primary">ftorti@comunicarconsultora.com</a><br />
              </li>
            </ul>
            <div className="flex flex-row items-center gap-x-1">
              <MdOutlinePhoneIphone /> Teléfonos
            </div>
            <ul className="indent-10 space-y-2">
              <li>+54 264 506 6666</li>
              <li>+54 264 465 9298</li>
            </ul>
            <div className="flex flex-row items-center gap-x-1">
              <MdLocationPin /> Dirección: San Juan, Argentina
            </div>
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