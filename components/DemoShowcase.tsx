import React, { useState, useEffect } from 'react';
import { Play, Tv } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const demos = [
  {
    id: 'live',
    title: "电商带货实录",
    subtitle: "E-Commerce Live",
    desc: "情绪饱满，动作自然，支持 7x24h 自动回复弹幕。",
    poster: "https://picsum.photos/id/435/800/600.webp",
    tags: ["实时互动", "商品卡片", "促销话术"]
  },
  {
    id: 'news',
    title: "背景前景随意切换",
    subtitle: "任意场景切换",
    desc: "支持背景、前景、语言无缝切换，适应各种场景。",
    poster: "https://aiszrk.oss-cn-shanghai.aliyuncs.com/upload/images/2025-11-27/6928c26317a5f.png",
    video: "https://aiszrk.oss-cn-shanghai.aliyuncs.com/public/clone/2025-11-28/v5JtQS.mp4",
    tags: ["唇形同步", "超清画质", "随意创作"]
  },
  {
    id: 'edu',
    title: "数字名师",
    subtitle: "智慧教育",
    desc: "形象亲和，肢体语言丰富，完美复刻真人教学风格。",
    poster: "https://aiszrk.oss-cn-shanghai.aliyuncs.com/upload/images/2025-11-27/6928b3abe7914.png",
    video: "https://aiszrk.oss-cn-shanghai.aliyuncs.com/image/qQSEen9lyC.mp4",
    tags: ["知识讲解", "PPT联动", "数字录课"]
  }
];

const DemoShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<any>(demos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset playback state when switching demos
  useEffect(() => {
    setIsPlaying(false);
  }, [activeDemo]);

  const handlePlayClick = () => {
    if (activeDemo.video) {
        setIsPlaying(true);
    }
  };

  return (
    <SectionWrapper className="bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-electricBlue/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      {/* Main Container - Centered */}
      <div className="w-full h-full flex flex-col items-center justify-center py-8 relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center">
            <div className="flex items-center justify-center gap-2 text-electricBlue mb-2">
                <Tv className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                <span className="font-mono text-xs md:text-sm tracking-widest uppercase font-bold">Live Demo Showcase</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">眼见为实 <span className="text-gray-500">Realtime</span></h2>
            <p className="text-gray-400 text-xs md:text-sm">选择下方场景，体验 1:1 完美复刻</p>
        </div>

        {/* Video Player Area - Centered and Larger */}
        <div className="w-full max-w-5xl flex flex-col items-center">
            
            {/* Video Player Mockup */}
            <div className="relative aspect-video w-full bg-gray-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group mb-6 md:mb-8">
                <AnimatePresence mode="wait">
                    {/* Render Video ONLY if it exists AND isPlaying is true */}
                    {activeDemo.video && isPlaying ? (
                        <motion.div
                            key="video-player"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 w-full h-full bg-black"
                        >
                            <video 
                                src={activeDemo.video} 
                                poster={activeDemo.poster}
                                controls 
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    ) : (
                        // Otherwise render Poster Image
                        <motion.img 
                            key="poster-image"
                            src={activeDemo.poster}
                            alt={activeDemo.title}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                    )}
                </AnimatePresence>

                {/* Play Button Overlay - Show if NOT playing */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.button 
                            onClick={handlePlayClick}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-electricBlue group-hover:border-electricBlue transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer"
                        >
                            <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-white" />
                        </motion.button>
                    </div>
                )}

                {/* Video Info Overlay - Show if NOT playing to prevent blocking controls */}
                {!isPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-0 pointer-events-none">
                        <div className="pointer-events-auto"> 
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{activeDemo.title}</h3>
                            <p className="text-gray-300 text-xs md:text-base mb-2 md:mb-4">{activeDemo.desc}</p>
                            <div className="flex gap-2 md:gap-3 flex-wrap">
                                {activeDemo.tags.map((tag: string, i: number) => (
                                    <span key={i} className="text-[10px] md:text-xs bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10 text-gray-300 backdrop-blur-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Thumbnails / Selector - Centered and Horizontal Scroll on Mobile */}
            <div className="flex flex-row flex-nowrap md:flex-wrap justify-start md:justify-center gap-4 w-full px-0 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x">
                {demos.map((item) => (
                    <button 
                        key={item.id}
                        onClick={() => setActiveDemo(item)}
                        className={`flex items-center gap-3 p-2 md:p-3 pr-4 md:pr-6 rounded-xl border transition-all duration-300 min-w-[160px] md:min-w-[180px] shrink-0 snap-start ${
                            activeDemo.id === item.id 
                            ? 'bg-electricBlue/10 border-electricBlue text-white scale-100 md:scale-105 shadow-lg shadow-blue-900/20' 
                            : 'bg-cardBg border-white/5 text-gray-500 hover:bg-white/5 md:hover:scale-105'
                        }`}
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg shrink-0 border border-white/10 overflow-hidden relative">
                             <img 
                                src={item.poster} 
                                alt={item.subtitle}
                                loading="lazy"
                                className="w-full h-full object-cover"
                             />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-xs md:text-sm">{item.subtitle}</div>
                            <div className="text-[10px] text-gray-500">
                                {item.video ? 'Video Demo' : 'Live Demo'}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DemoShowcase;