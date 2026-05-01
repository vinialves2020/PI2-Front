import React, { useState, useEffect } from 'react';
import { MissionProgress } from './dashboard/MissionProgress';
import { StatusGrid } from './dashboard/StatusGrid';
import { NavigationMap } from './dashboard/NavigationMap';
import { SystemLogs } from './dashboard/SystemLogs';
import { MotorControl } from './dashboard/MotorControl';
import { HoistControl } from './dashboard/HoistControl';
import { DashboardData } from '../types/dashboard';

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock fetching data from backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      // simulate network delay
      // await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockData: DashboardData = {
        mission: {
          progress: 65,
          totalTime: 1452,
          checkpoints: [
            { id: '1', label: 'Partida', time: 420, status: 'completed' },
            { id: '2', label: 'Carga', time: 840, status: 'completed' },
            { id: '3', label: 'Entrega', time: 192, status: 'active' }
          ]
        },
        stats: [
          { iconName: 'Battery', label: 'Bateria', value: '84%', color: 'text-secondary', subValue: '4.2h restantes' },
          { iconName: 'Wifi', label: 'Conexão', value: 'Excelente', color: 'text-blue-400', subValue: 'Latência: 12ms' },
          { iconName: 'MapPin', label: 'Localização', value: 'Zona A-12', color: 'text-primary', subValue: 'Setor de Carga' },
          { iconName: 'Package', label: 'Estado da Carga', value: 'Carregado', color: 'text-orange-400', subValue: 'Peso: 450kg' }
        ],
        navigation: {
          speed: '1.2 m/s',
          angle: '14.5°',
          status: 'ATIVO',
          isAutonomous: true
        },
        motors: {
          syncOk: true,
          leftRpm: 1240,
          rightRpm: 1238
        },
        hoist: {
          height: '1.45m'
        },
        logs: [
          { id: '1', type: 'success', message: 'Cálculo de rota concluído', time: '10:24' },
          { id: '2', type: 'info', message: 'Área de carga identificada', time: '10:22' },
          { id: '3', type: 'warning', message: 'Ajuste dinâmico de trajetória', time: '10:18' },
          { id: '4', type: 'success', message: 'Motores sincronizados', time: '10:15' }
        ]
      };

      setData(mockData);
      setLoading(false);
    };

    fetchDashboardData();

    // Setup real-time updates simulation
    const interval = setInterval(() => {
      setData(prev => {
        if (!prev) return null;
        return {
          ...prev,
          mission: {
            ...prev.mission,
            totalTime: prev.mission.totalTime + 1,
            checkpoints: prev.mission.checkpoints.map((cp, idx) => 
              idx === 2 ? { ...cp, time: cp.time + 1 } : cp
            )
          },
          motors: {
            ...prev.motors,
            leftRpm: 1240 + Math.floor(Math.random() * 10 - 5),
            rightRpm: 1238 + Math.floor(Math.random() * 10 - 5)
          }
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Mission Progress */}
      <MissionProgress data={data.mission} />

      {/* Header Stats */}
      <StatusGrid stats={data.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Monitoring Area */}
        <div className="lg:col-span-2 space-y-8">
          <NavigationMap data={data.navigation} />
        </div>

        {/* Control Panel Sidebar */}
        <div className="space-y-8">
          <SystemLogs logs={data.logs} />
          <MotorControl state={data.motors} />
          <HoistControl state={data.hoist} />
        </div>
      </div>
    </div>
  );
};
