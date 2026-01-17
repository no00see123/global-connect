import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const TeamPlan: React.FC = () => {
  return (
    <section id="team" className="py-20 px-6 bg-premium-dark">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#121214] border border-white/10 rounded-2xl p-8 lg:p-16 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-400 font-bold tracking-wider text-xs uppercase mb-4 block">
                Enterprise
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
                团队定制方案
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                为跨境电商团队量身定制的全托管网络架构。
                <br />
                采用企业级软路由方案，实现办公环境无感跨境。
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "高端 IPLC 专线 (物理专线直连)",
                  "企业级软路由网关部署",
                  "独立管理后台 (流量监控/权限管理)",
                  "支持 30+ 台设备同时在线"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
                  预约技术顾问 <ArrowRight size={16} />
                </button>
                <p className="text-xs text-gray-500">
                  搭建费用 ¥8000 (含硬件与上门调试)
                </p>
              </div>
            </div>

            {/* Right Side - Simple Visual or Info Card */}
            <div className="bg-black/40 border border-white/10 rounded-xl p-8">
               <div className="text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">核心优势</div>
               <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                     <div>
                        <div className="text-white font-medium">零丢包</div>
                        <div className="text-xs text-gray-500">IPLC 物理专线</div>
                     </div>
                     <div className="text-premium-gold font-mono">0% Loss</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                     <div>
                        <div className="text-white font-medium">无感接入</div>
                        <div className="text-xs text-gray-500">无需客户端配置</div>
                     </div>
                     <div className="text-premium-gold font-mono">Seamless</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                     <div>
                        <div className="text-white font-medium">独立 IP 池</div>
                        <div className="text-xs text-gray-500">纯净度保障</div>
                     </div>
                     <div className="text-premium-gold font-mono">Dedicated</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};