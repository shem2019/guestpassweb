import { useState } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { LandingPageLayout } from './components/LandingPageLayout';

type UserRole = 'admin' | 'host' | null;
type CurrentPage = 'home' | 'features' | 'pricing' | 'faq' | 'dashboard';

export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('home');
  };

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      setCurrentPage('home');
      setUserRole(null);
    } else {
      setCurrentPage(section as CurrentPage);
    }
  };

  const handleGetStarted = () => {
    setCurrentPage('pricing');
  };

  // Dashboard view
  if (userRole && currentPage === 'dashboard') {
    return (
      <DashboardLayout
        userRole={userRole}
        onLogin={handleLogin}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />
    );
  }

  // Landing page view
  return (
    <LandingPageLayout
      currentPage={currentPage as 'home' | 'features' | 'pricing' | 'faq'}
      onLogin={handleLogin}
      onNavigate={handleNavigate}
      onGetStarted={handleGetStarted}
    />
  );
}