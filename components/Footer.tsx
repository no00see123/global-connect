import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              Global<span className="text-premium-gold">Connect</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              专业的跨境电商网络服务商。
              <br />
              我们专注于为出海企业提供稳定、合规的网络基础设施。
            </p>
            <div className="flex gap-4 text-xs text-gray-600">
               <span>Terms of Service</span>
               <span>Privacy Policy</span>
            </div>
          </div>

          {/* Contact - Direct & Simple */}
          <div className="md:w-1/2 flex flex-col items-start md:items-end">
             <h4 className="text-white font-bold mb-6 flex items-center gap-2">
               <MessageCircle size={18} className="text-premium-gold" /> 联系我们
             </h4>
             
             <div className="flex flex-row gap-6 items-start">
                <div className="text-right hidden md:block">
                   <p className="text-gray-400 text-sm mb-2">微信扫码咨询</p>
                   <p className="text-gray-600 text-xs">7x24小时 在线支持</p>
                </div>

                {/* QR Code with Crop - Assuming the image has a top header we want to hide */}
                <div className="bg-white p-2 rounded-lg shadow-lg">
                   {/* 
                      Container with fixed height/width and overflow hidden.
                      The image is positioned to hide the top ~25% where the name usually is.
                      Adjust 'object-[center_35%]' based on the actual image aspect ratio.
                   */}
                   <div className="w-32 h-32 overflow-hidden relative">
                      {/* 
                          PLACEHOLDER: Using a generic QR code for demonstration.
                          IN PRODUCTION: Replace src with the uploaded WeChat QR code image.
                      */}
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://u.wechat.com/YourWeChatLink" 
                        alt="WeChat Contact" 
                        className="w-full h-full object-cover"
                      />
                   </div>
                   <div className="text-center mt-2">
                     <p className="text-[10px] font-bold text-black uppercase tracking-wider">Scan to Add</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 GlobalConnect Premium Network.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};