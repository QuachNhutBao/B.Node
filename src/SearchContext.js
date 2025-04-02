import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

// Dữ liệu tìm kiếm
const searchData = [
  {
    id: 'article-0g',
    title: {
      vi: 'Phân tích dự án 0G: Lưu trữ phi tập trung',
      en: '0G Project Analysis: Decentralized Storage'
    },
    keywords: [
      '0g', 'zero gravity', 'deaios', 'ai phi tập trung', 'decentralized ai', 
      'blockchain', 'lưu trữ phi tập trung', 'decentralized storage', 
      'ai alignment', 'node', 'proof of random access'
    ],
    content: {
      vi: 'Hệ điều hành AI phi tập trung đầu tiên trên thế giới kết hợp blockchain và trí tuệ nhân tạo (AI) để tạo ra một nền tảng đột phá.',
      en: 'The world\'s first decentralized AI Operating System combines blockchain and artificial intelligence to create a breakthrough platform.'
    },
    url: '/article/0g-decentralized-ai'
  },
  {
    id: 'article-bitcoin',
    title: {
      vi: 'Bitcoin: Vua của Crypto',
      en: 'Bitcoin: King of Crypto'
    },
    keywords: [
      'bitcoin', 'btc', 'vua crypto', 'king of crypto', 'satoshi nakamoto',
      'cryptocurrency', 'tiền điện tử', 'blockchain', 'proof of work'
    ],
    content: {
      vi: 'Bitcoin vẫn là đồng tiền số hàng đầu với tiềm năng lớn trong tương lai, dù đối mặt với nhiều thách thức.',
      en: 'Bitcoin remains the leading cryptocurrency with great potential for the future, despite facing many challenges.'
    },
    url: '/article/bitcoin-king-of-crypto'
  },
  {
    id: 'article-ethereum',
    title: {
      vi: 'Ethereum: Nền tảng hợp đồng thông minh',
      en: 'Ethereum: Smart Contract Platform'
    },
    keywords: [
      'ethereum', 'eth', 'hợp đồng thông minh', 'smart contract', 'vitalik buterin',
      'defi', 'tài chính phi tập trung', 'nft', 'dao', 'layer 2'
    ],
    content: {
      vi: 'Ethereum dẫn đầu về smart contract, nhưng có thách thức về khả năng mở rộng và phí giao dịch cao.',
      en: 'Ethereum leads in smart contracts, but faces challenges with scalability and high transaction fees.'
    },
    url: '/article/ethereum-smart-contract'
  }
];

// Tạo context
const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Hàm tìm kiếm
  const performSearch = useCallback((term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const normalizedTerm = term.toLowerCase().trim();
    
    // Thuật toán tìm kiếm cơ bản với trọng số
    const results = searchData
      .map(item => {
        let score = 0;
        
        // Kiểm tra từ khóa
        const keywordMatches = item.keywords.filter(keyword => 
          keyword.toLowerCase().includes(normalizedTerm)
        );
        score += keywordMatches.length * 3;
        
        // Kiểm tra tiêu đề
        const titleMatch = item.title[language].toLowerCase().includes(normalizedTerm);
        if (titleMatch) score += 10;
        
        // Kiểm tra nội dung
        const contentMatch = item.content[language].toLowerCase().includes(normalizedTerm);
        if (contentMatch) score += 5;
        
        return {
          ...item,
          score,
          title: item.title[language],
          content: item.content[language]
        };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
    
    setSearchResults(results);
  }, [language]);

  // Xử lý khi searchTerm thay đổi
  useEffect(() => {
    if (searchTerm) {
      performSearch(searchTerm);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm, performSearch]);

  // Handle clicks outside search results
  useEffect(() => {
    const handleClickOutside = () => {
      setShowResults(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Nhấp vào kết quả
  const handleResultClick = (url) => {
    navigate(url);
    setSearchTerm('');
    setShowResults(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowResults(false);
    }
  };

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      searchResults,
      isSearching,
      showResults,
      setShowResults,
      handleResultClick,
      handleKeyDown
    }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook để sử dụng context
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export default SearchContext;