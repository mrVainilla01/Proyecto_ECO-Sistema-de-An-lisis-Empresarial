import { ReactNode } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

interface LayoutProps {
  userName: string;
  company: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
  children: ReactNode;
}

export function Layout({ userName, company, activeTab, onTabChange, onLogout, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName={userName} company={company} onLogout={onLogout} />
      <Navigation activeTab={activeTab} onTabChange={onTabChange} />
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
