import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  Activity, 
  Box, 
  Navigation, 
  AlertTriangle,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Painel Geral', icon: LayoutDashboard },
    { id: 'instructions', label: 'Instruções', icon: Navigation },
    { id: 'cargo', label: 'Içamento e Carga', icon: Box },
    { id: 'motors', label: 'Controle de Motores', icon: Activity },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -280 }}
        className="fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 lg:translate-x-0 transition-transform duration-300 ease-in-out border-r border-slate-800 shadow-2xl"
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,137,64,0.3)]">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-bold text-xl tracking-tight text-white">AutoNav</h1>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 hover:bg-white/10 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (window.innerWidth < 1024) setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-secondary text-white shadow-[0_0_20px_rgba(0,137,64,0.3)]' 
                  : 'hover:bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            <div className="text-[10px]">
              <p className="font-bold text-white uppercase tracking-widest">Sistema Online</p>
              <p className="text-slate-500 font-mono">v1.2.4-stable</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
