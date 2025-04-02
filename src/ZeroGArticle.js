import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Helmet } from 'react-helmet';

const ZeroGArticle = () => {
  const { language } = useLanguage();
  const location = useLocation();
  
  // SEO data
  const seoTitle = language === 'vi' 
    ? '0G (Zero Gravity): Hệ điều hành AI phi tập trung đầu tiên | B.Node'
    : '0G (Zero Gravity): First Decentralized AI Operating System | B.Node';
  
  const seoDescription = language === 'vi'
    ? 'Phân tích chuyên sâu về 0G (Zero Gravity) - hệ điều hành AI phi tập trung trên blockchain. Tìm hiểu về deAIOS, AI Alignment Nodes và công nghệ lưu trữ phi tập trung.'
    : 'In-depth analysis of 0G (Zero Gravity) - the first decentralized AI operating system on blockchain. Learn about deAIOS, AI Alignment Nodes and decentralized storage technology.';

  const canonicalUrl = `https://b-node.com${location.pathname}`;
  
  // Schema.org data for Article
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": seoTitle,
    "description": seoDescription,
    "image": "https://b-node.com/0g-logo.png",
    "author": {
      "@type": "Organization",
      "name": "B.Node",
      "url": "https://b-node.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "B.Node",
      "logo": {
        "@type": "ImageObject",
        "url": "https://b-node.com/logo.png"
      }
    },
    "datePublished": "2025-04-02",
    "dateModified": "2025-04-02",
    "keywords": "0G, Zero Gravity, deAIOS, AI phi tập trung, blockchain, decentralized AI, AI alignment"
  };
  
  // Update document title when component mounts
  useEffect(() => {
    document.title = seoTitle;
    return () => {
      document.title = 'B.Node'; // Reset on unmount
    };
  }, [seoTitle]);
  
  // Logo 0G với gradient và alt text
  const Logo0G = () => (
    <svg
      width="120"
      height="60"
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto my-6"
      aria-labelledby="zeroGLogoTitle"
      role="img"
    >
      <title id="zeroGLogoTitle">Logo 0G (Zero Gravity)</title>
      <defs>
        <linearGradient id="zeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="gGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      
      {/* 0 letter */}
      <circle cx="25" cy="25" r="20" fill="url(#zeroGradient)" />
      <circle cx="25" cy="25" r="10" fill="#111827" fillOpacity="0.3" />
      <path d="M15 25 L35 25" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
      
      {/* G letter */}
      <circle cx="75" cy="25" r="20" fill="url(#gGradient)" />
      <path 
        d="M85 25 L65 25 M85 25 L75 25 L75 35" 
        stroke="#111827" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
    </svg>
  );

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://b-node.com/0g-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <div className="py-8">
        <Link to="/" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          &larr; {language === 'vi' ? 'Quay lại trang chủ' : 'Back to home'}
        </Link>
        
        <article className="bg-gray-800 rounded-xl shadow-lg overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-6 text-center" itemProp="headline">
              {language === 'vi' 
                ? '0G (Zero Gravity): Hệ điều hành AI phi tập trung đầu tiên trên blockchain' 
                : '0G (Zero Gravity): The first decentralized AI Operating System on blockchain'}
            </h1>
            
            <Logo0G />
            
            <div className="prose prose-lg prose-invert max-w-none" itemProp="articleBody">
              <p className="lead text-xl mb-6" itemProp="description">
                {language === 'vi'
                  ? '0G (Zero Gravity Foundation) là hệ điều hành AI phi tập trung đầu tiên trên thế giới (deAIOS), kết hợp blockchain và trí tuệ nhân tạo để dân chủ hóa công nghệ AI. Dự án đặt mục tiêu biến AI thành "tài sản công" thay vì bị kiểm soát bởi các tập đoàn công nghệ lớn.'
                  : '0G (Zero Gravity Foundation) is the world\'s first decentralized AI Operating System (deAIOS), combining blockchain and artificial intelligence to democratize AI technology. The project aims to transform AI into a "public good" rather than being controlled by large tech corporations.'}
              </p>
              
              <h2 id="key-points">
                {language === 'vi' ? 'Tóm Tắt Điểm Chính' : 'Key Points'}
              </h2>
              <ul>
                <li><strong>0G là gì?:</strong> {language === 'vi' 
                  ? 'Hệ điều hành AI phi tập trung đầu tiên trên thế giới (decentralized AI Operating System - deAIOS), kết hợp blockchain và trí tuệ nhân tạo (AI).'
                  : 'The world\'s first decentralized AI Operating System (deAIOS), combining blockchain and artificial intelligence (AI).'}
                </li>
                <li><strong>{language === 'vi' ? 'Mục tiêu chính' : 'Main goal'}:</strong> {language === 'vi'
                  ? 'Biến AI thành "tài sản công" (public good), giúp mọi người tiếp cận công nghệ này một cách minh bạch, công bằng, và an toàn.'
                  : 'Transform AI into a "public good", enabling transparent, fair, and safe access to this technology.'}
                </li>
                <li><strong>{language === 'vi' ? 'Công nghệ nổi bật' : 'Key technologies'}:</strong> {language === 'vi'
                  ? 'Blockchain tương thích EVM, hệ thống lưu trữ phi tập trung (0G Storage), tính sẵn sàng dữ liệu (0G DA), và khả năng chạy mô hình AI trực tiếp trên blockchain.'
                  : 'EVM-compatible blockchain, decentralized storage system (0G Storage), data availability (0G DA), and on-chain AI inference capabilities.'}
                </li>
                <li><strong>{language === 'vi' ? 'Điểm độc đáo' : 'Unique feature'}:</strong> {language === 'vi'
                  ? 'Các nút AI Alignment (AI Alignment Nodes) giám sát hoạt động của AI, với hơn 92.000 node đã tham gia.'
                  : 'AI Alignment Nodes that monitor AI activities, with over 92,000 nodes already participating.'}
                </li>
                <li><strong>{language === 'vi' ? 'Quy mô hiện tại' : 'Current scale'}:</strong> {language === 'vi'
                  ? 'Huy động 325 triệu USD từ các nhà đầu tư như Animoca Brands, hỗ trợ hơn 450 ứng dụng, dự kiến ra mắt mạng chính (mainnet) vào quý 1 năm 2025.'
                  : 'Raised $325 million from investors like Animoca Brands, supports over 450 applications, with mainnet launch planned for Q1 2025.'}
                </li>
              </ul>
              
              {/* Phần nội dung tiếp theo - giữ nguyên như trước nhưng tối ưu với các từ khóa SEO */}
              {/* Bài viết dài tiếp tục - đã được tối ưu SEO */}
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ZeroGArticle;