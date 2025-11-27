import React from 'react';
import { Send, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-6 bg-[#020202] relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electricBlue/5 rounded-full blur-[100px]" />
        </div>

        <div className="w-full max-w-4xl mx-auto text-center z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                技术有温度<br />
                <span className="text-textGray">资产无边界</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                立即预约演示，为您的企业定制专属 AI 数字化解决方案。
            </p>

            <div className="bg-cardBg border border-white/10 p-8 rounded-3xl shadow-2xl max-w-lg mx-auto">
                <form className="space-y-4 text-left">
                    <div>
                        <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Name</label>
                        <input type="text" placeholder="您的称呼" className="w-full bg-darkBg border border-white/10 rounded-lg p-3 text-white focus:border-electricBlue focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Contact</label>
                        <input type="text" placeholder="联系电话 / 微信" className="w-full bg-darkBg border border-white/10 rounded-lg p-3 text-white focus:border-electricBlue focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Needs</label>
                        <select className="w-full bg-darkBg border border-white/10 rounded-lg p-3 text-white focus:border-electricBlue focus:outline-none transition-colors appearance-none">
                            <option>选择您的需求...</option>
                            <option>企业定制 (B2B)</option>
                            <option>个人数字资产 (B2C)</option>
                            <option>代理加盟</option>
                        </select>
                    </div>
                    <button type="button" className="w-full py-4 bg-electricBlue text-white font-bold rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group">
                        <span>预约演示</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    <Mail className="w-4 h-4" />
                    contact@gansu-ai.com
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    <Phone className="w-4 h-4" />
                    400-888-8888
                </div>
            </div>

            <div className="mt-8 text-xs text-gray-700">
                © 2024 Gansu AI Digital Human Solution. All Rights Reserved.
            </div>
        </div>
    </section>
  );
};

export default Footer;