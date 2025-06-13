/* eslint-disable no-unused-vars */
// src/Components/ServicesSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaUsers, FaBullhorn, FaHandshake } from 'react-icons/fa';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const accordionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const detailVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const services = [
  {
    title: 'Relaciones Gubernamentales - Institucionales',
    icon: <FaHandshake className="text-primary text-2xl" />,
    description: 'Trabajamos con entidades públicas y privadas para alinear intereses y ejecutar planes estratégicos en el entorno político e institucional.',
    details: [
      'Elaboración de mapas políticos provinciales.',
      'Análisis de agendas legislativas y socio-políticas.',
      'Lobby y cronogramas de reuniones con autoridades.',
      'Apoyo logístico para entrevistas y eventos.',
    ],
  },
  {
    title: 'Relaciones Comunitarias',
    icon: <FaUsers className="text-primary text-2xl" />,
    description: 'Fomentamos la integración comunitaria mediante diálogo transparente y programas de responsabilidad social adaptados a las necesidades locales.',
    details: [
      'Identificación de actores y necesidades comunitarias.',
      'Charlas educativas sobre minería y medio ambiente.',
      'Grupos de diálogo para desarrollo conjunto.',
      'Programas de salud y RSE con impacto local.',
    ],
  },
  {
    title: 'Relaciones con los Medios de Comunicación',
    icon: <FaBullhorn className="text-primary text-2xl" />,
    description: 'Construimos consenso en la opinión pública a través de campañas estratégicas y gestión proactiva de medios.',
    details: [
      'Mapas de medios y perfiles de periodistas.',
      'Campañas de prensa y media training.',
      'Organización de eventos y conferencias.',
      'Auditoría diaria de medios y análisis de impacto.',
    ],
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.section
      className="surface py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="headline-large text-center mb-10 text-brand-primary flex items-center justify-center gap-2">
        <FaBullhorn className="text-3xl" />
        Nuestros Servicios
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden bg-gradient-to-r from-surface to-primary-container/20 rounded-lg border border-outline-variant"
            variants={accordionVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-container/10 transition-colors duration-200"
              onClick={() => toggleExpand(index)}
              aria-expanded={expanded === index}
            >
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-lg font-bold text-on-surface">{service.title}</h3>
              </div>
              <motion.div
                animate={{ rotate: expanded === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {expanded === index ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
              </motion.div>
            </button>
            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  className="px-6 pb-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={detailVariants}
                >
                  <p className="text-on-surface-variant mb-4">{service.description}</p>
                  <ul className="list-disc pl-6 text-on-surface-variant body-large">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-2">{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12" />
          </motion.div>
        ))}
        <div className="flex flex-col items-center justify-center mt-8">
          <Link to="/services" className="btn-brand">
            Nuestra Oferta
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;