/* eslint-disable no-unused-vars */
// src/Components/Clientele.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Clientele.css'; // We'll create this CSS file for the animation

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// List of placeholder client logos
// IMPORTANT: Replace these with actual logo image URLs (e.g., from your public folder)
const clients = [
  { name: 'Andacollo', logoUrl: '/andacollo-logo.webp' },
  { name: 'Campogrande', logoUrl: '/campogrande-logo.webp' },
  { name: 'Castillian Resources', logoUrl: '/castillian-logo.webp' },
  { name: 'Deprominsa', logoUrl: '/deprominsa-logo.webp' },
  { name: 'Energia Mineral', logoUrl: '/energia-mineral-logo.webp' },
  { name: 'Falconbridge', logoUrl: '/falconbridge-logo.webp' },
  { name: 'Glencore Pachon', logoUrl: '/glencore-logo.webp' },
  { name: 'Golden Mining', logoUrl: '/golden-logo.webp' },
  { name: 'Ivisa SA', logoUrl: '/ivisa-logo.webp' },
  { name: 'Latin American Minerals Inc', logoUrl: '/latam-metals.webp' },
  { name: 'Libero Copper', logoUrl: '/libero-logos.webp' },
  { name: 'Minera Andes', logoUrl: '/minera-andes-logo.webp' },
  { name: 'Panedile', logoUrl: '/panedile-logo.webp' },
  { name: 'Veladero', logoUrl: '/veladero.webp' },
  // Duplicate clients to ensure continuous loop without a visible jump
  { name: 'Andacollo', logoUrl: '/andacollo-logo.webp' },
  { name: 'Campogrande', logoUrl: '/campogrande-logo.webp' },
  { name: 'Castillian Resources', logoUrl: '/castillian-logo.webp' },
  { name: 'Deprominsa', logoUrl: '/deprominsa-logo.webp' },
  { name: 'Energia Mineral', logoUrl: '/energia-mineral-logo.webp' },
  { name: 'Falconbridge', logoUrl: '/falconbridge-logo.webp' },
  { name: 'Glencore Pachon', logoUrl: '/glencore-logo.webp' },
  { name: 'Golden Mining', logoUrl: '/golden-logo.webp' },
  { name: 'Ivisa SA', logoUrl: '/ivisa-logo.webp' },
  { name: 'Latin American Minerals Inc', logoUrl: '/latam-metals.webp' },
  { name: 'Libero Copper', logoUrl: '/libero-logos.webp' },
  { name: 'Minera Andes', logoUrl: '/minera-andes-logo.webp' },
  { name: 'Panedile', logoUrl: '/panedile-logo.webp' },
  { name: 'Veladero', logoUrl: '/veladero.webp' },
];

const NuestraClientela = () => {
  return (
    <motion.section
      className="surface py-12 px-4 overflow-hidden" // overflow-hidden is crucial for marquee
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="headline-medium mb-4 text-brand-primary">
          Nuestra Clientela
        </h2>
        <p className="body-large text-on-surface-variant">
          COMUNICAR CONSULTORA ha diseñado y conducido estrategias de
          comunicación para las más importantes empresas e instituciones en
          San Juan y en otras provincias.
        </p>
      </div>

      <div className="logos-marquee-container">
        <div className="logos-marquee">
          {clients.map((client, index) => (
            <div key={index} className="logo-item flex-shrink-0 mx-4">
              <img
                src={client.logoUrl}
                alt={`${client.name} Logo`}
                className="h-20 object-contain filter hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NuestraClientela;