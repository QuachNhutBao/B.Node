import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import { SearchProvider } from './SearchContext';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './App.css';

import Layout from './Layout';
import Home from './Home';
import ArticleDetail from './ArticleDetail';
import ZeroGArticle from './ZeroGArticle';
import AboutPage from './AboutPage'; // Import AboutPage component
import ServicesPage from './ServicesPage'; // Import ServicesPage component

// ScrollToTop component for handling page transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Page transition wrapper
const PageTransition = ({ children }) => {
  return children;
};

// Simple 404 page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
    <p className="text-xl text-gray-300 mb-8">Trang bạn tìm kiếm không tồn tại.</p>
    <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
      Về trang chủ
    </a>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <SearchProvider>
          <Helmet>
            <title>B.Node - Phân tích Blockchain & Crypto</title>
            <meta name="description" content="B.Node cung cấp phân tích chuyên sâu về các dự án blockchain, cryptocurrency và AI phi tập trung." />
            <meta name="keywords" content="blockchain, crypto, cryptocurrency, bitcoin, ethereum, 0g, decentralized ai, deaios" />
            <link rel="canonical" href="https://b-node.com" />
          </Helmet>

          <ScrollToTop />
          <Layout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } />

                {/* SEO-friendly routes for articles */}
                <Route path="/article/0g-decentralized-ai" element={
                  <PageTransition>
                    <ZeroGArticle />
                  </PageTransition>
                } />

                <Route path="/article/bitcoin-king-of-crypto" element={
                  <PageTransition>
                    <ArticleDetail specialId="bitcoin" />
                  </PageTransition>
                } />

                <Route path="/article/ethereum-smart-contract" element={
                  <PageTransition>
                    <ArticleDetail specialId="ethereum" />
                  </PageTransition>
                } />

                {/* Legacy support for old ID-based URLs */}
                <Route path="/article/:id" element={
                  <PageTransition>
                    <ArticleDetail />
                  </PageTransition>
                } />

                <Route path="/about" element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                } />
                <Route path="/services" element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </SearchProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;