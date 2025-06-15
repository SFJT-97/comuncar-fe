/* eslint-disable no-unused-vars */
// src/Pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Data for team members
const teamMembers = [
  {
    id: 1,
    name: "Guillermo Juárez",
    title: "Director de Comunicar Consultora",
    description: "Periodista de reconocida trayectoria en San Juan, quien se desempeña en los más importantes medios conduciendo programas radiales y televisivos de la provincia. Especializado en comunicación corporativa y manejo de crisis comunicacional. Militar retirado, especializado en inteligencia.",
    imageUrl: "https://via.placeholder.com/200x200?text=Guillermo+J" // IMPORTANT: Replace with actual image URL
  },
  {
    id: 2,
    name: "Francisco Torti",
    title: "Director de Cuentas de Comunicar Consultora",
    description: "Periodista especializado en política y economía, con una vasta experiencia al frente de equipos de noticias de diferentes medios, radiales, diarios y sitios web. Especializado en comunicación corporativa, gestión de comunicación en procesos de crisis, relaciones con medios y periodistas.",
    imageUrl: "https://via.placeholder.com/200x200?text=Francisco+T" // IMPORTANT: Replace with actual image URL
  }
];

const AboutPage = () => {
  return (
    <motion.div
      className="flex flex-col gap-8"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Section 1: Sobre Nosotros */}
      <section className="surface py-12 px-4">
        <h1 className="headline-large text-center mb-6 text-brand-primary">Sobre Nosotros</h1>
        <p className="body-large max-w-3xl mx-auto mb-4 text-on-surface-variant">
          Comunicar Consultora es líder en asesoramiento estratégico para la industria minera, con amplia experiencia en relaciones institucionales, comunitarias y con medios de comunicación.
        </p>
        <p className="body-large max-w-3xl mx-auto mb-4 text-on-surface-variant">
          Nuestra trayectoria incluye proyectos exitosos en provincias como Neuquén, La Rioja, Mendoza y Santa Cruz, trabajando con empresas como MAGSA, Deprominsa, y Mc Ewen Mining.
        </p>
        <p className="body-large max-w-3xl mx-auto text-on-surface-variant">
          Nos especializamos en construir consensos, fomentar el diálogo y desarrollar programas de responsabilidad social que integran a las comunidades locales con los objetivos empresariales.
        </p>
      </section>

      <section className="container text-center py-12 px-4 bg-primary-container">
        <h2 className="headline-medium mb-6 text-on-primary-container">Nuestra Experiencia</h2>
        <p className="body-large max-w-2xl mx-auto mb-6 text-on-primary-container">
          Con un enfoque basado en el conocimiento profundo del contexto político y social, ofrecemos soluciones personalizadas para cada proyecto.
        </p>
      </section>

      {/* Section 2: Nuestro Equipo */}
      <section className="surface py-12 px-4">
        <h2 className="headline-medium text-center mb-10 text-on-surface">Nuestro Equipo</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="
                bg-surface-container-high rounded-xl p-8 flex flex-col items-center text-center
                border border-outline transition-all duration-300 ease-in-out
                hover:shadow-2xl hover:border-brand-primary hover:-translate-y-1
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: member.id * 0.15 }}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="
                  w-40 h-40 rounded-full object-cover mb-6 border-4 border-primary
                  shadow-md
                "
              />
              <h3 className="title-large text-on-surface mb-2 font-semibold">
                {member.name}
              </h3>
              <p className="label-large text-primary mb-4">
                {member.title}
              </p>
              <p className="body-medium text-on-surface-variant leading-relaxed text-left">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default AboutPage;