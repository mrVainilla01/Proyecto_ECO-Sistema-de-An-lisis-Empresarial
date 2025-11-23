import { LayoutGrid, TrendingUp, Package, Archive, DollarSign, LineChart, Bell } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'dashboard', label: 'Panel Principal', icon: LayoutGrid },
  { id: 'sales', label: 'Ventas', icon: TrendingUp },
  { id: 'production', label: 'Producción', icon: Package },
  { id: 'inventory', label: 'Inventario', icon: Archive },
  { id: 'costs', label: 'Costos', icon: DollarSign },
  { id: 'predictions', label: 'Predicciones', icon: LineChart },
  { id: 'alerts', label: 'Alertas', icon: Bell }
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-6">
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
