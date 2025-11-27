import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, Building, User, CheckCircle2, ChevronDown, AlertCircle, Loader2, Lock, Download, Trash2, X, Table, Copy, Check, Briefcase, Wallet, Clock, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    budget: '',
    timeline: '',
    type: '企业定制 (B2B)',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation Logic
  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = '请输入您的姓名';
        else if (value.trim().length < 2) error = '姓名至少需要2个字符';
        break;
      case 'phone':
        if (!value.trim()) error = '请输入联系电话';
        else if (!/^1[3-9]\d{9}$/.test(value)) error = '请输入有效的11位手机号码';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate immediately if already touched
    if (touched[name]) {
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    } else {
        if (name !== 'name' && name !== 'phone' && value) {
             setTouched(prev => ({ ...prev, [name]: true }));
        }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    const newErrors: Record<string, string> = {};
    let hasError = false;
    
    ['name', 'phone'].forEach(key => {
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) {
            newErrors[key] = error;
            hasError = true;
        }
    });

    setErrors(newErrors);
    setTouched(prev => ({ 
        ...prev, 
        name: true, 
        phone: true, 
        company: true, 
        description: true 
    }));

    if (hasError) return;

    setIsSubmitting(true);

    // --- REAL DATA HANDLING START ---
    setTimeout(() => {
        const newLead = {
            id: Date.now(),
            timestamp: new Date().toLocaleString('zh-CN'), // Use Chinese locale time
            ...formData
        };
        
        const existingLeads = JSON.parse(localStorage.getItem('gansu_ai_leads') || '[]');
        localStorage.setItem('gansu_ai_leads', JSON.stringify([newLead, ...existingLeads]));

        setIsSubmitting(false);
        setSubmitted(true);
    }, 1500);
    // --- REAL DATA HANDLING END ---
  };

  // Helper to determine field status
  const getFieldStatus = (name: string) => {
    const isTouched = touched[name];
    const error = errors[name];
    const value = formData[name as keyof typeof formData];

    if (isTouched && error) return 'error';
    if (isTouched && !error && value) return 'success';
    return 'default';
  };

  const getBorderColor = (status: string) => {
    switch (status) {
        case 'error': return 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20';
        case 'success': return 'border-green-500/50 focus:border-green-500 focus:ring-green-500/20';
        default: return 'border-white/10 focus:border-electricBlue focus:ring-electricBlue/50';
    }
  };

  return (
    <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-4 md:px-6 bg-[#020202] relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electricBlue/5 rounded-full blur-[100px]" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="w-full max-w-6xl mx-auto z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center h-full py-12 md:py-0">
            
            {/* Left Text Area */}
            <div className="text-center md:text-left md:w-5/12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
                    技术有温度<br />
                    <span className="text-electricBlue">资产无边界</span>
                </h2>
                
                <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">
                    无论是企业降本增效，还是个人打造数字分身。立即预约演示，开启您的 AI 数字化之旅。
                </p>

                <div className="hidden md:flex flex-col gap-6 text-gray-400">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electricBlue group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500">Email us</div>
                            <div className="text-sm font-medium text-white">contact@gansu-ai.com</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-electricBlue group-hover:text-white transition-colors">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500">Call us</div>
                            <div className="text-sm font-medium text-white">400-888-8888</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Area */}
            <div className="w-full md:w-7/12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 max-h-[80vh] overflow-y-auto scrollbar-hide shadow-2xl relative z-20">
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                             {/* Name */}
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">姓名 <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="您的称呼"
                                        className={`w-full bg-darkBg/50 border rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all ${getBorderColor(getFieldStatus('name'))}`}
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        {getFieldStatus('name') === 'error' && <AlertCircle className="w-4 h-4 text-red-500" />}
                                        {getFieldStatus('name') === 'success' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                    </div>
                                </div>
                                {errors.name && <p className="text-[10px] text-red-500 ml-1">{errors.name}</p>}
                            </div>

                             {/* Phone */}
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">联系电话 <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="手机号码"
                                        className={`w-full bg-darkBg/50 border rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all ${getBorderColor(getFieldStatus('phone'))}`}
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                        {getFieldStatus('phone') === 'error' && <AlertCircle className="w-4 h-4 text-red-500" />}
                                        {getFieldStatus('phone') === 'success' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                    </div>
                                </div>
                                {errors.phone && <p className="text-[10px] text-red-500 ml-1">{errors.phone}</p>}
                            </div>
                        </div>

                        {/* Company & Industry */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">企业名称 <span className="text-gray-600 font-normal">(选填)</span></label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="text" 
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="公司名称"
                                        className={`w-full bg-darkBg/50 border rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all ${getBorderColor(getFieldStatus('company'))}`}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">所属行业 <span className="text-gray-600 font-normal">(选填)</span></label>
                                <div className="relative">
                                    <select 
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleInputChange}
                                        className="w-full bg-darkBg/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-electricBlue focus:outline-none transition-all appearance-none cursor-pointer text-gray-300"
                                    >
                                        <option value="" disabled>选择行业...</option>
                                        <option value="ecommerce">电商直播</option>
                                        <option value="tourism">文旅宣传</option>
                                        <option value="education">教育培训</option>
                                        <option value="government">政务服务</option>
                                        <option value="other">其他行业</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                        
                         {/* Job Title & Budget */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">职位 <span className="text-gray-600 font-normal">(选填)</span></label>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <input 
                                        type="text" 
                                        name="jobTitle"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                        placeholder="您的职位"
                                        className="w-full bg-darkBg/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:border-electricBlue focus:outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-mono text-gray-500 uppercase ml-1">预算范围 <span className="text-gray-600 font-normal">(选填)</span></label>
                                <div className="relative">
                                    <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                    <select 
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full bg-darkBg/50 border border-white/10 rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:border-electricBlue focus:outline-none transition-all appearance-none cursor-pointer text-gray-300"
                                    >
                                        <option value="" disabled>选择预算...</option>
                                        <option value="<5w">5万以内</option>
                                        <option value="5-20w">5-20万</option>
                                        <option value="20-50w">20-50万</option>
                                        <option value=">50w">50万以上</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase ml-1">预计启动时间</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <select 
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    className="w-full bg-darkBg/50 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:border-electricBlue focus:outline-none transition-all appearance-none cursor-pointer text-gray-300"
                                >
                                    <option value="" disabled>选择时间...</option>
                                    <option value="1week">一周内</option>
                                    <option value="1month">一月内</option>
                                    <option value="3months">三月内</option>
                                    <option value="research">仅调研</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                        {/* Type Selection */}
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

                         {/* Description */}
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-gray-500 uppercase ml-1">需求描述</label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                <textarea 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    rows={2}
                                    placeholder="请简述您的具体需求或应用场景..."
                                    className="w-full bg-darkBg/50 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-600 focus:border-electricBlue focus:outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-electricBlue to-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(41,121,255,0.3)] hover:shadow-[0_0_30px_rgba(41,121,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="w-5 h-5 animate-spin" /> 提交中...</>
                            ) : (
                                <><Send className="w-5 h-5" /> 提交预约申请</>
                            )}
                        </button>
                    </form>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                    >
                        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">提交成功</h3>
                            <p className="text-gray-400 max-w-xs mx-auto text-sm">
                                感谢您的信任。数据已录入后台系统，解决方案专家将在 24 小时内与您取得联系 ({formData.phone})。
                            </p>
                        </div>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="px-6 py-2 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/5 transition-colors"
                        >
                            返回表单
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
        
        {/* Footer Bottom Line */}
        <div className="absolute bottom-2 left-0 right-0 z-50 flex justify-center items-center gap-2 pb-2">
             <span className="text-[10px] text-gray-700">© 2024 Gansu AI Solution.</span>
             <button 
                onClick={() => setShowAdmin(true)} 
                className="opacity-50 hover:opacity-100 transition-opacity p-2 text-gray-500 hover:text-white"
                title="管理后台"
             >
                 <Lock className="w-3 h-3" />
             </button>
        </div>

        {/* Admin Panel Modal */}
        <AdminPanel isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
    </section>
  );
};

