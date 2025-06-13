/* eslint-disable no-unused-vars */
// src/Components/CTABanner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const CTABanner = () => {
  return (
    <motion.section
      id="contact"
      className="surface text-center py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="headline-medium mb-6">
        ¿Listo para transformar tu comunicación?
      </h2>
      <Link to="/contact" className="btn-brand">
        Hablemos Ahora
      </Link>
    </motion.section>
  );
};

export default CTABanner;