import { Button } from './ui/button';
import { Header } from './Header';
import { AdminDashboard } from './AdminDashboard';
import { HostDashboard } from './HostDashboard';

type UserRole = 'admin' | 'host';

interface DashboardLayoutProps {
  userRole: UserRole;
  onLogin: (role: UserRole | null) => void;
  onNavigate: (section: string) => void;
  onLogout: () => void;
}

export function DashboardLayout({ userRole, onLogin, onNavigate, onLogout }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header onLogin={onLogin} onNavigate={onNavigate} />
      <div className="flex justify-end p-4">
        <Button onClick={onLogout} variant="outline">
          Logout
        </Button>
      </div>
      {userRole === 'admin' ? <AdminDashboard /> : <HostDashboard />}
    </div>
  );
}