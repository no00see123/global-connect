import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-premium-dark relative border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-premium-gold/30 bg-premium-gold/5 text-premium-gold text-xs font-medium tracking-wide mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-premium-gold animate-pulse"></span>
              专为跨境电商打造
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
              连接全球 <br />
              <span className="text-premium-gold">无界商机</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              提供双ISP独享IP与IPLC专线网络。 <br/>
              为您的跨境业务提供金融级稳定保障。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('personal')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-premium-gold hover:bg-premium-goldDim text-black font-bold rounded text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                查看个人套餐 <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-medium rounded text-sm tracking-wider uppercase transition-colors"
              >
                了解团队定制
              </button>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="hidden lg:block relative"
          >
            {/* Simple Graphic Representation instead of abstract background */}
            <div className="aspect-square rounded-2xl border border-white/10 bg-[#121214] p-8 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               
               <div className="space-y-6 z-10">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                     <span className="text-gray-400 text-sm">网络状态</span>
                     <span className="text-green-500 text-xs font-mono">● 正常运行</span>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between text-sm">
                        <span className="text-white">IPLC 专线</span>
                        <span className="text-premium-gold">已连接</span>
                     </div>
                     <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-premium-gold h-full w-[98%]"></div>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between text-sm">
                        <span className="text-white">平均延迟</span>
                        <span className="text-white">32ms</span>
                     </div>
                     <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[85%]"></div>
                     </div>
                  </div>
               </div>

               <div className="z-10 mt-8 pt-8 border-t border-white/5">
                 <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs text-gray-500">SLA 在线率保障</div>
                    </div>
                    <Globe2Icon className="text-white/20" size={48} />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Globe2Icon = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);