import { useState } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SplashScreen from './components/layout/SplashScreen';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';
import FloatingContact from './components/layout/FloatingContact';

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <ScrollToTop />
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div className={`min-h-screen bg-white text-[#1f2937] font-['Inter'] overflow-x-hidden selection:bg-[#163275] selection:text-white transition-opacity duration-700 ${splashDone ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Header />
        <FloatingContact />
        <main className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

