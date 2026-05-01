import React from 'react';
import { motion } from 'motion/react';
import { Activity, Clock } from 'lucide-react';
import { MissionData } from '../../types/dashboard';

interface MissionProgressProps {
  data: MissionData;
}

export const MissionProgress: React.FC<MissionProgressProps> = ({ data }) => {
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h.toString().padStart(2, '0') + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-slate-700/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-secondary" />
            Progresso da Missão
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Tempo Total: {formatTime(data.totalTime)}
            </span>
          </div>
        </div>
        <span className="text-secondary font-mono font-bold text-xl">{data.progress}%</span>
      </div>
      <div className="space-y-6">
        <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${data.progress}%` }}
            className="h-full bg-secondary shadow-[0_0:15px_rgba(0,137,64,0.5)]"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 text-[10px] uppercase tracking-widest font-bold">
          {data.checkpoints.map((cp) => (
            <div key={cp.id} className="text-center space-y-2">
              <div className={`w-2 h-2 rounded-full mx-auto ${
                cp.status === 'completed' || cp.status === 'active' 
                  ? 'bg-secondary shadow-[0_0_8px_rgba(0,137,64,0.8)]' 
                  : 'bg-slate-600'
              }`} />
              <p className={cp.status === 'pending' ? 'text-slate-400' : 'text-slate-200'}>
                {cp.label}
              </p>
              <p className={`font-mono ${cp.status === 'pending' ? 'text-slate-500' : 'text-secondary'}`}>
                {formatTime(cp.time)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
