import React from 'react';
import { useLanguage } from './LanguageContext';
import ArticleCard from './ArticleCard';
import WelcomeSection from './WelcomeSection';
import { motion } from 'framer-motion';

const Home = () => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      title: "Bí Mật Dưới Lớp Không Trọng Lực: Hành Trình Của 0G",
      titleEn: "The Secret Beneath Zero Gravity: The Journey of 0G",
      summary: "Khám phá câu chuyện về 0G – hệ điều hành AI phi tập trung đầu tiên trên blockchain, nơi AI trở thành tài sản công và tự do như không trọng lực.",
      summaryEn: "Discover the story of 0G – the first decentralized AI operating system on blockchain, where AI becomes a public good, free as zero gravity.",
      icon: "/images/0g-logo.png", // Đường dẫn đúng
    },
    {
      id: 2,
      title: "Bitcoin: Vua của Crypto",
      titleEn: "Bitcoin: King of Crypto",
      summary: "Bitcoin vẫn là đồng tiền số hàng đầu với tiềm năng lớn trong tương lai, dù đối mặt với nhiều thách thức. Phân tích sâu về triển vọng và rủi ro.",
      summaryEn: "Bitcoin remains the leading cryptocurrency with great potential, despite facing many challenges. An in-depth analysis of its prospects and risks.",
      icon: "/images/bitcoin-logo.png", // Đường dẫn đúng
    },
    {
      id: 3,
      title: "Ethereum: Nền tảng hợp đồng thông minh",
      titleEn: "Ethereum: The Smart Contract Platform",
      summary: "Ethereum dẫn đầu về smart contract, nhưng có thách thức về khả năng mở rộng và phí giao dịch cao. Tìm hiểu các giải pháp layer 2 và tương lai của ETH.",
      summaryEn: "Ethereum leads in smart contracts but faces challenges with scalability and high fees. Explore Layer 2 solutions and the future of ETH.",
      icon: "/images/ethereum-logo.png", // Đường dẫn đúng
    },
  ];

  return (
    <div className="space-y-24">
      {/* Welcome Section at the top */}
      <WelcomeSection />

      {/* Articles Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Section title with line decoration */}
        <div className="flex items-center mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-grow opacity-30"></div>
          <h2 className="text-3xl font-bold text-white px-6">
            {language === 'vi' ? 'Phân tích Blockchain' : 'Blockchain Analysis'}
          </h2>
          <div className="h-px bg-gradient-to-l from-transparent via-blue-500 to-transparent flex-grow opacity-30"></div>
        </div>

        {/* Articles grid with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={language === 'vi' ? article.title : article.titleEn}
              summary={language === 'vi' ? article.summary : article.summaryEn}
              IconComponent={article.icon}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;