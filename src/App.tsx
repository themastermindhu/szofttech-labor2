import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ExercisesPage from './pages/ExercisesPage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import ExerciseStartPage from './pages/ExerciseStartPage';
import ToolsPage from './pages/ToolsPage';
import CommunityPage from './pages/CommunityPage';
import ContactPage from './pages/ContactPage';
import ApplyPage from './pages/ApplyPage';
import { getExerciseBySlug } from './data/exercises';

const pageToPath = (page: string) => {
  if (page.startsWith('exercise-start:')) return `/exercises/${page.split(':')[1]}`;
  if (page.startsWith('exercise:')) return `/exercises/${page.split(':')[1]}/overview`;

  switch (page) {
    case 'home': return '/';
    case 'learn': return '/learn';
    case 'exercises': return '/exercises';
    case 'tools': return '/tools';
    case 'community': return '/community';
    case 'contact': return '/contact';
    case 'apply': return '/apply';
    case 'login': return '/login';
    default: return '/';
  }
};

const pathToPage = (path: string) => {
  const cleanPath = path.replace(/\/$/, '') || '/';
  const parts = cleanPath.split('/').filter(Boolean);

  if (parts[0] === 'exercises' && parts[1] && parts[2] === 'overview') return `exercise:${parts[1]}`;
  if (parts[0] === 'exercises' && parts[1]) return `exercise-start:${parts[1]}`;

  switch (cleanPath) {
    case '/': return 'home';
    case '/learn': return 'learn';
    case '/exercises': return 'exercises';
    case '/tools': return 'tools';
    case '/community': return 'community';
    case '/contact': return 'contact';
    case '/apply': return 'apply';
    case '/login': return 'login';
    default: return 'home';
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState(() => pathToPage(window.location.pathname));

  const navigate = (page: string) => {
    const nextPath = pageToPath(page);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage.startsWith('exercise-start:')) {
      const slug = currentPage.split(':')[1];
      const exercise = getExerciseBySlug(slug);
      if (!exercise) return <ExercisesPage onNavigate={navigate} />;
      return <ExerciseStartPage exercise={exercise} onBack={() => navigate('exercises')} onDetails={() => navigate(`exercise:${slug}`)} />;
    }

    if (currentPage.startsWith('exercise:')) {
      const slug = currentPage.split(':')[1];
      const exercise = getExerciseBySlug(slug);
      if (!exercise) return <ExercisesPage onNavigate={navigate} />;
      return <ExerciseDetailPage exercise={exercise} onBack={() => navigate('exercises')} onStart={() => navigate(`exercise-start:${slug}`)} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'learn':
        return <LearnPage />;
      case 'exercises':
        return <ExercisesPage onNavigate={navigate} />;
      case 'tools':
        return <ToolsPage onNavigate={navigate} />;
      case 'community':
        return <CommunityPage />;
      case 'contact':
        return <ContactPage />;
      case 'apply':
        return <ApplyPage />;
      case 'login':
        return <ApplyPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  const activeNavPage = currentPage.startsWith('exercise') ? 'exercises' : currentPage;

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={activeNavPage} onNavigate={navigate} />
      <main>
        {renderPage()}
      </main>
      {!currentPage.startsWith('exercise-start:') && <Footer />}
    </div>
  );
}

export default App;
