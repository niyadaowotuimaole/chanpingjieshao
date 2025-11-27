import React, { useState } from 'react';
import { Play, Mail, Phone, MonitorPlay } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const demos = [
  {
    id: 'live',
    title: "电商带货实录",
    subtitle: "E-Commerce Live",
    desc: "情绪饱满，动作自然，支持 7x24h 自动回复弹幕。",
    poster: "https://picsum.photos/id/435/800/600",
    tags: ["实时互动", "商品卡片", "促销话术"]
  },
  {
    id: 'news',
    title: "多语种播报",
    subtitle: "Multilingual News",
    desc: "支持 中/英/法/阿/俄 等 20+ 种语言无缝切换。",
    poster: "https://picsum.photos/id/838/800/600",
    tags: ["唇形同步", "超清画质", "零延迟"]
  },
  {
    id: 'edu',
    title: "数字名师",
    subtitle: "Virtual Teacher",
    desc: "形象亲和，肢体语言丰富，完美复刻真人教学风格。",
    poster: "https://picsum.photos/id/1062/800/600",
    tags: ["知识讲解", "PPT联动", "智能答疑"]
  }
];

const DemoShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0]);

  return (
    <SectionWrapper className="bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-electricBlue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container - Centered */}
      <div className="w-full h-full flex flex-col items-center justify-center py-8 relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 text-electricBlue mb-2">
                <MonitorPlay className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-sm tracking-widest uppercase font-bold">Live Demo Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">眼见为实 <span className="text-gray-500">Realtime</span></h2>
            <p className="text-gray-400 text-sm">选择下方场景，体验 1:1 完美复刻</p>
        </div>

        {/* Video Player Area - Centered and Larger */}
        <div className="w-full max-w-5xl flex flex-col items-center">
            
            {/* Video Player Mockup */}
            <div className="relative aspect-video w-full bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group mb-8">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={activeDemo.id}
                        src={activeDemo.poster}
                        alt={activeDemo.title}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                </AnimatePresence>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-electricBlue group-hover:border-electricBlue transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    >
                        <Play className="w-10 h-10 text-white ml-1 fill-white" />
                    </motion.button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10 flex justify-between items-end">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{activeDemo.title}</h3>
                        <p className="text-gray-300 text-base mb-4">{activeDemo.desc}</p>
                        <div className="flex gap-3">
                            {activeDemo.tags.map((tag, i) => (
                                <span key={i} className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10 text-gray-300 backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Thumbnails / Selector - Centered */}
            <div className="flex flex-wrap justify-center gap-4 w-full px-4">
                {demos.map((item) => (
                    <button 
                        key={item.id}
                        onClick={() => setActiveDemo(item)}
                        className={`flex items-center gap-3 p-3 pr-6 rounded-xl border transition-all duration-300 min-w-[180px] ${
                            activeDemo.id === item.id 
                            ? 'bg-electricBlue/10 border-electricBlue text-white scale-105 shadow-lg shadow-blue-900/20' 
                            : 'bg-cardBg border-white/5 text-gray-500 hover:bg-white/5 hover:scale-105'
                        }`}
                    >
                        <div className={`w-12 h-12 rounded-lg bg-cover bg-center shrink-0 border border-white/10`} style={{ backgroundImage: `url(${item.poster})` }} />
                        <div className="text-left">
                            <div className="font-bold text-sm">{item.subtitle}</div>
                            <div className="text-[10px] opacity-60 uppercase tracking-wider">Click to play</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
             <div className="flex justify-center gap-8 text-gray-500 text-sm mb-4">
                 <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <Mail className="w-4 h-4" /> contact@gansu-ai.com
                 </div>
                 <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                    <Phone className="w-4 h-4" /> 400-888-8888
                 </div>
             </div>
             <div className="text-[10px] text-gray-700">
                © 2024 Gansu AI Digital Human Solution. All Rights Reserved.
             </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default DemoShowcase;