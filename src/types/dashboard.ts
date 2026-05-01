export interface LogEntry {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  time: string;
}

export interface Checkpoint {
  id: string;
  label: string;
  time: number; // seconds
  status: 'completed' | 'active' | 'pending';
}

export interface MissionData {
  progress: number;
  totalTime: number;
  checkpoints: Checkpoint[];
}

export interface SystemStat {
  label: string;
  value: string;
  subValue: string;
  iconName: 'Battery' | 'Wifi' | 'MapPin' | 'Package';
  color: string;
}

export interface NavigationData {
  speed: string;
  angle: string;
  status: string;
  isAutonomous: boolean;
}

export interface MotorState {
  syncOk: boolean;
  leftRpm: number;
  rightRpm: number;
}

export interface HoistState {
  height: string;
}

export interface DashboardData {
  mission: MissionData;
  stats: SystemStat[];
  navigation: NavigationData;
  motors: MotorState;
  hoist: HoistState;
  logs: LogEntry[];
}
