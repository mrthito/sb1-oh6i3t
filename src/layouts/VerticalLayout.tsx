import { ReactNode, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, LayoutIcon, LogOutIcon, MenuIcon, XIcon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

interface VerticalLayoutProps {
  children: ReactNode;
  onLogout: () => void;
  onToggleLayout: () => void;
}

const VerticalLayout = ({ children, onLogout, onToggleLayout }: VerticalLayoutProps) => {
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen flex">
      <aside
        className={`bg-background border-r transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {sidebarOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
          <nav className="flex-grow">
            {/* Add your navigation items here */}
          </nav>
          <div className="flex flex-col space-y-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onToggleLayout}>
              <LayoutIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onLogout}>
              <LogOutIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </aside>
      <main className="flex-grow bg-background p-6">{children}</main>
    </div>
  );
};

export default VerticalLayout;