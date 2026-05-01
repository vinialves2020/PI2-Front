import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { HoistState } from '../../types/dashboard';

interface HoistControlProps {
  state: HoistState;
}

export const HoistControl: React.FC<HoistControlProps> = ({ state }) => {
  return (
    <div className="bg-slate-800/50 rounded-3xl p-6 shadow-xl border border-slate-700/50">
      <h2 className="text-lg font-bold text-white mb-6">Controle de Içamento</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-400">Altura Atual</span>
          <span className="text-xl font-mono font-bold text-secondary">{state.height}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-700/50 hover:bg-slate-700 text-white rounded-2xl transition-all border border-slate-600/50 group">
            <ArrowUp className="w-6 h-6 text-secondary group-hover:translate-y-[-2px] transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Subir</span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-700/50 hover:bg-slate-700 text-white rounded-2xl transition-all border border-slate-600/50 group">
            <ArrowDown className="w-6 h-6 text-secondary group-hover:translate-y-[2px] transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Descer</span>
          </button>
        </div>
        <button className="w-full py-4 bg-secondary text-white rounded-2xl font-bold shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all uppercase tracking-widest text-xs">
          LIBERAR CARGA
        </button>
      </div>
    </div>
  );
};
