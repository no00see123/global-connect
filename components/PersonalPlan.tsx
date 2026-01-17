import React from 'react';
import { Check, Globe, Wifi } from 'lucide-react';
import { COUNTRY_PRICES } from '../constants';

export const PersonalPlan: React.FC = () => {
  return (
    <section id="personal" className="py-20 px-6 bg-[#0d0d10] border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-2">
              个人优选套餐
            </h2>
            <p className="text-gray-400">
              灵活组合方案：基础订阅 + 独享 IP
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-premium-gold text-sm font-medium border border-premium-gold/30 px-3 py-1 rounded">
             推荐组合方案
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: VPN Base Plan */}
          <div className="lg:col-span-4 bg-[#151518] rounded-lg p-8 border border-white/5 flex flex-col h-full">
             <div className="mb-6">
               <div className="p-3 bg-white/5 rounded-lg w-fit mb-4">
                 <Wifi size={24} className="text-white" />
               </div>
               <h3 className="text-xl font-bold text-white">VPN 基础订阅</h3>
               <p className="text-sm text-gray-500 mt-2">包含所有通用线路与服务支持</p>
             </div>

             <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif text-premium-gold">¥600</span>
                  <span className="text-sm text-gray-400">/ 年</span>
                </div>
                <div className="text-xs text-gray-600 mt-1">相当于 ¥50 / 月</div>
             </div>

             <ul className="space-y-4 mb-8 flex-1">
                {[
                  "600+ 全球节点",
                  "全平台客户端支持",
                  "4K 视频秒开",
                  "智能分流技术",
                  "7x24h 客服支持"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={14} className="text-premium-gold" />
                    {item}
                  </li>
                ))}
             </ul>

             <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded transition-colors text-sm">
               订阅基础包
             </button>
          </div>

          {/* Right: IP Add-ons */}
          <div className="lg:col-span-8 bg-[#151518] rounded-lg p-8 border border-white/5">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-premium-gold/10 rounded">
                  <Globe className="text-premium-gold" size={20} />
                </div>
                <div>
                   <h3 className="text-lg font-bold text-white">双 ISP 独享 IP (选配)</h3>
                   <p className="text-xs text-gray-400">需配合基础订阅使用，为账号运营提供纯净环境</p>
                </div>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {COUNTRY_PRICES.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded bg-black/40 border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.flag}</span>
                      <span className="text-gray-300 text-sm font-medium">{item.country}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-premium-gold font-bold font-serif text-sm">¥{item.price}</span>
                      <span className="text-[10px] text-gray-600 ml-1">/月</span>
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-gray-500">
               <p>
                 * 标价为单 IP 月付价格，可叠加购买多个国家 IP。
               </p>
               <button className="px-6 py-2 bg-premium-gold text-black font-bold rounded hover:bg-premium-goldDim transition-colors">
                 咨询 IP 详情
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};