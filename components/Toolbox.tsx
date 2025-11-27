import React, { useState, useRef } from 'react';
import { Image, Video, PenTool, TrendingUp, Globe, X, Upload, Loader2, Play } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";

const Toolbox: React.FC = () => {
  const [showVeoModal, setShowVeoModal] = useState(false);
  
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
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:col-span-2 md:row-span-2 bg-cardBg border border-white/10 rounded-2xl p-6 md:p-8 relative overflow-hidden group min-h-[300px]"
        >
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
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <img src="https://picsum.photos/id/16/200/200" className="rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-square object-cover" />
                    <img src="https://picsum.photos/id/28/200/200" className="rounded-lg opacity-50 grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-square object-cover" />
                </div>
            </div>
        </motion.div>

        {/* Module B: Image to Video - Wide Rectangle - NOW INTERACTIVE */}
        <motion.div 
            onClick={() => setShowVeoModal(true)}
            whileHover={{ scale: 1.02, y: -5, borderColor: "rgba(41, 121, 255, 0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:col-span-2 bg-cardBg border border-white/10 rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-center min-h-[160px] cursor-pointer"
        >
            {/* Click Hint */}
            <div className="absolute top-4 right-4 bg-electricBlue/20 text-electricBlue text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Try Veo
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

        {/* Module C: Trends - Small */}
        <motion.div 
            whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-cardBg border border-white/10 rounded-2xl p-6 flex flex-row md:flex-col items-center md:items-start justify-between transition-colors min-h-[120px]"
        >
            <TrendingUp className="w-8 h-8 text-electricBlue mb-0 md:mb-4 mr-4 md:mr-0" />
            <div>
                <h3 className="text-lg font-bold">热点追踪</h3>
                <p className="text-xs text-gray-400">自动抓取全网热门话题，辅助选题。</p>
            </div>
        </motion.div>

        {/* Module D: Cross-border - Small */}
        <motion.div 
            whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-cardBg border border-white/10 rounded-2xl p-6 flex flex-row md:flex-col items-center md:items-start justify-between transition-colors min-h-[120px]"
        >
            <Globe className="w-8 h-8 text-electricBlue mb-0 md:mb-4 mr-4 md:mr-0" />
            <div>
                <h3 className="text-lg font-bold">跨境文案</h3>
                <p className="text-xs text-gray-400">英/阿/法等多语种营销文案一键生成。</p>
            </div>
        </motion.div>
      </div>

      {/* VEO Generation Modal */}
      <VeoModal isOpen={showVeoModal} onClose={() => setShowVeoModal(false)} />
    </SectionWrapper>
  );
};

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
            setLoadingStage('Checking API Key...');

            // 1. Check/Request API Key
            // We ensure the user has selected a key before proceeding
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
            
            setLoadingStage('Initializing Veo Model...');

            // 2. Initialize Client
            // Always initialize with process.env.API_KEY which is updated after openSelectKey
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // 3. Prepare Image Data (strip prefix)
            const base64Data = selectedImage.split(',')[1];

            setLoadingStage('Submitting to Veo-3.1...');

            // 4. Start Generation
            let operation = await ai.models.generateVideos({
                model: 'veo-3.1-fast-generate-preview',
                image: {
                    imageBytes: base64Data,
                    mimeType: 'image/png', // Simplification: assuming png/jpeg is fine, SDK handles most
                },
                config: {
                    numberOfVideos: 1,
                    resolution: '720p', // standard for fast preview
                    aspectRatio: aspectRatio
                }
            });

            // 5. Polling Loop
            setLoadingStage('Dreaming (Generating Video)...');
            
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
            // This error indicates the API Key is invalid, expired, or the project lacks access to Veo
            const isEntityNotFoundError = 
                error.message?.includes("Requested entity was not found") || 
                error.toString().includes("Requested entity was not found") ||
                (error.error && error.error.message?.includes("Requested entity was not found")) ||
                (typeof error === 'object' && JSON.stringify(error).includes("Requested entity was not found"));

            if (isEntityNotFoundError) {
                alert("Authorization failed. Please select a valid Paid API Key to use Veo.");
                try {
                    // @ts-ignore
                    await window.aistudio.openSelectKey();
                } catch (keyError) {
                    console.error("Failed to open key selector:", keyError);
                }
            } else {
                alert('Generation error: ' + (error.message || 'Unknown error'));
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
                                    <h3 className="text-xl font-bold text-white">Veo Animator</h3>
                                    <p className="text-xs text-gray-400">Image-to-Video Generation</p>
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
                                        <p className="text-white font-medium">Click to upload image</p>
                                        <p className="text-sm text-gray-500">Supports PNG, JPG</p>
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
                                            <div className="text-xs font-mono text-gray-500 uppercase">Source Image</div>
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
                                                {generatedVideoUrl ? 'Generated Result' : 'Preview'}
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
                                                        <p className="text-xs text-gray-500">Video will appear here</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    {!generatedVideoUrl && !isGenerating && (
                                        <div className="bg-cardBg p-4 rounded-xl border border-white/5 space-y-4">
                                            <div>
                                                <label className="text-sm text-gray-400 mb-2 block">Aspect Ratio</label>
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
                                                Generate Video
                                            </button>
                                            
                                            <p className="text-[10px] text-center text-gray-500">
                                                Powered by Google Veo 3.1. Generation may take 1-2 minutes.
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