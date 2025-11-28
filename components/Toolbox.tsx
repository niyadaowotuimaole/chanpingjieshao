import React, { useState, useRef, useEffect } from 'react';
import { Image, Video, PenTool, TrendingUp, Globe, X, Upload, Loader2, Play, Languages, Copy, Check, Sparkles, RefreshCw, Download, Wand2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const Toolbox: React.FC = () => {
  const [showVeoModal, setShowVeoModal] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  
  return (
    <SectionWrapper>
       <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 border-b border-white/10 pb-6 text-center md:text-left">
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">AIGC 内容引擎</h2>
            <p className="text-textGray text-sm md:text-base">不仅仅提供数字人，更提供全套内容生产武器</p>
        </div>
        <div className="hidden md:block text-right shrink-0 ml-8">
            <span className="text-electricBlue font-bold text-3xl">300%</span>
            <p className="text-sm text-gray-500">效率提升</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[60vh] w-full">
        
        {/* Module A: Text to Image - Large Square */}
        <motion.div 
            onClick={() => setShowImageModal(true)}
            whileHover={{ scale: 1.01, y: -5, borderColor: "rgba(41, 121, 255, 0.5)" }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:col-span-2 md:row-span-2 bg-cardBg border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group min-h-[300px] cursor-pointer"
        >
            {/* Click Hint */}
            <div className="absolute top-4 right-4 bg-electricBlue/20 text-electricBlue text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                试一试 AI 绘图
            </div>

            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Image className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                     <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                        <Image className="text-electricBlue w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">文生图引擎</h3>
                    <p className="text-gray-400 text-sm">解决 "不懂设计"。一键生成高质量直播间背景、产品海报、营销素材。</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 pointer-events-none">
                    <img src="https://picsum.photos/id/16/200/200" className="rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-square object-cover" />
                    <img src="https://picsum.photos/id/28/200/200" className="rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-square object-cover" />
                </div>
            </div>
        </motion.div>

        {/* Module B: Image to Video - Wide Rectangle */}
        <motion.div 
            onClick={() => setShowVeoModal(true)}
            whileHover={{ scale: 1.02, y: -5, borderColor: "rgba(41, 121, 255, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:col-span-2 bg-cardBg border border-white/10 rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-center min-h-[160px] cursor-pointer"
        >
            {/* Click Hint */}
            <div className="absolute top-4 right-4 bg-electricBlue/20 text-electricBlue text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                试一试 Veo
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Video className="w-16 h-16 md:w-20 md:h-20 text-electricBlue" />
            </div>
            <div className="relative z-10 max-w-[80%] md:max-w-[60%]">
                <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-electricBlue" /> 图生视频 (Veo)
                </h3>
                <p className="text-gray-400 text-sm">解决 "拍摄困难"。点击上传图片，立即使用 Veo 模型生成动态视频。</p>
            </div>
        </motion.div>

        {/* Module C: Trends - Small - Enhanced Background */}
        <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-cardBg border border-white/10 rounded-2xl p-6 relative overflow-hidden group min-h-[120px]"
        >
            {/* Dynamic Background: Scrolling Hot Search List */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none overflow-hidden">
                <div className="animate-marquee-vertical space-y-3 p-4">
                     {['甘肃天水麻辣烫', '董宇辉甘肃行', '兰州牛肉面', '助农苹果直播', '敦煌飞天仿妆', '沙漠骆驼', '莫高窟预约', '黄河风情线'].map((item, i) => (
                         <div key={i} className="flex items-center gap-2 text-[10px] text-white whitespace-nowrap">
                             <span className={`w-3 h-3 flex items-center justify-center rounded text-[8px] font-bold ${i < 3 ? 'bg-red-500' : 'bg-gray-700'}`}>{i + 1}</span>
                             <span>{item}</span>
                             <span className="text-[8px] text-gray-500">{Math.floor(Math.random() * 1000)}w</span>
                         </div>
                     ))}
                      {['甘肃天水麻辣烫', '董宇辉甘肃行', '兰州牛肉面', '助农苹果直播'].map((item, i) => (
                         <div key={`dup-${i}`} className="flex items-center gap-2 text-[10px] text-white whitespace-nowrap">
                             <span className={`w-3 h-3 flex items-center justify-center rounded text-[8px] font-bold ${i < 3 ? 'bg-red-500' : 'bg-gray-700'}`}>{i + 1}</span>
                             <span>{item}</span>
                             <span className="text-[8px] text-gray-500">{Math.floor(Math.random() * 1000)}w</span>
                         </div>
                     ))}
                </div>
            </div>

            <div className="relative z-10 h-full flex flex-row md:flex-col items-center md:items-start justify-between">
                <TrendingUp className="w-8 h-8 text-electricBlue mb-0 md:mb-4 mr-4 md:mr-0 shrink-0" />
                <div>
                    <h3 className="text-lg font-bold">热点追踪</h3>
                    <p className="text-xs text-gray-400 mt-1">
                        实时抓取抖音/快手热榜，自动匹配本地货盘。
                    </p>
                </div>
            </div>
        </motion.div>

        {/* Module D: Cross-border - Small - Enhanced Interaction */}
        <motion.div 
            onClick={() => setShowCopyModal(true)}
            whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(41, 121, 255, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-cardBg border border-white/10 rounded-2xl p-6 relative overflow-hidden group cursor-pointer min-h-[120px]"
        >
            {/* Click Hint */}
            <div className="absolute top-2 right-2 bg-electricBlue/20 text-electricBlue text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
                试一试 AI 文案
            </div>

            {/* Dynamic Background: Multilingual Typography */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none flex flex-wrap content-center justify-center gap-4 rotate-12 scale-125">
                 <span className="text-2xl font-bold text-white/50">Hello</span>
                 <span className="text-xl font-bold text-white/30">Bonjour</span>
                 <span className="text-3xl font-bold text-white/40">مرحبا</span>
                 <span className="text-lg font-bold text-white/60">Hola</span>
                 <span className="text-2xl font-bold text-white/30">Привет</span>
                 <span className="text-xl font-bold text-white/50">你好</span>
                 <span className="text-3xl font-bold text-white/20">こんにちは</span>
            </div>

            <div className="relative z-10 h-full flex flex-row md:flex-col items-center md:items-start justify-between">
                <Globe className="w-8 h-8 text-electricBlue mb-0 md:mb-4 mr-4 md:mr-0 shrink-0" />
                <div>
                    <h3 className="text-lg font-bold flex items-center gap-1">
                        跨境文案 <Languages className="w-3 h-3 ml-1 opacity-50" />
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                        点击输入中文，一键生成多语种地道营销文案。
                    </p>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Modals */}
      <VeoModal isOpen={showVeoModal} onClose={() => setShowVeoModal(false)} />
      <CopywritingModal isOpen={showCopyModal} onClose={() => setShowCopyModal(false)} />
      <ImageGenModal isOpen={showImageModal} onClose={() => setShowImageModal(false)} />

    </SectionWrapper>
  );
};

// --- Image Generation Modal Component ---

const ImageGenModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState('1:1');
    const [style, setStyle] = useState('Photorealistic');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    const ratios = ["1:1", "16:9", "9:16", "4:3", "3:4"];
    const styles = ["Photorealistic", "Anime", "Cinematic", "3D Render", "Oil Painting"];

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsGenerating(true);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Construct enhanced prompt
            const fullPrompt = `${prompt}, ${style} style, high quality, highly detailed`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-image',
                contents: {
                    parts: [{ text: fullPrompt }]
                },
                config: {
                    imageConfig: {
                        aspectRatio: aspectRatio,
                        // imageSize: "1K" // Default
                    }
                }
            });

            // Parse response for image data
            let foundImage = false;
            if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
                for (const part of response.candidates[0].content.parts) {
                    if (part.inlineData) {
                        const base64String = part.inlineData.data;
                        setGeneratedImage(`data:image/png;base64,${base64String}`);
                        foundImage = true;
                        break;
                    }
                }
            }
            
            if (!foundImage) {
                throw new Error("No image data found in response");
            }

        } catch (error: any) {
            console.error("Image Gen Error:", error);
            alert("图片生成失败。请重试或检查 API Key。");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#1a1a1a] border border-white/10 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Header Mobile */}
                        <div className="md:hidden p-4 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-bold text-white flex items-center gap-2"><Image className="w-4 h-4 text-electricBlue"/> 文生图</h3>
                            <button onClick={onClose}><X className="w-5 h-5 text-gray-400"/></button>
                        </div>

                        {/* Left: Controls */}
                        <div className="w-full md:w-1/3 p-6 bg-[#151515] border-r border-white/5 flex flex-col gap-5 overflow-y-auto">
                            <div>
                                <h3 className="text-lg font-bold text-white hidden md:block mb-1">AI 绘画生成</h3>
                                <p className="text-xs text-gray-500 mb-4">输入描述，即刻生成。</p>
                                
                                <label className="text-xs text-gray-400 font-mono uppercase mb-2 block">提示词 (Prompt)</label>
                                <textarea 
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="例如：甘肃沙漠中的赛博朋克城市..."
                                    className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-600 focus:border-electricBlue focus:outline-none resize-none"
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 font-mono uppercase mb-2 block">图片比例</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {ratios.map(r => (
                                        <button
                                            key={r}
                                            onClick={() => setAspectRatio(r)}
                                            className={`py-2 px-1 text-xs rounded-lg border transition-all ${
                                                aspectRatio === r 
                                                ? 'bg-electricBlue text-white border-electricBlue' 
                                                : 'bg-white/5 text-gray-400 border-transparent hover:bg-white/10'
                                            }`}
                                        >
                                            {r}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 font-mono uppercase mb-2 block">艺术风格</label>
                                <div className="flex flex-wrap gap-2">
                                    {styles.map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setStyle(s)}
                                            className={`py-1.5 px-3 text-xs rounded-full border transition-all ${
                                                style === s 
                                                ? 'bg-white text-black border-white font-bold' 
                                                : 'bg-transparent text-gray-400 border-white/20 hover:border-white/50'
                                            }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button 
                                onClick={handleGenerate}
                                disabled={isGenerating || !prompt.trim()}
                                className="mt-auto w-full py-3 bg-gradient-to-r from-electricBlue to-blue-600 rounded-xl text-white font-bold shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                                {isGenerating ? '生成中...' : '立即生成'}
                            </button>
                        </div>

                        {/* Right: Preview */}
                        <div className="w-full md:w-2/3 bg-[#0a0a0a] flex items-center justify-center p-6 relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black">
                            {generatedImage ? (
                                <div className="relative max-w-full max-h-full group">
                                    <img 
                                        src={generatedImage} 
                                        alt="Generated" 
                                        className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
                                    />
                                    <a 
                                        href={generatedImage} 
                                        download={`gansu-ai-gen-${Date.now()}.png`}
                                        className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 hover:bg-gray-200"
                                    >
                                        <Download className="w-4 h-4" /> 下载图片
                                    </a>
                                </div>
                            ) : (
                                <div className="text-center text-gray-600 flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4 animate-pulse">
                                        <Image className="w-10 h-10 opacity-20" />
                                    </div>
                                    <p className="text-sm">您的作品将在这里显示</p>
                                </div>
                            )}

                            {/* Close Button Desktop */}
                            <button 
                                onClick={onClose}
                                className="absolute top-4 right-4 hidden md:block text-gray-500 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

// --- Copywriting Modal Component ---

const CopywritingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [inputText, setInputText] = useState('');
    const [targetLang, setTargetLang] = useState('English');
    const [tone, setTone] = useState('Enthusiastic');
    const [generatedText, setGeneratedText] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [copied, setCopied] = useState(false);

    const languages = [
        { name: 'English', label: '英语 (English)' },
        { name: 'Arabic', label: '阿拉伯语 (Arabic)' },
        { name: 'French', label: '法语 (French)' },
        { name: 'Russian', label: '俄语 (Russian)' },
        { name: 'Spanish', label: '西班牙语 (Spanish)' },
        { name: 'Japanese', label: '日语 (Japanese)' },
    ];

    const handleGenerate = async () => {
        if (!inputText.trim()) return;
        setIsGenerating(true);
        setGeneratedText('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const prompt = `
                Role: You are an expert cross-border e-commerce copywriter.
                Task: Adapt the following Chinese product/promotional text into ${targetLang}.
                Tone: ${tone}.
                Input Text: "${inputText}"
                
                Requirements:
                1. Do not just translate word-for-word. Adapt it culturally for the target market.
                2. Use emojis appropriately for social media.
                3. Include 3 relevant hashtags at the end.
                4. Output ONLY the generated copy, no preamble.
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setGeneratedText(response.text.trim());
        } catch (error) {
            console.error(error);
            setGeneratedText("生成失败。请检查网络或 API Key。");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleCopy = () => {
        if (!generatedText) return;
        navigator.clipboard.writeText(generatedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#1a1a1a] border border-white/10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
                    >
                        {/* Header Mobile */}
                         <div className="md:hidden p-4 border-b border-white/10 flex justify-between items-center">
                            <h3 className="font-bold text-white flex items-center gap-2"><Globe className="w-4 h-4 text-electricBlue"/> 跨境文案生成</h3>
                            <button onClick={onClose}><X className="w-5 h-5 text-gray-400"/></button>
                        </div>

                        {/* Left: Input Area */}
                        <div className="flex-1 p-6 flex flex-col gap-4 border-r border-white/5 bg-[#151515]">
                            <div>
                                <h3 className="text-lg font-bold text-white hidden md:block mb-1">AI 跨境文案</h3>
                                <p className="text-xs text-gray-500 mb-4">输入中文，生成全球营销爆款文案</p>
                                
                                <textarea 
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="例如：这款甘肃静宁苹果，口感脆甜，产地直采，现在下单包邮..."
                                    className="w-full h-32 md:h-40 bg-black/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-600 focus:border-electricBlue focus:outline-none resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500">目标语言</label>
                                    <div className="relative">
                                        <select 
                                            value={targetLang}
                                            onChange={(e) => setTargetLang(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none appearance-none"
                                        >
                                            {languages.map(l => <option key={l.name} value={l.name}>{l.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-500">文案风格</label>
                                    <select 
                                        value={tone}
                                        onChange={(e) => setTone(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none appearance-none"
                                    >
                                        <option value="Enthusiastic">热情带货 (Selling)</option>
                                        <option value="Professional">专业介绍 (Pro)</option>
                                        <option value="Storytelling">故事感 (Story)</option>
                                        <option value="Short">短促有力 (Short)</option>
                                    </select>
                                </div>
                            </div>

                            <button 
                                onClick={handleGenerate}
                                disabled={isGenerating || !inputText.trim()}
                                className="mt-auto w-full py-3 bg-gradient-to-r from-electricBlue to-blue-600 rounded-xl text-white font-bold shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                                {isGenerating ? '生成中...' : '立即生成文案'}
                            </button>
                        </div>

                        {/* Right: Output Area */}
                        <div className="flex-1 p-6 bg-[#1a1a1a] flex flex-col relative">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">生成结果</h4>
                                {generatedText && (
                                    <button 
                                        onClick={handleCopy}
                                        className="text-xs flex items-center gap-1 px-2 py-1 bg-white/5 rounded hover:bg-white/10 text-gray-300 transition-colors"
                                    >
                                        {copied ? <Check className="w-3 h-3 text-green-500"/> : <Copy className="w-3 h-3"/>}
                                        {copied ? '已复制' : '复制'}
                                    </button>
                                )}
                            </div>

                            <div className="flex-1 bg-black/30 rounded-xl border border-white/5 p-4 overflow-y-auto relative min-h-[200px]">
                                {generatedText ? (
                                    <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                                        {generatedText}
                                    </p>
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 opacity-50">
                                        <Languages className="w-10 h-10 mb-2" />
                                        <p className="text-xs">生成结果将显示在这里</p>
                                    </div>
                                )}
                            </div>

                             {/* Close Button Desktop */}
                             <button 
                                onClick={onClose}
                                className="absolute top-4 right-4 hidden md:block text-gray-500 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

// --- Veo Modal Component ---

const VeoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string | null>(null);
    const [loadingStage, setLoadingStage] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Reset state on close
    const handleClose = () => {
        if (isGenerating) return; // Prevent closing while generating
        setSelectedImage(null);
        setGeneratedVideoUrl(null);
        setIsGenerating(false);
        onClose();
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
                setGeneratedVideoUrl(null); // Clear previous result
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (!selectedImage) return;

        try {
            setIsGenerating(true);
            setLoadingStage('正在检查 API 密钥...');

            // 1. Check/Request API Key
            try {
                // @ts-ignore
                const hasKey = await window.aistudio.hasSelectedApiKey();
                if (!hasKey) {
                    // @ts-ignore
                    await window.aistudio.openSelectKey();
                }
            } catch (e) {
                console.warn("AI Studio Key Check failed or skipped:", e);
            }
            
            setLoadingStage('正在初始化 Veo 模型...');

            // 2. Initialize Client
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // 3. Prepare Image Data (strip prefix)
            const base64Data = selectedImage.split(',')[1];

            setLoadingStage('正在提交至 Veo-3.1...');

            // 4. Start Generation
            let operation = await ai.models.generateVideos({
                model: 'veo-3.1-fast-generate-preview',
                image: {
                    imageBytes: base64Data,
                    mimeType: 'image/png', 
                },
                config: {
                    numberOfVideos: 1,
                    resolution: '720p', // standard for fast preview
                    aspectRatio: aspectRatio
                }
            });

            // 5. Polling Loop
            setLoadingStage('正在生成视频 (约1-2分钟)...');
            
            while (!operation.done) {
                await new Promise(resolve => setTimeout(resolve, 3000)); // Poll every 3s
                operation = await ai.operations.getVideosOperation({ operation: operation });
            }

            // 6. Fetch Result
            if (operation.response?.generatedVideos?.[0]?.video?.uri) {
                 const downloadLink = operation.response.generatedVideos[0].video.uri;
                 const videoUrlWithKey = `${downloadLink}&key=${process.env.API_KEY}`;
                 setGeneratedVideoUrl(videoUrlWithKey);
            } else {
                throw new Error('Generation failed: No video URI returned.');
            }

        } catch (error: any) {
            console.error("Veo Generation Error:", error);
            
            // Robust check for 404 "Requested entity was not found"
            const isEntityNotFoundError = 
                error.message?.includes("Requested entity was not found") || 
                error.toString().includes("Requested entity was not found") ||
                (error.error && error.error.message?.includes("Requested entity was not found")) ||
                (typeof error === 'object' && JSON.stringify(error).includes("Requested entity was not found"));

            if (isEntityNotFoundError) {
                alert("授权失败。请选择有效的付费 API Key 以使用 Veo 功能。");
                try {
                    // @ts-ignore
                    await window.aistudio.openSelectKey();
                } catch (keyError) {
                    console.error("Failed to open key selector:", keyError);
                }
            } else {
                alert('生成失败: ' + (error.message || '未知错误'));
            }
        } finally {
            setIsGenerating(false);
            setLoadingStage('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#0f0f0f] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-electricBlue/10 rounded-lg">
                                    <Video className="w-5 h-5 text-electricBlue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Veo 视频生成</h3>
                                    <p className="text-xs text-gray-400">图生视频 (Image-to-Video)</p>
                                </div>
                            </div>
                            <button 
                                onClick={handleClose}
                                disabled={isGenerating}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto flex-1">
                            {!selectedImage ? (
                                // Upload State
                                <div 
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-white/10 rounded-2xl h-64 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-electricBlue hover:bg-white/5 transition-all group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Upload className="w-8 h-8 text-gray-400 group-hover:text-electricBlue" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-medium">点击上传图片</p>
                                        <p className="text-sm text-gray-500">支持 PNG, JPG 格式</p>
                                    </div>
                                    <input 
                                        type="file" 
                                        ref={fileInputRef} 
                                        className="hidden" 
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Source Image */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-mono text-gray-500 uppercase">原图</div>
                                            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-black/50">
                                                <img src={selectedImage} alt="Source" className="w-full h-full object-contain" />
                                                <button 
                                                    onClick={() => { setSelectedImage(null); setGeneratedVideoUrl(null); }}
                                                    disabled={isGenerating}
                                                    className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-red-500/80 transition-colors"
                                                >
                                                    <X className="w-4 h-4 text-white" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Output / Preview */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-mono text-gray-500 uppercase">
                                                {generatedVideoUrl ? '生成结果' : '预览'}
                                            </div>
                                            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-black/50 flex items-center justify-center">
                                                {isGenerating ? (
                                                    <div className="flex flex-col items-center gap-3">
                                                        <Loader2 className="w-8 h-8 text-electricBlue animate-spin" />
                                                        <p className="text-xs text-electricBlue animate-pulse">{loadingStage}</p>
                                                    </div>
                                                ) : generatedVideoUrl ? (
                                                    <video 
                                                        src={generatedVideoUrl} 
                                                        controls 
                                                        autoPlay 
                                                        loop 
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <div className="text-center p-4">
                                                        <div className="w-12 h-12 rounded-full bg-white/5 mx-auto mb-2 flex items-center justify-center">
                                                            <Play className="w-5 h-5 text-gray-600" />
                                                        </div>
                                                        <p className="text-xs text-gray-500">生成结果将显示在这里</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    {!generatedVideoUrl && !isGenerating && (
                                        <div className="bg-cardBg p-4 rounded-xl border border-white/5 space-y-4">
                                            <div>
                                                <label className="text-sm text-gray-400 mb-2 block">视频比例</label>
                                                <div className="flex gap-4">
                                                    <button 
                                                        onClick={() => setAspectRatio('16:9')}
                                                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                                                            aspectRatio === '16:9' 
                                                            ? 'border-electricBlue bg-electricBlue/10 text-electricBlue' 
                                                            : 'border-white/10 text-gray-500 hover:bg-white/5'
                                                        }`}
                                                    >
                                                        16:9 (Landscape)
                                                    </button>
                                                    <button 
                                                        onClick={() => setAspectRatio('9:16')}
                                                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-all ${
                                                            aspectRatio === '9:16' 
                                                            ? 'border-electricBlue bg-electricBlue/10 text-electricBlue' 
                                                            : 'border-white/10 text-gray-500 hover:bg-white/5'
                                                        }`}
                                                    >
                                                        9:16 (Portrait)
                                                    </button>
                                                </div>
                                            </div>

                                            <button 
                                                onClick={handleGenerate}
                                                className="w-full py-3 bg-electricBlue text-white font-bold rounded-lg shadow-lg shadow-blue-900/20 hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                                            >
                                                <PenTool className="w-4 h-4" />
                                                生成视频
                                            </button>
                                            
                                            <p className="text-[10px] text-center text-gray-500">
                                                由 Google Veo 3.1 驱动。生成可能需要 1-2 分钟。
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Toolbox;