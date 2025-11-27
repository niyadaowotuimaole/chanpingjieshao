import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import PainGain from './components/PainGain';
import Toolbox from './components/Toolbox';
import B2BSolutions from './components/B2BSolutions';
import B2CSolutions from './components/B2CSolutions';
import DemoShowcase from './components/DemoShowcase';
import Footer from './components/Footer';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  
  // Adjusted damping for smoother progress bar animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25, 
    restDelta: 0.001
  });

  return (
    <div className="relative h-screen w-full bg-darkBg text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electricBlue origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation Dots (7 sections) */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
        ))}
      </div>

      {/* Main Scroll Container */}
      <div 
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <Hero />
        <PainGain />
        <Toolbox />
        <B2BSolutions />
        <B2CSolutions />
        <DemoShowcase />
        <Footer />
      </div>
    </div>
  );
};

export default App;