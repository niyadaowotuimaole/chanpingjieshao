import React from 'react';
import { Image, Video, PenTool, TrendingUp, Globe } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const Toolbox: React.FC = () => {
  return (
    <SectionWrapper>
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
        <div>
            <h2 className="text-4xl font-bold mb-2">AIGC 内容引擎</h2>
            <p className="text-textGray">不仅仅提供数字人，更提供全套内容生产武器</p>
        </div>
        <div className="hidden md:block text-right">
            <span className="text-electricBlue font-bold text-3xl">300%</span>
            <p className="text-sm text-gray-500">效率提升</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[60vh] w-full">
        
        {/* Module A: Text to Image - Large Square */}
        <div className="md:col-span-2 md:row-span-2 bg-cardBg border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Image className="w-32 h-32" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                     <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                        <Image className="text-electricBlue w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">文生图引擎</h3>
                    <p className="text-gray-400 text-sm">解决 "不懂设计"。一键生成高质量直播间背景、产品海报、营销素材。</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <img src="https://picsum.photos/id/16/200/200" className="rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="https://picsum.photos/id/28/200/200" className="rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
            </div>
        </div>

        {/* Module B: Image to Video - Wide Rectangle */}
        <div className="md:col-span-2 bg-cardBg border border-white/10 rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Video className="w-20 h-20 text-electricBlue" />
            </div>
            <div className="relative z-10 max-w-[60%]">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-electricBlue" /> 图生视频
                </h3>
                <p className="text-gray-400 text-sm">解决 "拍摄困难"。让静态商品图动起来，自动生成商品展示短视频。</p>
            </div>
        </div>

        {/* Module C: Trends - Small */}
        <div className="bg-cardBg border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
            <TrendingUp className="w-8 h-8 text-electricBlue mb-4" />
            <div>
                <h3 className="text-lg font-bold">热点追踪</h3>
                <p className="text-xs text-gray-400">自动抓取全网热门话题，辅助选题。</p>
            </div>
        </div>

        {/* Module D: Cross-border - Small */}
        <div className="bg-cardBg border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
            <Globe className="w-8 h-8 text-electricBlue mb-4" />
            <div>
                <h3 className="text-lg font-bold">跨境文案</h3>
                <p className="text-xs text-gray-400">英/阿/法等多语种营销文案一键生成。</p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Toolbox;