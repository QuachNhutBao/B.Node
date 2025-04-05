import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Hàm copy email
  const copyEmail = () => {
    navigator.clipboard.writeText('quachnhutbao@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Định nghĩa nội dung theo ngôn ngữ
  const content = {
    en: {
      title: "Our Services",
      metaDescription: "B.Node's services - Project analysis, crypto consulting and blockchain solutions",
      subtitle: "Professional Web3 & Blockchain Services",
      intro: "B.Node offers a comprehensive range of services to help you navigate the complex world of blockchain and cryptocurrency. Whether you're looking to participate in airdrops, run testnets, or need content creation for your Web3 project, we've got you covered.",

      servicesCategories: [
        {
          title: "Education & Guides",
          icon: "🎓",
          services: [
            {
              title: "Airdrop Guides",
              description: "Step-by-step guides on how to participate in the latest crypto airdrops with detailed eligibility criteria and strategies to maximize your chances."
            },
            {
              title: "Testnet Participation Tutorials",
              description: "Comprehensive instructions for joining and contributing to blockchain testnets, including setup procedures and task completion strategies."
            },
            {
              title: "Node Running Workshops",
              description: "Learn how to set up and maintain validator nodes for various blockchain networks, with technical support and troubleshooting assistance."
            },
            {
              title: "Crypto Investment Education",
              description: "Educational content on cryptocurrency investment strategies, risk management, and market analysis."
            }
          ]
        },
        {
          title: "Technical Services",
          icon: "⚙️",
          services: [
            {
              title: "Validator Node Setup & Maintenance",
              description: "Professional installation, configuration, and ongoing maintenance of validator nodes for Proof-of-Stake blockchains."
            },
            {
              title: "Testnet Participation Assistance",
              description: "Technical support for participating in blockchain testnets, including node configuration, troubleshooting, and task completion."
            },
            {
              title: "Smart Contract Audit & Review",
              description: "Thorough examination of smart contracts to identify vulnerabilities, inefficiencies, and potential improvements."
            },
            {
              title: "Custom Blockchain Solutions",
              description: "Development of tailored blockchain applications and solutions for businesses and projects."
            }
          ]
        },
        {
          title: "Content & Marketing",
          icon: "📝",
          services: [
            {
              title: "Blockchain & Crypto Content Creation",
              description: "Professional content creation focused on blockchain and crypto topics, including articles, guides, whitepapers, and social media content."
            },
            {
              title: "Project Analysis & Reviews",
              description: "In-depth analysis and reviews of blockchain projects, cryptocurrencies, and Web3 platforms."
            },
            {
              title: "Whitepaper Development",
              description: "Professional writing and development of whitepapers and technical documentation for blockchain projects."
            },
            {
              title: "Social Media Management",
              description: "Strategic management of social media accounts for blockchain and crypto projects, including content planning and community engagement."
            }
          ]
        },
        {
          title: "Virtual Assistance",
          icon: "🤝",
          services: [
            {
              title: "Web3 Virtual Assistant",
              description: "Dedicated virtual assistance for Web3 projects, including research, community management, and administrative tasks."
            },
            {
              title: "Front-end Development Support",
              description: "Assistance with front-end development tasks for blockchain and Web3 applications."
            },
            {
              title: "Back-end Development Support",
              description: "Technical support for back-end development of blockchain applications and infrastructure."
            },
            {
              title: "Data Entry & Management",
              description: "Efficient data entry and management services for blockchain projects and cryptocurrency businesses at competitive rates."
            }
          ]
        },
        {
          title: "Consulting & Advisory",
          icon: "💼",
          services: [
            {
              title: "Blockchain Integration Consulting",
              description: "Strategic advisory on integrating blockchain technology into existing business processes and applications."
            },
            {
              title: "Tokenomics Design",
              description: "Professional consultation on designing effective token economics models for cryptocurrency and blockchain projects."
            },
            {
              title: "Crypto Investment Strategy",
              description: "Personalized guidance on cryptocurrency investment strategies, portfolio management, and risk assessment."
            },
            {
              title: "Regulatory Compliance Guidance",
              description: "Assistance navigating the complex regulatory landscape for blockchain and cryptocurrency projects."
            }
          ]
        }
      ],

      contactCTA: "Ready to get started? Contact us to discuss your specific needs and how we can help you achieve your blockchain and crypto goals.",
      buttonText: "Get in Touch",
      emailCopy: "Copy Email",
      emailCopied: "Email Copied!",
      or: "or",
      disclaimer: "Note: All services are provided for informational purposes only. We do not provide financial advice, and clients are responsible for their own investment decisions."
    },

    vi: {
      title: "Dịch vụ của chúng tôi",
      metaDescription: "Dịch vụ của B.Node - Phân tích dự án, tư vấn crypto và giải pháp blockchain",
      subtitle: "Dịch vụ Web3 & Blockchain Chuyên Nghiệp",
      intro: "B.Node cung cấp một loạt các dịch vụ toàn diện để giúp bạn điều hướng trong thế giới phức tạp của blockchain và tiền điện tử. Cho dù bạn đang muốn tham gia airdrop, chạy testnet, hoặc cần tạo nội dung cho dự án Web3, chúng tôi đều có thể hỗ trợ bạn.",

      servicesCategories: [
        {
          title: "Hướng dẫn & Đào tạo",
          icon: "🎓",
          services: [
            {
              title: "Hướng dẫn Airdrop",
              description: "Hướng dẫn từng bước về cách tham gia vào các airdrop tiền điện tử mới nhất với tiêu chí đủ điều kiện chi tiết và các chiến lược để tối đa hóa cơ hội của bạn."
            },
            {
              title: "Hướng dẫn tham gia Testnet",
              description: "Hướng dẫn toàn diện để tham gia và đóng góp vào các testnet blockchain, bao gồm quy trình thiết lập và chiến lược hoàn thành nhiệm vụ."
            },
            {
              title: "Hướng dẫn chạy Node",
              description: "Học cách thiết lập và duy trì các node validator cho các mạng blockchain khác nhau, với hỗ trợ kỹ thuật và trợ giúp xử lý sự cố."
            },
            {
              title: "Đào tạo đầu tư Crypto",
              description: "Nội dung giáo dục về chiến lược đầu tư tiền điện tử, quản lý rủi ro và phân tích thị trường."
            }
          ]
        },
        {
          title: "Dịch vụ Kỹ thuật",
          icon: "⚙️",
          services: [
            {
              title: "Thiết lập & Bảo trì Node Validator",
              description: "Cài đặt, cấu hình và bảo trì liên tục các node validator cho các blockchain Proof-of-Stake một cách chuyên nghiệp."
            },
            {
              title: "Hỗ trợ tham gia Testnet",
              description: "Hỗ trợ kỹ thuật để tham gia vào các testnet blockchain, bao gồm cấu hình node, xử lý sự cố và hoàn thành nhiệm vụ."
            },
            {
              title: "Kiểm toán & Đánh giá Smart Contract",
              description: "Kiểm tra kỹ lưỡng các smart contract để xác định lỗ hổng, không hiệu quả và các cải tiến tiềm năng."
            },
            {
              title: "Giải pháp Blockchain tùy chỉnh",
              description: "Phát triển các ứng dụng và giải pháp blockchain tùy chỉnh cho doanh nghiệp và dự án."
            }
          ]
        },
        {
          title: "Nội dung & Marketing",
          icon: "📝",
          services: [
            {
              title: "Tạo nội dung Blockchain & Crypto",
              description: "Tạo nội dung chuyên nghiệp tập trung vào các chủ đề blockchain và crypto, bao gồm bài viết, hướng dẫn, whitepaper và nội dung mạng xã hội."
            },
            {
              title: "Phân tích & Đánh giá dự án",
              description: "Phân tích và đánh giá chuyên sâu về các dự án blockchain, tiền điện tử và nền tảng Web3."
            },
            {
              title: "Phát triển Whitepaper",
              description: "Viết và phát triển whitepaper chuyên nghiệp và tài liệu kỹ thuật cho các dự án blockchain."
            },
            {
              title: "Quản lý mạng xã hội",
              description: "Quản lý chiến lược các tài khoản mạng xã hội cho các dự án blockchain và crypto, bao gồm lập kế hoạch nội dung và tương tác với cộng đồng."
            }
          ]
        },
        {
          title: "Trợ lý ảo",
          icon: "🤝",
          services: [
            {
              title: "Trợ lý ảo Web3",
              description: "Hỗ trợ ảo chuyên dụng cho các dự án Web3, bao gồm nghiên cứu, quản lý cộng đồng và các nhiệm vụ hành chính."
            },
            {
              title: "Hỗ trợ phát triển Front-end",
              description: "Hỗ trợ với các nhiệm vụ phát triển front-end cho các ứng dụng blockchain và Web3."
            },
            {
              title: "Hỗ trợ phát triển Back-end",
              description: "Hỗ trợ kỹ thuật cho phát triển back-end của các ứng dụng và cơ sở hạ tầng blockchain."
            },
            {
              title: "Nhập liệu & Quản lý dữ liệu",
              description: "Dịch vụ nhập liệu và quản lý dữ liệu hiệu quả cho các dự án blockchain và doanh nghiệp tiền điện tử với chi phí cạnh tranh."
            }
          ]
        },
        {
          title: "Tư vấn & Cố vấn",
          icon: "💼",
          services: [
            {
              title: "Tư vấn tích hợp Blockchain",
              description: "Tư vấn chiến lược về việc tích hợp công nghệ blockchain vào các quy trình và ứng dụng kinh doanh hiện có."
            },
            {
              title: "Thiết kế Tokenomics",
              description: "Tư vấn chuyên nghiệp về thiết kế mô hình kinh tế token hiệu quả cho các dự án tiền điện tử và blockchain."
            },
            {
              title: "Chiến lược đầu tư Crypto",
              description: "Hướng dẫn cá nhân hóa về chiến lược đầu tư tiền điện tử, quản lý danh mục đầu tư và đánh giá rủi ro."
            },
            {
              title: "Hướng dẫn tuân thủ quy định",
              description: "Hỗ trợ định hướng trong bối cảnh quy định phức tạp cho các dự án blockchain và tiền điện tử."
            }
          ]
        }
      ],

      contactCTA: "Sẵn sàng để bắt đầu? Liên hệ với chúng tôi để thảo luận về nhu cầu cụ thể của bạn và cách chúng tôi có thể giúp bạn đạt được mục tiêu blockchain và crypto của mình.",
      buttonText: "Liên hệ ngay",
      emailCopy: "Sao chép Email",
      emailCopied: "Đã sao chép Email!",
      or: "hoặc",
      disclaimer: "Lưu ý: Tất cả các dịch vụ được cung cấp chỉ nhằm mục đích thông tin. Chúng tôi không cung cấp lời khuyên tài chính, và khách hàng tự chịu trách nhiệm cho các quyết định đầu tư của họ."
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
        className="container mx-auto px-4 max-w-6xl"
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

        {currentContent.servicesCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="mb-12"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h2 className="text-3xl font-bold text-blue-400">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

// Tìm đoạn code này trong ServicesPage.js (khoảng dòng 390-420)
<motion.div 
  className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-8 mt-12 mb-10 shadow-xl border border-blue-800/50 text-center"
  variants={itemVariants}
>
  <p className="text-lg text-gray-100 mb-6">{currentContent.contactCTA}</p>
  
  <div className="flex justify-center">
    <div className="bg-gray-800/80 px-5 py-3 rounded-lg flex items-center border border-gray-700">
      <span className="text-gray-200 mr-3 font-medium">quachnhutbao@gmail.com</span>
      <button 
        onClick={copyEmail}
        className="text-blue-400 hover:text-blue-300 focus:outline-none bg-blue-900/30 hover:bg-blue-800/50 rounded-md px-3 py-1.5 transition-all duration-200"
        aria-label={currentContent.emailCopy}
      >
        {copied ? (
          <span className="flex items-center text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {currentContent.emailCopied}
          </span>
        ) : (
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {currentContent.emailCopy}
          </span>
        )}
      </button>
    </div>
  </div>
</motion.div>

        <motion.div
          className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700 text-sm text-gray-400 italic text-center"
          variants={itemVariants}
        >
          {currentContent.disclaimer}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;