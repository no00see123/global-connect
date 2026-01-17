import React from 'react';
import { NavItem } from '../types';
import { ShieldCheck, Server, Globe, Users, Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isMobileOpen: boolean;
  toggleMobileMenu: () => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: '首页概览', icon: Rocket },
  { id: 'personal', label: '个人套餐', icon: Users },
  { id: 'countries', label: '全球节点', icon: Globe },
  { id: 'team', label: '团队专线', icon: Server },
  { id: 'contact', label: '联系我们', icon: ShieldCheck },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, scrollToSection, isMobileOpen, toggleMobileMenu }) => {
  const sidebarContent = (
    <div className="flex flex-col h-full bg-premium-dark border-r border-white/10 p-6">
      <div className="mb-12 pt-4">
        <h1 className="text-2xl font-serif font-bold text-white tracking-wide">
          Global<span className="text-premium-gold">Connect</span>
        </h1>
        <p className="text-xs text-premium-muted mt-2 tracking-widest uppercase">Premium Network</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              scrollToSection(item.id);
              if (window.innerWidth < 1024) toggleMobileMenu();
            }}
            className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
              activeSection === item.id
                ? 'bg-white/5 text-premium-gold border-l-2 border-premium-gold'
                : 'text-premium-muted hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon size={20} className={activeSection === item.id ? 'text-premium-gold' : 'text-gray-500 group-hover:text-white'} />
            <span className="font-medium text-sm tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-white/10">
        <div className="bg-gradient-to-br from-premium-gold/20 to-transparent p-4 rounded-xl border border-premium-gold/20">
          <p className="text-xs text-premium-gold mb-1 font-bold">专属客服</p>
          <p className="text-sm text-white">7x24小时 在线支持</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-premium-dark/90 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center">
        <span className="text-xl font-serif font-bold text-white">Global<span className="text-premium-gold">Connect</span></span>
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-72 z-40">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-64 z-40 lg:hidden shadow-2xl"
          >
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm" onClick={toggleMobileMenu} />
      )}
    </>
  );
};