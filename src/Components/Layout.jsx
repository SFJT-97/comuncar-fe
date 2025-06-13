/* eslint-disable no-unused-vars */
// src/Components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: 'easeInOut',
};

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        className="flex-1 bg-background px-4 py-8 max-w-6xl mx-auto w-full"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        key={window.location.pathname}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;