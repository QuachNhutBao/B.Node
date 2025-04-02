import React from 'react';
import { useLanguage } from './LanguageContext';
import ArticleCard from './ArticleCard';
import { ZeroGIcon, BitcoinIcon, EthereumIcon } from './ArticleIcons';
import WelcomeSection from './WelcomeSection';
import { motion } from 'framer-motion';

const Home = () => {
  const { language } = useLanguage();

  const articles = [
    {
      id: 1,
      title: "Phân tích dự án 0g: Lưu trữ phi tập trung",
      summary: "Khám phá 0g - giải pháp lưu trữ phi tập trung trên blockchain với khả năng mở rộng và bảo mật cao. Tìm hiểu cách dự án này thay đổi cách thức lưu trữ dữ liệu.",
      icon: ZeroGIcon
    },
    {
      id: 2,
      title: "Bitcoin: Vua của Crypto",
      summary: "Bitcoin vẫn là đồng tiền số hàng đầu với tiềm năng lớn trong tương lai, dù đối mặt với nhiều thách thức. Phân tích sâu về triển vọng và rủi ro.",
      icon: BitcoinIcon
    },
    {
      id: 3,
      title: "Ethereum: Nền tảng hợp đồng thông minh",
      summary: "Ethereum dẫn đầu về smart contract, nhưng có thách thức về khả năng mở rộng và phí giao dịch cao. Tìm hiểu các giải pháp layer 2 và tương lai của ETH.",
      icon: EthereumIcon
    }
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
              title={article.title}
              summary={article.summary}
              IconComponent={article.icon}
            />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;