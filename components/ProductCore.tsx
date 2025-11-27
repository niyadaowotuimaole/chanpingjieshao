import React from 'react';
import { User, Layers, Mic } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const products = [
  {
    icon: <User className="w-10 h-10" />,
    title: "实景数字人",
    subtitle: "Authentic",
    desc: "背景随人而动，极致真实感。适用于文旅景点介绍、农场原产地直播。",
    img: "https://picsum.photos/id/338/600/400"
  },
  {
    icon: <Layers className="w-10 h-10" />,
    title: "绿幕数字人",
    subtitle: "Green Screen",
    desc: "无限背景替换，场景自由定义。适用于新闻播报、专业演播室、知识付费。",
    img: "https://picsum.photos/id/64/600/400"
  },
  {
    icon: <Mic className="w-10 h-10" />,
    title: "声音克隆",
    subtitle: "Voice Cloning",
    desc: "输入文字，输出本人原声。复刻音色、语调与情感，实现声音永生。",
    img: "https://picsum.photos/id/453/600/400"
  }
];

const ProductCore: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">产品核心矩阵</h2>
        <p className="text-textGray">三大形态，满足不同商业场景需求</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <motion.div 
            key={index}
            className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-cardBg"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 text-electricBlue group-hover:scale-110 transition-transform origin-left duration-300">
                    {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm font-mono text-gray-500 mb-4">{item.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.desc}
                </p>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-electricBlue/50 rounded-2xl transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProductCore;