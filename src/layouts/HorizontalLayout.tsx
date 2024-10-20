import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, LayoutIcon, LogOutIcon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

interface HorizontalLayoutProps {
  children: ReactNode;
  onLogout: () => void;
  onToggleLayout: () => void;
}

const HorizontalLayout = ({ children, onLogout, onToggleLayout }: HorizontalLayoutProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onToggleLayout}>
              <LayoutIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onLogout}>
              <LogOutIcon className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-grow bg-background">{children}</main>
    </div>
  );
};

export default HorizontalLayout;