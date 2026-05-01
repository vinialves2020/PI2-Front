import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUp, 
  ArrowLeft, 
  ArrowRight, 
  ArrowDown, 
  Trash2, 
  Plus, 
  Check, 
  X,
  ChevronDown
} from 'lucide-react';

interface Instruction {
  id: string;
  type: 'forward' | 'left' | 'right' | 'backward';
  value: string;
}

export const Instructions: React.FC = () => {
  const [instructions, setInstructions] = useState<Instruction[]>([
    { id: '1', type: 'forward', value: '45cm' },
    { id: '2', type: 'left', value: '' },
    { id: '3', type: 'forward', value: '30cm' },
    { id: '4', type: 'left', value: '' },
  ]);

  const addInstruction = () => {
    const newId = (instructions.length + 1).toString();
    setInstructions([...instructions, { id: newId, type: 'forward', value: '0cm' }]);
  };

  const removeInstruction = (id: string) => {
    setInstructions(instructions.filter(inst => inst.id !== id));
  };

  const updateInstruction = (id: string, updates: Partial<Instruction>) => {
    setInstructions(instructions.map(inst => inst.id === id ? { ...inst, ...updates } : inst));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'forward': return <ArrowUp className="w-5 h-5" />;
      case 'left': return <ArrowLeft className="w-5 h-5" />;
      case 'right': return <ArrowRight className="w-5 h-5" />;
      case 'backward': return <ArrowDown className="w-5 h-5" />;
      default: return <ArrowUp className="w-5 h-5" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'forward': return 'Seguir em frente';
      case 'left': return 'Virar à esquerda';
      case 'right': return 'Virar à direita';
      case 'backward': return 'Dar ré';
      default: return '';
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10 py-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight">Insira as Instruções</h1>
        <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Configuração de Rota Manual</p>
      </header>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {instructions.map((inst, index) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-5 flex items-center gap-6 shadow-xl group hover:border-secondary/30 transition-all"
            >
              {/* Icon Selector Area */}
              <div className="relative group/select">
                <div className="w-16 h-16 bg-slate-900/80 rounded-2xl border border-slate-700 flex items-center justify-center text-secondary shadow-inner">
                  {getIcon(inst.type)}
                  <ChevronDown className="w-3 h-3 absolute bottom-2 right-2 text-slate-500" />
                </div>
                {/* Simple dropdown simulation for demo */}
                <select 
                  value={inst.type}
                  onChange={(e) => updateInstruction(inst.id, { type: e.target.value as any })}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                >
                  <option value="forward">Frente</option>
                  <option value="left">Esquerda</option>
                  <option value="right">Direita</option>
                  <option value="backward">Ré</option>
                </select>
              </div>

              {/* Content Area */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Instrução {index + 1}</span>
                  <button 
                    onClick={() => removeInstruction(inst.id)}
                    className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-white font-bold text-lg min-w-[140px]">{getLabel(inst.type)}</p>
                  {(inst.type === 'forward' || inst.type === 'backward') && (
                    <div className="flex-1 max-w-[120px]">
                      <input 
                        type="text" 
                        value={inst.value}
                        onChange={(e) => updateInstruction(inst.id, { value: e.target.value })}
                        placeholder="Ex: 45cm"
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-2 text-secondary font-mono font-bold focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-8 px-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-red-500/20 text-red-500 border border-red-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)]"
        >
          <X className="w-8 h-8" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addInstruction}
          className="px-12 py-5 bg-slate-800 text-white rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl group"
        >
          <Plus className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,137,64,0.4)]"
        >
          <Check className="w-8 h-8" />
        </motion.button>
      </div>
    </div>
  );
};
