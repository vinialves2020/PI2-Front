import React from 'react';
import { Activity } from 'lucide-react';
import { MotorState } from '../../types/dashboard';

interface MotorControlProps {
  state: MotorState;
}

export const MotorControl: React.FC<MotorControlProps> = ({ state }) => {
  return (
    <div className="bg-slate-800/50 rounded-3xl p-6 shadow-xl border border-slate-700/50">
      <h2 className="text-lg font-bold text-white mb-6">Controle de Motores</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-2xl border border-slate-700/30">
          <div className="flex items-center gap-3">
            <Activity className="w-5 h-5 text-secondary" />
            <span className="text-sm font-bold text-slate-200">Sincronização</span>
          </div>
          <span className="text-xs font-bold text-secondary">
            {state.syncOk ? 'OK' : 'FALHA'}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-900/50 rounded-2xl text-center border border-slate-700/30">
            <p className="text-[10px] text-slate-500 uppercase font-bold">Motor Esq.</p>
            <p className="text-sm font-bold text-white">{state.leftRpm} RPM</p>
          </div>
          <div className="p-3 bg-slate-900/50 rounded-2xl text-center border border-slate-700/30">
            <p className="text-[10px] text-slate-500 uppercase font-bold">Motor Dir.</p>
            <p className="text-sm font-bold text-white">{state.rightRpm} RPM</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl font-bold text-[10px] hover:bg-secondary/20 transition-colors uppercase tracking-wider">
            RETOMAR
          </button>
          <button className="flex-1 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl font-bold text-[10px] hover:bg-red-500/20 transition-colors uppercase tracking-wider">
            PARAR
          </button>
        </div>
      </div>
    </div>
  );
};
