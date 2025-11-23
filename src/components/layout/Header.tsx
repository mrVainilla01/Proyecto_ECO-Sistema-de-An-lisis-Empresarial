import { BarChart3, LogOut } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  userName: string;
  company: string;
  onLogout: () => void;
}

export function Header({ userName, company, onLogout }: HeaderProps) {
  const today = new Date().toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-xl text-gray-900">Sistema de Análisis Empresarial</h1>
            <p className="text-sm text-gray-500">Gestión inteligente para PyMEs</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-900">{company}</p>
            <p className="text-xs text-gray-500">Último acceso: Hoy</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Salir
          </Button>
        </div>
      </div>
    </header>
  );
}
