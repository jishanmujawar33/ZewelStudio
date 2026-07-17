import { Routes, Route } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#1f2937] font-['Inter'] overflow-x-hidden selection:bg-[#1a3a6b] selection:text-white">
        <Header />
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