// --- Value Mappings for Chinese Display ---
const VALUE_MAP: Record<string, string> = {
    'ecommerce': '电商直播',
    'tourism': '文旅宣传',
    'education': '教育培训',
    'government': '政务服务',
    'other': '其他行业',
    '<5w': '5万以内',
    '5-20w': '5-20万',
    '20-50w': '20-50万',
    '>50w': '50万以上',
    '1week': '一周内',
    '1month': '一月内',
    '3months': '三月内',
    'research': '仅调研',
    'default': '-'
};

const getLabel = (val: string) => VALUE_MAP[val] || val || '-';

// --- Admin Panel Component ---

const AdminPanel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [leads, setLeads] = useState<any[]>([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const data = JSON.parse(localStorage.getItem('gansu_ai_leads') || '[]');
            setLeads(data);
        }
    }, [isOpen]);

    const handleDownloadCSV = () => {
        if (leads.length === 0) return;
        
        // CSV Header
        const headers = ["ID", "提交时间", "姓名", "电话", "公司", "职位", "行业", "预算", "启动时间", "类型", "需求描述"];
        
        // CSV Rows
        const rows = leads.map(lead => [
            lead.id,
            `"${lead.timestamp}"`,
            `"${lead.name}"`,
            `"${lead.phone}"`,
            `"${lead.company || ''}"`,
            `"${lead.jobTitle || ''}"`,
            `"${getLabel(lead.industry)}"`,
            `"${getLabel(lead.budget)}"`,
            `"${getLabel(lead.timeline)}"`,
            `"${lead.type}"`,
            `"${(lead.description || '').replace(/"/g, '""')}"`
        ]);

        const csvContent = [
            headers.join(','), 
            ...rows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' }); 
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `leads_export_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleCopyToFlowUs = async () => {
        if (leads.length === 0) return;

        // Create Markdown Table
        const headers = ['ID', '提交时间', '姓名', '电话', '公司', '职位', '行业', '预算', '时间', '类型', '需求'];
        const separator = headers.map(() => '---');
        
        const rows = leads.map(lead => [
            lead.id,
            lead.timestamp,
            lead.name,
            lead.phone,
            lead.company || '-',
            lead.jobTitle || '-',
            getLabel(lead.industry),
            getLabel(lead.budget),
            getLabel(lead.timeline),
            lead.type,
            (lead.description || '-').replace(/\n/g, ' ')
        ]);

        const markdown = [
            `| ${headers.join(' | ')} |`,
            `| ${separator.join(' | ')} |`,
            ...rows.map(row => `| ${row.join(' | ')} |`)
        ].join('\n');

        try {
            await navigator.clipboard.writeText(markdown);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const handleClearData = () => {
        if (window.confirm('确定要清空所有数据吗？此操作无法撤销。')) {
            localStorage.removeItem('gansu_ai_leads');
            setLeads([]);
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
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-[#111] border border-white/10 w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 md:p-6 border-b border-white/10 flex flex-col md:flex-row justify-between items-center bg-[#151515] gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-electricBlue/10 rounded-lg">
                                    <Table className="w-5 h-5 text-electricBlue" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">后台数据管理</h3>
                                    <p className="text-xs text-gray-500">本地存储记录 • 共 {leads.length} 条数据</p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-wrap justify-center">
                                <button 
                                    onClick={handleCopyToFlowUs}
                                    disabled={leads.length === 0}
                                    className="px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-500 hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
                                >
                                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    {copied ? '已复制!' : '复制到 FlowUs'}
                                </button>
                                <button 
                                    onClick={handleDownloadCSV}
                                    disabled={leads.length === 0}
                                    className="px-3 py-2 bg-electricBlue/10 hover:bg-electricBlue text-electricBlue hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
                                >
                                    <Download className="w-3 h-3" /> 导出 CSV
                                </button>
                                <button 
                                    onClick={handleClearData}
                                    disabled={leads.length === 0}
                                    className="px-3 py-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-2 disabled:opacity-50"
                                >
                                    <Trash2 className="w-3 h-3" /> 清空数据
                                </button>
                                <button 
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-2"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        {/* Table Content */}
                        <div className="flex-1 overflow-auto">
                            {leads.length > 0 ? (
                                <table className="w-full text-left border-collapse min-w-[1000px]">
                                    <thead className="bg-white/5 sticky top-0 z-10">
                                        <tr>
                                            {['时间', '姓名', '电话', '公司', '职位', '行业', '预算', '类型', '需求'].map(head => (
                                                <th key={head} className="p-4 text-xs font-mono text-gray-400 uppercase tracking-wider border-b border-white/10 font-bold">
                                                    {head}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {leads.map((lead) => (
                                            <tr key={lead.id} className="hover:bg-white/5 transition-colors group">
                                                <td className="p-4 text-xs text-gray-500 whitespace-nowrap">{lead.timestamp.split(' ')[0]}<br/>{lead.timestamp.split(' ')[1]}</td>
                                                <td className="p-4 text-sm text-white font-medium">{lead.name}</td>
                                                <td className="p-4 text-sm text-gray-300 font-mono">{lead.phone}</td>
                                                <td className="p-4 text-sm text-gray-400">{lead.company || '-'}</td>
                                                <td className="p-4 text-sm text-gray-400">{lead.jobTitle || '-'}</td>
                                                <td className="p-4 text-sm text-gray-400">{getLabel(lead.industry)}</td>
                                                <td className="p-4 text-sm text-gray-400">{getLabel(lead.budget)}</td>
                                                <td className="p-4 text-xs whitespace-nowrap">
                                                    <span className={`px-2 py-1 rounded-full border ${
                                                        lead.type.includes('B2B') ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' :
                                                        lead.type.includes('B2C') ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' :
                                                        'border-gray-500/30 text-gray-400'
                                                    }`}>
                                                        {lead.type.split(' ')[0]}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-sm text-gray-500 max-w-xs truncate group-hover:whitespace-normal group-hover:bg-[#1a1a1a] transition-all absolute-hover" title={lead.description}>
                                                    {lead.description || '-'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                        <Table className="w-8 h-8 opacity-20" />
                                    </div>
                                    <p>暂无数据 (No Data)</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Footer;