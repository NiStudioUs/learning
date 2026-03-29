import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import './index.css';
import App from './App';
import { lightTheme, darkTheme } from './theme';

const STORAGE_KEY_THEME = 'rv_dark_mode';
const STORAGE_KEY_FAVOURITES = 'rv_favourites';

function Root() {
  const [isDark, setIsDark] = useState<boolean>(
    () => localStorage.getItem(STORAGE_KEY_THEME) === 'true'
  );
  const [favourites, setFavourites] = useState<Set<string>>(
    () => new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_FAVOURITES) || '[]'))
  );

  const handleThemeToggle = useCallback(() => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY_THEME, String(next));
      return next;
    });
  }, []);

  const handleToggleFavourite = useCallback((id: string) => {
    setFavourites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem(STORAGE_KEY_FAVOURITES, JSON.stringify([...next]));
      return next;
    });
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <HashRouter>
        <App
          onThemeToggle={handleThemeToggle}
          isDark={isDark}
          favourites={favourites}
          onToggleFavourite={handleToggleFavourite}
        />
      </HashRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
