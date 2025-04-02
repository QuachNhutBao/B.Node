import React, { useRef, useEffect } from 'react';
import { useSearch } from './SearchContext';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBox = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    searchResults, 
    showResults, 
    setShowResults,
    handleResultClick,
    handleKeyDown
  } = useSearch();
  const { language } = useLanguage();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Đóng kết quả khi nhấp vào bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowResults]);

  // Hiệu ứng cho kết quả tìm kiếm
  const resultsVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  };

  // Highlight từ khóa tìm kiếm
  const highlightMatch = (text) => {
    if (!searchTerm.trim()) return text;
    
    const regex = new RegExp(`(${searchTerm.trim()})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-blue-500/30 text-white">{part}</mark> : part
    );
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          onClick={(e) => {
            e.stopPropagation();
            if (searchTerm) setShowResults(true);
          }}
          placeholder={language === 'vi' ? "Tìm kiếm..." : "Search..."}
          className="bg-gray-800/60 backdrop-blur-sm text-white px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/70 w-full transition-all duration-300 focus:w-72"
          aria-label={language === 'vi' ? "Tìm kiếm bài viết" : "Search for articles"}
        />
        <button 
          className="absolute right-3 top-2.5 text-gray-400 hover:text-white transition-colors duration-200"
          onClick={() => {
            if (searchTerm) {
              setShowResults(!showResults);
            } else {
              inputRef.current.focus();
            }
          }}
          aria-label={language === 'vi' ? "Tìm kiếm" : "Search"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {showResults && searchResults.length > 0 && (
          <motion.div 
            className="absolute mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-50 overflow-hidden border border-gray-700"
            variants={resultsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="max-h-80 overflow-y-auto py-2">
              {searchResults.map((result) => (
                <li key={result.id} className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors duration-150">
                  <button 
                    className="w-full text-left"
                    onClick={() => handleResultClick(result.url)}
                  >
                    <p className="font-medium text-white mb-1">{highlightMatch(result.title)}</p>
                    <p className="text-sm text-gray-400 line-clamp-2">{highlightMatch(result.content)}</p>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        
        {showResults && searchTerm && searchResults.length === 0 && (
          <motion.div 
            className="absolute mt-2 w-full bg-gray-800 rounded-lg shadow-lg z-50 overflow-hidden border border-gray-700 p-4 text-center"
            variants={resultsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p className="text-gray-400">
              {language === 'vi' 
                ? `Không tìm thấy kết quả cho "${searchTerm}"` 
                : `No results found for "${searchTerm}"`}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBox;