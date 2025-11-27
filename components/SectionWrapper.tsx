import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id}
      className={`h-screen w-full snap-start flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;