import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Instructions } from './components/Instructions';
import { Menu, Bell, User, Search } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 lg:ml-64 min-w-0">
        {/* Mobile Toggle Button (since header is gone) */}
        <div className="lg:hidden p-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 lg:p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'instructions' && <Instructions />}
          {activeTab !== 'dashboard' && activeTab !== 'instructions' && (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Módulo em Desenvolvimento</h3>
                <p className="text-slate-400">Esta funcionalidade estará disponível em breve.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
