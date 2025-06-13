/* eslint-disable no-unused-vars */
// src/Pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <motion.section
      className="surface py-8 px-4 max-w-2xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h1 className="headline-large text-center mb-4">Contáctanos</h1>
      <p className="body-large text-center mb-8">
        Estamos listos para ayudarte a transformar tu comunicación minera. Completa el formulario y te responderemos pronto.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-field-label">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="text-field w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-field-label">
            Correo Electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="text-field w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-field-label">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="text-field w-full h-32"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-brand mx-auto">
          Enviar
        </button>
      </form>
    </motion.section>
  );
};

export default ContactPage;