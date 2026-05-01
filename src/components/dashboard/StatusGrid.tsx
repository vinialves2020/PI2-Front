import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SystemStat } from '../../types/dashboard';

interface StatusCardProps {
  stat: SystemStat;
}

export const StatusCard: React.FC<StatusCardProps> = ({ stat }) => {
  const Icon = (LucideIcons as any)[stat.iconName];

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-slate-800/50 p-6 rounded-3xl shadow-xl border border-slate-700/50"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-3 rounded-2xl bg-slate-900/50 ${stat.color} border border-white/5`}>
          {Icon && <Icon className="w-6 h-6" />}
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
          <p className="text-2xl font-black text-white">{stat.value}</p>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{stat.subValue}</p>
    </motion.div>
  );
};

interface StatusGridProps {
  stats: SystemStat[];
}

export const StatusGrid: React.FC<StatusGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatusCard key={index} stat={stat} />
      ))}
    </div>
  );
};
