import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const ArticleCard = ({ id, title, summary, IconComponent }) => {
  const { language } = useLanguage();
  const is0GArticle = title.includes("0g") || title.includes("0G");
  const isBitcoinArticle = title.includes("Bitcoin");
  const isEthereumArticle = title.includes("Ethereum");
  
  // Generate SEO-friendly URL
  const getArticleUrl = () => {
    if (is0GArticle) return "/article/0g-decentralized-ai";
    if (isBitcoinArticle) return "/article/bitcoin-king-of-crypto";
    if (isEthereumArticle) return "/article/ethereum-smart-contract";
    return `/article/${id}`;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <Link 
        to={getArticleUrl()}
        className="block bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 border border-gray-700 h-full"
        aria-label={`Đọc bài viết: ${title}`}
      >
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-b from-gray-700 to-gray-800 p-4 rounded-full shadow-inner">
              <IconComponent className="w-12 h-12 text-blue-400" aria-hidden="true" />
            </div>
          </div>

          <h2 className="text-xl text-white font-bold mb-4 line-clamp-2">{title}</h2>
          
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4 opacity-50"></div>
          
          <p className="text-gray-300 text-sm line-clamp-3">{summary}</p>
          
          <div className="flex justify-end mt-4">
            <span className="text-blue-400 text-sm flex items-center group">
              <span className="group-hover:mr-2 transition-all duration-300">
                {is0GArticle 
                  ? (language === 'vi' ? "Xem phân tích" : "View analysis") 
                  : (language === 'vi' ? "Đọc thêm" : "Read more")}
              </span>
              <svg 
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;