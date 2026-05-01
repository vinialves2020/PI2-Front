import React from 'react';
import { LogEntry } from '../../types/dashboard';

const LogItem: React.FC<{ entry: LogEntry }> = ({ entry }) => {
  const colors = {
    success: 'bg-secondary shadow-[0_0_8px_rgba(0,137,64,0.5)]',
    info: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]',
    warning: 'bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]',
    error: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'
  };
  
  return (
    <div className="flex items-center gap-3">
      <div className={`w-1.5 h-1.5 rounded-full ${colors[entry.type]}`} />
      <p className="flex-1 text-[11px] font-medium text-slate-300">{entry.message}</p>
      <span className="text-[10px] font-mono text-slate-500">{entry.time}</span>
    </div>
  );
};

interface SystemLogsProps {
  logs: LogEntry[];
}

export const SystemLogs: React.FC<SystemLogsProps> = ({ logs }) => {
  return (
    <div className="bg-slate-800/50 rounded-3xl p-6 shadow-xl border border-slate-700/50">
      <h2 className="text-lg font-bold text-white mb-6">Estado do Sistema</h2>
      <div className="space-y-4">
        {logs.map((log) => (
          <LogItem key={log.id} entry={log} />
        ))}
      </div>
    </div>
  );
};
