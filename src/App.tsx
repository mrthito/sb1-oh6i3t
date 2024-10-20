import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import HorizontalLayout from './layouts/HorizontalLayout';
import VerticalLayout from './layouts/VerticalLayout';
import { ThemeProvider } from './components/theme-provider';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('vertical');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleLayout = () => {
    setLayout(layout === 'horizontal' ? 'vertical' : 'horizontal');
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                layout === 'horizontal' ? (
                  <HorizontalLayout onLogout={handleLogout} onToggleLayout={toggleLayout}>
                    <Dashboard />
                  </HorizontalLayout>
                ) : (
                  <VerticalLayout onLogout={handleLogout} onToggleLayout={toggleLayout}>
                    <Dashboard />
                  </VerticalLayout>
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;