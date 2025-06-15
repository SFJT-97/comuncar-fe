/* eslint-disable no-unused-vars */
// src/Components/ServicesPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, FaChevronDown, FaChevronUp } from '../data/servicesData'; // Adjust path if needed

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeOut' } },
};

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null); // State for main service accordion
  const [expandedDetail, setExpandedDetail] = useState(null); // State for nested detail accordion

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
    setExpandedDetail(null); // Close any nested detail when main service is toggled
  };

  const toggleDetail = (index) => {
    setExpandedDetail(expandedDetail === index ? null : index);
  };

  return (
    <motion.section
      className="surface py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="headline-large mb-4 text-brand-primary">
          Nuestros Servicios
        </h1>
        <p className="body-large text-on-surface-variant max-w-3xl mx-auto">
          En Comunicar Consultora, ofrecemos una gama completa de servicios estratégicos
          diseñados para potenciar su comunicación y relaciones en los ámbitos
          gubernamental, comunitario y mediático.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {servicesData.map((service, serviceIndex) => {
          const ServiceIcon = service.icon; // Get the icon component
          const isServiceExpanded = expandedService === serviceIndex;

          return (
            <motion.div
              key={serviceIndex}
              className="relative bg-gradient-to-r from-surface to-primary-container/10 rounded-lg border border-outline-variant overflow-hidden"
              layout
              transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
            >
              <motion.button
                layout
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-container/10 transition-colors duration-200"
                onClick={() => toggleService(serviceIndex)}
                aria-expanded={isServiceExpanded}
              >
                <div className="flex items-center gap-4">
                  {ServiceIcon && <ServiceIcon className="text-primary text-3xl" />}
                  <h3 className="text-xl font-bold text-on-surface">
                    {service.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isServiceExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isServiceExpanded ? (
                    <FaChevronUp className="text-primary" />
                  ) : (
                    <FaChevronDown className="text-primary" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {isServiceExpanded && (
                  <motion.div
                    key="service-content"
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accordionVariants}
                    className="px-6 pb-6 text-on-surface-variant"
                  >
                    {service.intro && <p className="mb-4">{service.intro}</p>}

                    <div className="space-y-4 pt-4">
                      {service.details.map((detail, detailIndex) => {
                        const isDetailExpanded = expandedDetail === `${serviceIndex}-${detailIndex}`;
                        return (
                          <motion.div
                            key={detailIndex}
                            className="bg-surface-container-low rounded-md border border-outline-variant/50 overflow-hidden"
                            layout
                            transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
                          >
                            <motion.button
                              layout
                              className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-container-low/80 transition-colors duration-200"
                              onClick={() => toggleDetail(`${serviceIndex}-${detailIndex}`)}
                              aria-expanded={isDetailExpanded}
                            >
                              <h4 className="text-lg font-semibold text-on-surface-variant">
                                {detail.heading}
                              </h4>
                              <motion.div
                                animate={{ rotate: isDetailExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {isDetailExpanded ? (
                                  <FaChevronUp className="text-secondary" />
                                ) : (
                                  <FaChevronDown className="text-secondary" />
                                )}
                              </motion.div>
                            </motion.button>
                            <AnimatePresence initial={false}>
                              {isDetailExpanded && (
                                <motion.div
                                  key="detail-content"
                                  layout
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  variants={accordionVariants}
                                  className="px-4 pb-4"
                                >
                                  {detail.items && detail.items.length > 0 ? (
                                    <ul className="list-disc pl-5 space-y-2 text-sm">
                                      {detail.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    // If no specific bullet points, the heading itself might be the description
                                    // Or simply don't render content if it's just the heading
                                    <p className="text-sm italic">No hay detalles adicionales.</p>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ServicesPage;