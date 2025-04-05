import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const { language } = useLanguage();

  // Định nghĩa nội dung theo ngôn ngữ
  const content = {
    en: {
      title: "About B.Node",
      metaDescription: "Information about B.Node - Blockchain and crypto project analysis",
      subtitle: "Your trusted source for blockchain and crypto analysis",
      intro: "Welcome to B.Node, a dedicated platform for comprehensive blockchain and cryptocurrency analysis.",
      mission: {
        title: "Our Mission",
        content: "At B.Node, we aim to demystify the complex world of blockchain technology and cryptocurrencies through in-depth analysis, educational content, and transparent insights. We believe that understanding is the foundation of wise decision-making in the crypto space."
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Transparency",
            content: "We present facts and analysis without bias, clearly separating opinion from factual information."
          },
          {
            title: "Education",
            content: "We prioritize educating our readers, helping to build knowledge and understanding in the blockchain space."
          },
          {
            title: "Integrity",
            content: "Our analysis is conducted with the highest standards of research and integrity."
          },
          {
            title: "Innovation",
            content: "We continuously explore new blockchain projects and technologies to keep our readers informed about the latest developments."
          }
        ]
      },
      about: {
        title: "About the Creator",
        content: "B.Node was created by a blockchain enthusiast with a passion for research and education in the crypto space. With experience in both technical analysis and fundamental research, our goal is to provide valuable insights that help others navigate this exciting technology landscape."
      },
      disclaimer: "Disclaimer: The content provided on B.Node is for informational purposes only and should not be considered financial advice. Always conduct your own research before making investment decisions in the cryptocurrency space."
    },
    vi: {
      title: "Giới thiệu về B.Node",
      metaDescription: "Thông tin về B.Node - Phân tích blockchain và dự án crypto",
      subtitle: "Nguồn phân tích blockchain và crypto đáng tin cậy",
      intro: "Chào mừng đến với B.Node, nền tảng chuyên dụng về phân tích blockchain và tiền điện tử.",
      mission: {
        title: "Sứ mệnh của chúng tôi",
        content: "Tại B.Node, chúng tôi hướng đến việc làm rõ thế giới phức tạp của công nghệ blockchain và tiền điện tử thông qua các bài phân tích chuyên sâu, nội dung giáo dục và những hiểu biết minh bạch. Chúng tôi tin rằng sự hiểu biết là nền tảng của việc ra quyết định sáng suốt trong không gian crypto."
      },
      values: {
        title: "Giá trị cốt lõi",
        items: [
          {
            title: "Minh bạch",
            content: "Chúng tôi trình bày sự thật và phân tích không thiên vị, phân biệt rõ ràng giữa ý kiến cá nhân và thông tin thực tế."
          },
          {
            title: "Giáo dục",
            content: "Chúng tôi ưu tiên việc giáo dục độc giả, giúp xây dựng kiến thức và hiểu biết trong lĩnh vực blockchain."
          },
          {
            title: "Chính trực",
            content: "Phân tích của chúng tôi được thực hiện với tiêu chuẩn nghiên cứu và tính chính trực cao nhất."
          },
          {
            title: "Đổi mới",
            content: "Chúng tôi liên tục khám phá các dự án và công nghệ blockchain mới để giữ cho độc giả được thông tin về những phát triển mới nhất."
          }
        ]
      },
      about: {
        title: "Về người sáng lập",
        content: "B.Node được tạo ra bởi một người đam mê blockchain với niềm đam mê nghiên cứu và giáo dục trong lĩnh vực crypto. Với kinh nghiệm trong cả phân tích kỹ thuật và nghiên cứu cơ bản, mục tiêu của chúng tôi là cung cấp những hiểu biết có giá trị giúp người khác định hướng trong lĩnh vực công nghệ đầy hứng thú này."
      },
      disclaimer: "Lưu ý: Nội dung được cung cấp trên B.Node chỉ nhằm mục đích thông tin và không nên được coi là lời khuyên tài chính. Luôn thực hiện nghiên cứu của riêng bạn trước khi đưa ra quyết định đầu tư trong lĩnh vực tiền điện tử."
    }
  };

  const currentContent = content[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-28">
      <Helmet>
        <title>{currentContent.title} | B.Node</title>
        <meta name="description" content={currentContent.metaDescription} />
      </Helmet>

      <motion.div 
        className="container mx-auto px-4 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">{currentContent.title}</h1>
          <p className="text-xl text-gray-300">{currentContent.subtitle}</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-xl border border-gray-700"
          variants={itemVariants}
        >
          <p className="text-lg text-gray-200 leading-relaxed">{currentContent.intro}</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-xl border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6">{currentContent.mission.title}</h2>
          <p className="text-gray-200 leading-relaxed">{currentContent.mission.content}</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-xl border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-8">{currentContent.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentContent.values.items.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-700/60 backdrop-blur-sm p-6 rounded-lg shadow-inner border border-gray-600"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-xl border border-gray-700"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6">{currentContent.about.title}</h2>
          <p className="text-gray-200 leading-relaxed">{currentContent.about.content}</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700 text-sm text-gray-400 italic"
          variants={itemVariants}
        >
          {currentContent.disclaimer}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;