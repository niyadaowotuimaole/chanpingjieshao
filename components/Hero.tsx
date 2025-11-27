import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Hero: React.FC = () => {
  return (
    <SectionWrapper className="bg-darkBg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-full md:h-auto min-h-[500px]">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left pt-10 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-electricBlue font-mono tracking-widest text-xs md:text-sm uppercase mb-4 block">
              Gansu AI Digital Human Solution
            </span>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
              打破人力边界<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                重塑商业效率
              </span>
            </h1>
            <p className="text-base md:text-xl text-textGray max-w-lg leading-relaxed mx-auto md:mx-0">
              从企业降本增效，到个人数字资产变现。<br/>
              AI 数字人全场景解决方案，为您打造永不疲倦的超级员工。
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-electricBlue text-white font-semibold rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(41,121,255,0.3)] mx-auto md:mx-0"
          >
            查看解决方案
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Right Visual: Abstract Time Shattering */}
        <div className="relative h-64 md:h-full flex items-center justify-center mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-electricBlue/10 to-transparent rounded-full blur-3xl" />
          
          <motion.div 
            className="relative w-64 h-64 md:w-96 md:h-96 border border-white/10 rounded-full flex items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
             {/* Abstract Clock Elements */}
            <div className="absolute top-0 w-1 h-8 md:h-10 bg-electricBlue/50" />
            <div className="absolute right-0 w-8 md:w-10 h-1 bg-white/20" />
            <div className="absolute bottom-0 w-1 h-8 md:h-10 bg-white/20" />
            <div className="absolute left-0 w-8 md:w-10 h-1 bg-white/20" />
            
            {/* Shattering Particles Effect (CSS + Motion) */}
            <motion.div 
               className="absolute inset-0 flex items-center justify-center"
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1.1, opacity: 1 }}
               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="text-5xl md:text-8xl font-black text-white/5 tracking-tighter">
                    TIME
                </div>
            </motion.div>
          </motion.div>
          
          {/* Floating Image Overlay */}
          <motion.img 
            src="https://picsum.photos/id/106/500/500.webp" 
            alt="Digital Human Abstract"
            className="absolute w-48 h-48 md:w-80 md:h-80 object-cover rounded-2xl grayscale border border-white/20 shadow-2xl z-20"
            initial={{ y: 20 }}
            animate={{ y: -20 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            loading="eager" // Important for LCP
            decoding="async"
            width="500"
            height="500"
            // @ts-ignore
            fetchpriority="high"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;