import React from 'react';
import { motion } from 'motion/react';
import { Navigation, AlertCircle } from 'lucide-react';
import { NavigationData } from '../../types/dashboard';

interface NavigationMapProps {
  data: NavigationData;
}

export const NavigationMap: React.FC<NavigationMapProps> = ({ data }) => {
  return (
    <div className="bg-slate-800/50 rounded-3xl p-6 shadow-xl border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Navigation className="w-5 h-5 text-secondary" />
          Navegação em Tempo Real
        </h2>
        <div className="flex gap-2">
          {data.isAutonomous && (
            <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-bold border border-secondary/30">
              AUTÔNOMO
            </span>
          )}
        </div>
      </div>
      
      <div className="aspect-video bg-slate-950 rounded-2xl relative overflow-hidden flex items-center justify-center border-4 border-slate-800 shadow-inner">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        <motion.div 
          animate={{ 
            x: [0, 150, 150, 0, 0],
            y: [0, 0, 80, 80, 0],
            rotate: [0, 0, 90, 180, 270, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-10 h-14 bg-secondary rounded-lg border-2 border-white/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,137,64,0.4)]"
        >
          <div className="w-1 h-5 bg-white/40 rounded-full mb-2" />
        </motion.div>
        
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="bg-slate-900/80 backdrop-blur-md p-3 rounded-xl text-white text-[10px] space-y-1 border border-white/10">
            <p>Velocidade: <span className="text-secondary font-mono">{data.speed}</span></p>
            <p>Ângulo: <span className="text-secondary font-mono">{data.angle}</span></p>
            <p>Status: <span className="text-green-400 font-mono">{data.status}</span></p>
          </div>
          <div className="flex gap-2">
             <button className="p-3 bg-red-600/20 hover:bg-red-600/40 text-red-500 border border-red-500/30 rounded-xl shadow-lg transition-all group">
                <AlertCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
