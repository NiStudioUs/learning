import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import FavouritesPage from './pages/FavouritesPage';

interface AppProps {
  onThemeToggle: () => void;
  isDark: boolean;
  favourites: Set<string>;
  onToggleFavourite: (id: string) => void;
}

function App({ onThemeToggle, isDark, favourites, onToggleFavourite }: AppProps) {
  return (
    <Routes>
      <Route path="/" element={<Layout onThemeToggle={onThemeToggle} isDark={isDark} />}>
        <Route index element={<RecipeListPage favourites={favourites} onToggleFavourite={onToggleFavourite} />} />
        <Route path="recipe/:id" element={<RecipeDetailPage favourites={favourites} onToggleFavourite={onToggleFavourite} />} />
        <Route path="favourites" element={<FavouritesPage favourites={favourites} onToggleFavourite={onToggleFavourite} />} />
      </Route>
    </Routes>
  );
}

export default App;
