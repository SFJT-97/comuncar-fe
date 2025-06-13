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
  { name: 'YPF', logoUrl: 'https://via.placeholder.com/150x80?text=YPF' },
  { name: 'Mercado Libre', logoUrl: 'https://via.placeholder.com/150x80?text=Mercado+Libre' },
  { name: 'BBVA Argentina', logoUrl: 'https://via.placeholder.com/150x80?text=BBVA+Argentina' },
  { name: 'Globant', logoUrl: 'https://via.placeholder.com/150x80?text=Globant' },
  { name: 'Grupo OSDE', logoUrl: 'https://via.placeholder.com/150x80?text=Grupo+OSDE' },
  { name: 'Banco San Juan', logoUrl: 'https://via.placeholder.com/150x80?text=Banco+San+Juan' },
  { name: 'Arcor', logoUrl: 'https://via.placeholder.com/150x80?text=Arcor' },
  { name: 'Loma Negra', logoUrl: 'https://via.placeholder.com/150x80?text=Loma+Negra' },
  { name: 'Genneia', logoUrl: 'https://via.placeholder.com/150x80?text=Genneia' },
  { name: 'PedidosYa', logoUrl: 'https://via.placeholder.com/150x80?text=PedidosYa' },
  { name: 'Techint Group', logoUrl: 'https://via.placeholder.com/150x80?text=Techint+Group' },
  { name: 'Telecom Argentina', logoUrl: 'https://via.placeholder.com/150x80?text=Telecom+Argentina' },
  { name: 'Banco Macro', logoUrl: 'https://via.placeholder.com/150x80?text=Banco+Macro' },
  // Duplicate clients to ensure continuous loop without a visible jump
  { name: 'YPF', logoUrl: 'https://via.placeholder.com/150x80?text=YPF' },
  { name: 'Mercado Libre', logoUrl: 'https://via.placeholder.com/150x80?text=Mercado+Libre' },
  { name: 'BBVA Argentina', logoUrl: 'https://via.placeholder.com/150x80?text=BBVA+Argentina' },
  { name: 'Globant', logoUrl: 'https://via.placeholder.com/150x80?text=Globant' },
  { name: 'Grupo OSDE', logoUrl: 'https://via.placeholder.com/150x80?text=Grupo+OSDE' },
  { name: 'Banco San Juan', logoUrl: 'https://via.placeholder.com/150x80?text=Banco+San+Juan' },
  { name: 'Arcor', logoUrl: 'https://via.placeholder.com/150x80?text=Arcor' },
  { name: 'Loma Negra', logoUrl: 'https://via.placeholder.com/150x80?text=Loma+Negra' },
  { name: 'Genneia', logoUrl: 'https://via.placeholder.com/150x80?text=Genneia' },
  { name: 'PedidosYa', logoUrl: 'https://via.placeholder.com/150x80?text=PedidosYa' },
  { name: 'Techint Group', logoUrl: 'https://via.placeholder.com/150x80?text=Techint+Group' },
  { name: 'Telecom Argentina', logoUrl: 'https://via.placeholder.com/150x80?text=Telecom+Argentina' },
  { name: 'Banco Macro', logoUrl: 'https://via.placeholder.com/150x80?text=Banco+Macro' },
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
                className="h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NuestraClientela;