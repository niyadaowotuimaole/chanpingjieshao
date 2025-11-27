import React, { useState } from 'react';
import { Send, Mail, Phone, Building, User, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    industry: '',
    type: '企业定制 (B2B)',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 md:px-6 bg-[#020202] relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electricBlue/5 rounded-full blur-[100px]" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="w-full max-w-5xl mx-auto text-center z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            
            {/* Left Text Area */}
            <div className="text-center md:text-left md:w-5/12">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                    技术有温度<br />
                    <span className="text-electricBlue">资产无边界</span>
                </h2>
                
                <p className="text-base md:text-lg text-gray-400 mb-8 max-w-sm mx-auto md:mx-0">
                    无论是企业降本增效，还是个人打造数字分身。立即预约演示，开启您的 AI 数字化之旅。
                </p>

                <div className="hidden md:flex flex-col gap-6 text-gray-400">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electricBlue group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <div className="text-gray-500 text-xs uppercase">Email</div>
                            <div className="font-medium group-hover:text-white transition-colors">contact@gansu-ai.com</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                         <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electricBlue group-hover:text-white transition-colors">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div className="text-sm">
                            <div className="text-gray-500 text-xs uppercase">Hotline</div>
                            <div className="font-medium group-hover:text-white transition-colors">400-888-8888</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Area */}
            <div className="w-full md:w-7/12">
                <div className="bg-cardBg/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">姓名 *</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input 
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            type="text" 
                                            placeholder="您的称呼" 
                                            className="w-full bg-darkBg/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:border-electricBlue focus:ring-1 focus:ring-electricBlue focus:outline-none transition-all placeholder:text-gray-600" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">联系电话 *</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input 
                                            required
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            type="tel" 
                                            placeholder="手机号码" 
                                            className="w-full bg-darkBg/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:border-electricBlue focus:ring-1 focus:ring-electricBlue focus:outline-none transition-all placeholder:text-gray-600" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">企业名称</label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                        <input 
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            type="text" 
                                            placeholder="公司或组织名称" 
                                            className="w-full bg-darkBg/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:border-electricBlue focus:ring-1 focus:ring-electricBlue focus:outline-none transition-all placeholder:text-gray-600" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-mono text-gray-500 uppercase ml-1">所属行业</label>
                                    <div className="relative">
                                        <select 
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleInputChange}
                                            className="w-full bg-darkBg/50 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:border-electricBlue focus:ring-1 focus:ring-electricBlue focus:outline-none transition-all appearance-none cursor-pointer text-gray-300"
                                        >
                                            <option value="" disabled>选择行业...</option>
                                            <option value="ecommerce">电商直播</option>
                                            <option value="tourism">文旅宣传</option>
                                            <option value="education">教育培训</option>
                                            <option value="government">政务服务</option>
                                            <option value="other">其他行业</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">咨询类型</label>
                                <div className="flex gap-2">
                                    {['企业定制 (B2B)', '个人 IP (B2C)', '代理加盟'].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, type }))}
                                            className={`flex-1 py-2 rounded-lg text-xs md:text-sm border transition-all ${
                                                formData.type === type 
                                                ? 'bg-electricBlue/20 border-electricBlue text-electricBlue font-bold' 
                                                : 'bg-darkBg/30 border-white/5 text-gray-500 hover:bg-white/5'
                                            }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">需求描述</label>
                                <div className="relative">
                                    <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                    <textarea 
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={3}
                                        placeholder="请简述您的具体需求或应用场景..." 
                                        className="w-full bg-darkBg/50 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white text-sm focus:border-electricBlue focus:ring-1 focus:ring-electricBlue focus:outline-none transition-all placeholder:text-gray-600 resize-none" 
                                    />
                                </div>
                            </div>

                            <motion.button 
                                type="submit" 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-electricBlue to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all flex items-center justify-center gap-2 group mt-2"
                            >
                                <span>提交预约申请</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8"
                        >
                            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">提交成功</h3>
                            <p className="text-gray-400">
                                感谢您的预约。我们的解决方案专家将在 24 小时内与您联系 ({formData.phone})，请保持电话畅通。
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Mobile Contact Info (Visible only on mobile) */}
            <div className="md:hidden flex gap-6 text-gray-500 text-sm mt-4">
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    contact@gansu-ai.com
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    400-888-8888
                </div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-gray-800 pointer-events-none">
                © 2024 Gansu AI Digital Human Solution. All Rights Reserved.
            </div>
        </div>
    </section>
  );
};

export default Footer;