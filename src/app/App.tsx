import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SplashScreen from './components/layout/SplashScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import CollectionsPage from './pages/CollectionsPage';
import FloatingContact from './components/layout/FloatingContact';

export default function App() {
  const [splashDone, setSplashDone] = useState(() => {
    return sessionStorage.getItem('zewel_splash_done') === '1';
  });

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem('zewel_splash_done', '1');
    setSplashDone(true);
  }, []);

  return (
    <>
      <ScrollToTop />
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`min-h-screen bg-white text-[#1f2937] font-['Inter'] overflow-x-hidden selection:bg-[#163275] selection:text-white transition-opacity duration-700 ${splashDone ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Header />
        <FloatingContact />
        <main className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 text-center px-6">
                <h1 className="font-['Playfair_Display'] text-5xl text-[#1f2937] mb-4">Page Not Found</h1>
                <p className="text-[#6b7280] mb-8 text-lg">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="bg-[#163275] text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#1e4494] transition-colors">Return Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
