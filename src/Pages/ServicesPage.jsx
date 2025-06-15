/* eslint-disable no-unused-vars */
// src/Components/ServicesPage.jsx
import React from 'react'; // useState is no longer needed
import { motion } from 'framer-motion'; // AnimatePresence is no longer needed
import { servicesData } from '../data/servicesData'; // FaChevronDown, FaChevronUp are no longer needed

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ServicesPage = () => {
  // No state needed as there are no dropdowns to manage
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

      <div className="max-w-5xl mx-auto space-y-12"> {/* Increased space between main service blocks */}
        {servicesData.map((service, serviceIndex) => {
          const ServiceIcon = service.icon; // Get the icon component for display

          return (
            <motion.div
              key={serviceIndex}
              className="relative bg-gradient-to-r from-surface to-primary-container/10 rounded-lg t p-6 md:p-8" // Added padding for overall section
              // Removed 'layout' prop as content is no longer expanding/collapsing dynamically
              // Removed 'overflow-hidden' as content will always be visible
            >
              <div className="flex items-center gap-4 mb-6"> {/* Spacing for icon and title */}
                {ServiceIcon && <ServiceIcon className="text-primary text-4xl" />} {/* Slightly larger icon */}
                <h3 className="text-2xl font-bold text-on-surface"> {/* Larger heading */}
                  {service.title}
                </h3>
              </div>

              {service.intro && <p className="body-medium text-on-surface-variant mb-6">{service.intro}</p>} {/* Added bottom margin */}

              <div className="space-y-6"> {/* Space between detail sections */}
                {service.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="bg-surface-container-low rounded-md border border-outline-variant/50 p-4">
                    <h4 className="text-lg font-semibold text-on-surface-variant mb-2">
                      {detail.heading}
                    </h4>
                    {detail.items && detail.items.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {detail.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm italic text-on-surface-variant">No hay detalles adicionales para este ítem.</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ServicesPage;