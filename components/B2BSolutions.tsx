import React, { useState } from 'react';
import { ShoppingBag, MapPin, Plane, Building2, GraduationCap, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  {
    id: 'ecommerce',
    name: '电商直播',
    icon: <ShoppingBag className="w-5 h-5" />,
    title: "24h 不间断带货",
    desc: "针对甘肃特产（百合、苹果等），打造日不落直播间。低成本测试爆品，承接闲时流量。",
    stats: "GMV 提升 40%",
    image: "https://picsum.photos/id/1/800/500"
  },
  {
    id: 'local',
    name: '本地生活',
    icon: <MapPin className="w-5 h-5" />,
    title: "矩阵式探店视频",
    desc: "批量生成餐饮、娱乐团购推广视频。无需达人探店，数字人自动口播生成海量素材。",
    stats: "曝光量 提升 200%",
    image: "https://picsum.photos/id/225/800/500"
  },
  {
    id: 'tourism',
    name: '文旅宣传',
    icon: <Plane className="w-5 h-5" />,
    title: "AI 金牌导游",
    desc: "莫高窟、七彩丹霞多语种讲解。为甘肃文旅提供中英阿语导游，服务全球游客。",
    stats: "接待效率 提升 5倍",
    image: "https://picsum.photos/id/1040/800/500"
  },
  {
    id: 'gov',
    name: '政务服务',
    icon: <Building2 className="w-5 h-5" />,
    title: "智慧大厅引导",
    desc: "办事大厅智能引导员，政策解读数字专员。提升政务服务温度，减少排队咨询时间。",
    stats: "满意度 98%",
    image: "https://picsum.photos/id/26/800/500"
  },
  {
    id: 'edu',
    name: '教育培训',
    icon: <GraduationCap className="w-5 h-5" />,
    title: "偏远地区名师",
    desc: "将名师形象数字化，输送到教育资源匮乏地区。实现教育公平，标准化课程录制。",
    stats: "覆盖率 100%",
    image: "https://picsum.photos/id/20/800/500"
  }
];

const B2BSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <SectionWrapper>
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">行业解决方案 (B2B)</h2>
        <p className="text-textGray">深耕五大场景，赋能实体经济</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 h-[60vh]">
        {/* Navigation Tabs */}
        <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible p-1">
          {industries.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[150px] md:min-w-0 ${
                activeTab.id === item.id 
                  ? 'bg-electricBlue text-white shadow-lg shadow-blue-900/20' 
                  : 'bg-transparent text-gray-500 hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="font-semibold">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 relative bg-cardBg rounded-3xl border border-white/10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center z-10 bg-cardBg/90 backdrop-blur-md md:bg-transparent">
                <div className="text-electricBlue text-6xl font-black mb-6 opacity-20 absolute top-4 left-4 md:static">
                    0{industries.indexOf(activeTab) + 1}
                </div>
                <h3 className="text-3xl font-bold mb-4">{activeTab.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {activeTab.desc}
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-xs text-gray-500 mb-1">关键指标</div>
                    <div className="text-electricBlue font-bold text-xl">{activeTab.stats}</div>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold hover:text-electricBlue transition-colors">
                    了解详情 <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-1/2 h-full absolute md:static inset-0 z-0">
                <img 
                    src={activeTab.image} 
                    alt={activeTab.name} 
                    className="w-full h-full object-cover grayscale opacity-30 md:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cardBg via-cardBg/80 to-transparent md:bg-gradient-to-l" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default B2BSolutions;