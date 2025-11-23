import { MetricCard } from '../components/dashboard/MetricCard';
import { SalesChart } from '../components/dashboard/SalesChart';
import { InventoryChart } from '../components/dashboard/InventoryChart';
import { dashboardMetrics, salesVsProduction, inventoryData } from '../data/mockData';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart data={salesVsProduction} />
        <InventoryChart data={inventoryData} />
      </div>
    </div>
  );
}
