import React from 'react';
import { Briefcase, Video, Diamond, Crown, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const B2CSolutions: React.FC = () => {
  const FORM_URL = "https://flowus.cn/form/34345fd9-0b56-40eb-992f-1e2ec56d6acd?code=Q0RVP0";

  const handleRedirect = () => {
    window.open(FORM_URL, '_blank');
  };

  return (
    <SectionWrapper className="relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkBg via-[#121212] to-darkBg -z-10" />
      {/* Gold/Blue Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-electricBlue/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[400px] bg-yellow-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="text-center mb-8 md:mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-2 md:mb-4"
        >
           <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
           <span className="text-yellow-500 font-mono tracking-widest text-xs md:text-sm uppercase font-bold">VIP Personal Access</span>
           <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
        </motion.div>
        
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight">
          个人数字资产 (B2C)
        </h2>
        <p className="text-base md:text-xl text-textGray max-w-2xl mx-auto px-4">
          不仅仅是技术，更是你的
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 font-bold mx-2">
            第二财富增长曲线
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto relative z-10 px-0 md:px-4 items-center">
        
        {/* Card 1: Job Hunting (Silver) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -15, scale: 1.02 }}
          className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-500/30 to-transparent hover:from-gray-400/60 transition-all duration-500 h-auto md:h-[400px]"
        >
            <div className="bg-[#0a0a0a] rounded-2xl h-full p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent opacity-50" />
                
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-800 group-hover:border-gray-500 shadow-lg">
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">数字简历</h3>
                <div className="text-[10px] font-mono text-gray-500 mb-4 md:mb-6 uppercase tracking-[0.2em] border border-gray-800 rounded-full px-3 py-1">Silver Tier</div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">
                    无需反复面试。<br/>24h 在线展示技能、回答HR提问。
                </p>
                
                <motion.div 
                    onClick={handleRedirect}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(31, 41, 55, 1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto w-full py-3 rounded-lg border border-gray-800 text-gray-500 text-sm font-medium group-hover:text-white transition-colors cursor-pointer"
                >
                    求职效率 Max
                </motion.div>
            </div>
        </motion.div>

        {/* Card 2: Creator Matrix (Gold/Premium) - Highlighted */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-yellow-500 via-yellow-600/50 to-transparent shadow-[0_0_60px_rgba(234,179,8,0.1)] h-auto md:h-[460px] z-10 my-4 md:my-0"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-500 to-yellow-700 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500" />
            
            <div className="bg-[#0e0e0e] rounded-2xl h-full p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute -top-[100%] left-[50%] w-[20%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform translate-x-[-50%] group-hover:top-[100%] transition-all duration-1000 ease-in-out" />

                <div className="absolute top-4 right-4">
                   <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                </div>

                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-500/10 to-transparent flex items-center justify-center mb-4 md:mb-6 border border-yellow-500/40 group-hover:border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                    <Video className="w-8 h-8 md:w-9 md:h-9 text-yellow-400" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">内容矩阵</h3>
                <div className="text-xs font-mono text-yellow-500 mb-4 md:mb-6 uppercase tracking-wider flex items-center gap-2 bg-yellow-500/10 px-4 py-1.5 rounded-full border border-yellow-500/20">
                    <Crown className="w-3 h-3" /> Gold Tier <Crown className="w-3 h-3" />
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 md:mb-8 px-2">
                    告别拍摄焦虑。输入脚本文案，<br/>日产 <span className="text-white font-bold border-b border-yellow-500/50">1000+</span> 条高质量短视频，<br/>快速起号变现。
                </p>
                
                <motion.button 
                    onClick={handleRedirect}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto w-full py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-sm shadow-lg shadow-yellow-900/20 transition-all"
                >
                    立即生成资产
                </motion.button>
            </div>
        </motion.div>

        {/* Card 3: IP Licensing (Diamond/Blue) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -15, scale: 1.02 }}
          className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-electricBlue/50 to-transparent hover:from-electricBlue transition-all duration-500 h-auto md:h-[400px]"
        >
            <div className="bg-[#0a0a0a] rounded-2xl h-full p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electricBlue/50 to-transparent opacity-50" />

                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-electricBlue/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 border border-electricBlue/30 group-hover:border-electricBlue shadow-lg shadow-blue-900/20">
                    <Diamond className="w-6 h-6 md:w-7 md:h-7 text-electricBlue" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">IP 授权租赁</h3>
                <div className="text-[10px] font-mono text-electricBlue mb-4 md:mb-6 uppercase tracking-[0.2em] border border-electricBlue/30 rounded-full px-3 py-1">Diamond Tier</div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">
                    将你的数字分身授权给品牌方<br/>直播或拍摄，坐享被动收入。
                </p>
                
                <motion.div 
                    onClick={handleRedirect}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(41, 121, 255, 1)", color: "white" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto w-full py-3 rounded-lg border border-electricBlue/30 text-electricBlue text-sm font-medium transition-colors cursor-pointer"
                >
                    开启被动收入
                </motion.div>
            </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default B2CSolutions;