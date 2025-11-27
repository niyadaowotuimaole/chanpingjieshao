import React from 'react';
import { MessageSquare, Cpu, ShieldAlert, UserCheck, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const InteractionLogic: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">实时交互大脑</h2>
        <p className="text-textGray">不仅是"复读机"，更是"会思考"的智能体</p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            
            {/* Step 1: User */}
            <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 mb-4">
                    <MessageSquare className="w-8 h-8 text-gray-300" />
                </div>
                <div className="text-center">
                    <h4 className="font-bold">用户弹幕</h4>
                    <p className="text-xs text-gray-500">User Comment</p>
                </div>
            </div>

            {/* Arrow */}
            <motion.div 
                initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5 }}
                className="hidden md:block"
            >
                <ArrowRight className="w-8 h-8 text-gray-600" />
            </motion.div>

            {/* Step 2: The Brain (Central) */}
            <div className="flex flex-col items-center z-10">
                <div className="relative w-32 h-32 bg-gray-900 rounded-full border-2 border-electricBlue shadow-[0_0_30px_rgba(41,121,255,0.4)] flex items-center justify-center mb-4">
                     <Cpu className="w-12 h-12 text-electricBlue animate-pulse" />
                     <div className="absolute inset-0 border border-electricBlue/30 rounded-full animate-ping" />
                </div>
                <div className="text-center">
                    <h4 className="font-bold text-electricBlue">AI 中控大脑</h4>
                    <p className="text-xs text-gray-500 max-w-[150px] mx-auto mt-2">
                        预设问答 + 知识库匹配 + LLM 大模型生成
                    </p>
                </div>
            </div>

            {/* Arrow */}
            <motion.div 
                initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                className="hidden md:block"
            >
                <ArrowRight className="w-8 h-8 text-gray-600" />
            </motion.div>

            {/* Step 3: Filter */}
            <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 mb-4">
                    <ShieldAlert className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-center">
                    <h4 className="font-bold">安全过滤</h4>
                    <p className="text-xs text-gray-500">敏感词拦截</p>
                </div>
            </div>

            {/* Arrow */}
            <motion.div 
                initial={{ opacity: 0.3 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
                className="hidden md:block"
            >
                <ArrowRight className="w-8 h-8 text-gray-600" />
            </motion.div>

            {/* Step 4: Digital Human */}
            <div className="flex flex-col items-center z-10">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-white mb-4">
                    <UserCheck className="w-8 h-8 text-black" />
                </div>
                <div className="text-center">
                    <h4 className="font-bold">数字人回复</h4>
                    <p className="text-xs text-gray-500">音画同步输出</p>
                </div>
            </div>
        </div>

        {/* Decorative connecting line for mobile */}
        <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -z-0 transform -translate-x-1/2" />
      </div>
    </SectionWrapper>
  );
};

export default InteractionLogic;