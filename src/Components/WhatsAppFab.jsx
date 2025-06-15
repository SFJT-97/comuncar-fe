/* eslint-disable no-unused-vars */
// src/Components/WhatsAppFAB.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon
import { motion } from 'framer-motion'; // For subtle animation

const WhatsAppFAB = () => {
  // IMPORTANT: Replace '1234567890' with your actual WhatsApp phone number,
  // including the country code, without '+' or leading zeros.
  // Example for Argentina (country code +54) and a local number: '5492641234567'
  const whatsappNumber = '542645066666'; // Placeholder: Replace with your number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Recommended for security when using target="_blank"
      className="
        fixed bottom-6 right-6 lg:bottom-10 lg:right-10 // Positioning
        bg-[#25D366] text-white // Background and text color
        rounded-full p-4 md:p-5 // Circular shape and padding
        shadow-xl hover:shadow-2xl // Shadow for depth
        flex items-center justify-center // Center icon
        transition-all duration-300 ease-in-out // Smooth transitions for hover effects
        z-50 // Ensure it stays on top of other content
      "
      // Framer Motion animation for a subtle pop-in
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }} // Delayed pop-in
      whileHover={{ scale: 1.05 }} // Slight enlargement on hover
      whileTap={{ scale: 0.95 }} // Slight shrink on tap
      aria-label="Contact via WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" /> {/* WhatsApp Icon */}
    </motion.a>
  );
};

export default WhatsAppFAB;