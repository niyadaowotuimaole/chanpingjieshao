import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Camera, Edit3, Radio } from 'lucide-react';

const Workflow: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">简单三步，即刻启航</h2>
        <p className="text-textGray">无需专业设备，一台手机即可完成</p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-electricBlue to-transparent z-0 opacity-50" />

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-cardBg border-4 border-darkBg outline outline-1 outline-gray-700 flex items-center justify-center mb-6 shadow-xl">
                <Camera className="w-10 h-10 text-white" />
            </div>
            <div className="bg-cardBg p-6 rounded-2xl border border-white/5 w-full hover:border-white/20 transition-colors">
                <div className="text-electricBlue font-mono font-bold mb-2">STEP 01</div>
                <h3 className="text-xl font-bold mb-2">采集形象</h3>
                <p className="text-sm text-gray-400">拍摄一段 3-5 分钟的真人绿幕或实景视频，保持自然说话状态。</p>
            </div>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-cardBg border-4 border-darkBg outline outline-1 outline-gray-700 flex items-center justify-center mb-6 shadow-xl">
                <Edit3 className="w-10 h-10 text-white" />
            </div>
            <div className="bg-cardBg p-6 rounded-2xl border border-white/5 w-full hover:border-white/20 transition-colors">
                <div className="text-electricBlue font-mono font-bold mb-2">STEP 02</div>
                <h3 className="text-xl font-bold mb-2">输入文案</h3>
                <p className="text-sm text-gray-400">后台输入直播话术或短视频脚本，选择音色，配置直播间背景。</p>
            </div>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center">
             <div className="w-24 h-24 rounded-full bg-electricBlue border-4 border-darkBg outline outline-1 outline-electricBlue flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(41,121,255,0.4)]">
                <Radio className="w-10 h-10 text-white animate-pulse" />
            </div>
            <div className="bg-cardBg p-6 rounded-2xl border border-white/5 w-full hover:border-white/20 transition-colors">
                <div className="text-electricBlue font-mono font-bold mb-2">STEP 03</div>
                <h3 className="text-xl font-bold mb-2">一键开播</h3>
                <p className="text-sm text-gray-400">系统合成视频流，一键推流至抖音、快手、视频号等全平台。</p>
            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Workflow;