import React from 'react';
import { X, Check, BatteryWarning, Zap } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const PainGain: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">为什么选择 AI 数字人？</h2>
        <p className="text-textGray text-sm md:text-base">告别传统束缚，拥抱指数级增长</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-6xl mx-auto h-auto md:h-[60vh]">
        {/* Pain: Traditional Labor */}
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative group p-6 md:p-8 rounded-2xl border border-white/10 bg-cardBg/50 backdrop-blur-sm grayscale transition-all duration-500 hover:grayscale-0 flex flex-col justify-center min-h-[300px]"
        >
          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-textGray/50 font-mono text-xs md:text-sm">BEFORE</div>
          <div className="mb-4 md:mb-6">
            <BatteryWarning className="w-8 h-8 md:w-12 md:h-12 text-gray-500 mb-2 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-300">传统人力模式</h3>
          </div>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
            {[
              "高昂的人力成本 (¥8000+/月)",
              "每天工作时长受限 (8小时)",
              "情绪波动，状态不稳定",
              "语言能力单一，无法跨境",
              "创意枯竭，内容产出慢"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-500">
                <X className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gain: AI Solution */}
        <motion.div 
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative p-6 md:p-8 rounded-2xl border border-electricBlue bg-gradient-to-br from-cardBg to-[#0a1525] shadow-[0_0_30px_rgba(41,121,255,0.15)] flex flex-col justify-center min-h-[320px]"
        >
           <div className="absolute top-4 left-4 md:top-6 md:left-6 text-electricBlue font-mono text-xs md:text-sm">AFTER</div>
           <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1 bg-electricBlue text-white text-[10px] md:text-xs font-bold rounded-full animate-pulse">
              RECOMMENDED
           </div>
          <div className="mb-4 md:mb-6">
            <Zap className="w-8 h-8 md:w-12 md:h-12 text-electricBlue mb-2 md:mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-white">AI 数字军团</h3>
          </div>
          <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
            {[
              "1/10 综合成本，一次投入",
              "7x24小时 全天候直播/服务",
              "永不疲倦，始终情绪饱满",
              "多语言无缝切换 (中/英/阿/法)",
              "海量内容瞬间生成，矩阵分发"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white">
                <div className="p-1 bg-electricBlue/20 rounded-full flex-shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-electricBlue" />
                </div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default PainGain;