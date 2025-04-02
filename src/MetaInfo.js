import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const MetaInfo = ({ 
  title, 
  description, 
  keywords = '',
  imageUrl = 'https://b-node.com/logo.png',
  type = 'website',
  jsonLd = null
}) => {
  const { language } = useLanguage();
  const location = useLocation();
  const currentUrl = `https://b-node.com${location.pathname}`;
  
  // Default site-wide meta information
  const defaultTitle = language === 'vi' 
    ? 'B.Node - Phân tích Blockchain & Crypto' 
    : 'B.Node - Blockchain & Crypto Analysis';
    
  const defaultDescription = language === 'vi'
    ? 'B.Node cung cấp phân tích chuyên sâu về các dự án blockchain, cryptocurrency và AI phi tập trung.'
    : 'B.Node provides in-depth analysis of blockchain projects, cryptocurrencies, and decentralized AI.';
  
  // Use provided values or defaults
  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="B.Node" />
      <meta property="og:locale" content={language === 'vi' ? 'vi_VN' : 'en_US'} />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Structured data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaInfo;