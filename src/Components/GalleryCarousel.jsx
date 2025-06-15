/* eslint-disable no-unused-vars */
// src/Components/GalleryCarousel.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaDotCircle } from 'react-icons/fa';

const carouselItems = [
  {
    id: 1,
    url: '/deprominsa-1.webp',
    description: 'Proyecto Paramillos – Uspallata (Mza.) Deprominsa - Reunión con autoridades locales, representantes de FF. AA. Dirigentes políticos, etc.',
  },
  {
    id: 2,
    url: '/deprominsa-2.webp',
    description: 'Proyecto Paramillos – Uspallata (Mza.) Deprominsa - Reunión con autoridades locales, representantes de FF. AA. Dirigentes políticos, etc.',
  },
  {
    id: 3,
    url: '/deprominsa-3.webp',
    description: 'Proyecto Paramillos – Uspallata (Mza.) Deprominsa - Visita de Periodistas y Medios a Proyecto.',
  },
  {
    id: 4,
    url: '/deprominsa-4.webp',
    description: 'Proyecto Paramillos – Uspallata (Mza.) Deprominsa - Visita de Periodistas y Medios a Proyecto.',
  },
  {
    id: 5,
    url: '/anchoris-1.webp',
    description: 'Proyecto Anchoris – San Rafael (Mza) Portal del Oro SA - Reuniones Informativas con resent comunidades San Rafael/Gral. Alvear.',
  },
    {
    id: 6,
    url: '/anchoris-2.webp',
    description: 'Proyecto Anchoris – San Rafael (Mza) Portal del Oro SA - Reuniones Informativas con resent comunidades San Rafael/Gral. Alvear.',
  },
    {
    id: 7,
    url: '/anchoris-3.webp',
    description: 'Proyectos Anchoris – San Rafael (Mza) Portal del Oro SA - Conferencia de Prensa de Ingenieros de Minas de UNSJ en Gral. Alvear - Mza.',
  },
    {
    id: 8,
    url: '/anchoris-4.webp',
    description: 'Proyectos Anchoris – San Rafael (Mza) Portal del Oro SA - Conferencia de Prensa de Ingenieros de Minas de UNSJ en Gral. Alvear - Mza.',
  },
    {
    id: 9,
    url: '/yamiri.webp',
    description: 'Yamiri SEM – La Rioja -Media Training/ Gestión de entrevistas periodísticas.',
  },
    {
    id: 10,
    url: '/yamiri-1.webp',
    description: 'Yamiri SEM – La Rioja -Media Training/ Gestión de entrevistas periodísticas.',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const GalleryCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = page % carouselItems.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.section
      className="surface py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* The main container for the carousel content, now explicitly setting its height */}
      <div className="max-w-6xl mx-auto rounded-lg shadow-xl overflow-hidden relative
                  h-[400px] md:h-[500px] lg:h-[600px]"> {/* Fixed height for the container */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            // Make the slide itself absolute within its fixed-height parent
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={carouselItems[imageIndex].url}
              alt={`Gallery image ${imageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay text description */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
              <p className="text-white">
                {carouselItems[imageIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </motion.section>
  );
};

export default GalleryCarousel;