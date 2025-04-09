import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Helmet } from 'react-helmet';

const ArticleDetail = () => {
  const { id, specialId } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Analyze ID from URL parameters
  let articleId;

  // If specialId exists (SEO-friendly URL), use it for mapping
  if (specialId) {
    switch (specialId) {
      case 'bitcoin':
        articleId = 2;
        break;
      case 'ethereum':
        articleId = 3;
        break;
      default:
        articleId = null;
        break;
    }
  } else {
    // If no specialId, use ID from URL
    articleId = parseInt(id);
  }

  // Redirect old URLs to SEO-friendly URLs
  useEffect(() => {
    switch (articleId) {
      case 1:
        navigate('/article/0g-decentralized-ai', { replace: true });
        break;
      case 2:
        navigate('/article/bitcoin-king-of-crypto', { replace: true });
        break;
      case 3:
        navigate('/article/ethereum-smart-contract', { replace: true });
        break;
      default:
        break;
    }
  }, [articleId, navigate]);

  // Sample data for detailed articles
  const articles = [
    {
      id: 1,
      title: "Bí Mật Dưới Lớp Không Trọng Lực: Hành Trình Của 0G",
      icon: "/images/0g-logo.png", // Đường dẫn đúng
      slug: "0g-decentralized-ai",
      content: "Đây là nội dung chi tiết về dự án 0G. Vui lòng xem trang chi tiết.",
    },
    {
      id: 2,
      title: "Bitcoin: Vua của Crypto",
      icon: "/images/bitcoin-logo.png", // Đường dẫn đúng
      slug: "bitcoin-king-of-crypto",
      content: "Bitcoin vẫn là đồng tiền số hàng đầu với tiềm năng lớn trong tương lai, dù đối mặt với nhiều thách thức. Kể từ khi ra mắt vào năm 2009 bởi Satoshi Nakamoto, Bitcoin đã trở thành tài sản kỹ thuật số có giá trị nhất thế giới...",
      seo: {
        title: "Bitcoin: Vua của Crypto - Phân tích toàn diện | B.Node",
        description: "Tìm hiểu tại sao Bitcoin vẫn là đồng tiền số hàng đầu dù đối mặt với thách thức. Phân tích về tiềm năng và rủi ro của BTC từ chuyên gia B.Node.",
      },
    },
    {
      id: 3,
      title: "Ethereum: Nền tảng hợp đồng thông minh",
      icon: "/images/ethereum-logo.png", // Đường dẫn đúng
      slug: "ethereum-smart-contract",
      content: "Ethereum dẫn đầu về smart contract, nhưng có thách thức về khả năng mở rộng và phí giao dịch cao. Được phát triển bởi Vitalik Buterin và ra mắt vào năm 2015, Ethereum đã cách mạng hóa blockchain bằng cách giới thiệu khái niệm hợp đồng thông minh...",
      seo: {
        title: "Ethereum: Nền tảng hợp đồng thông minh - Phân tích chi tiết | B.Node",
        description: "Phân tích chuyên sâu về Ethereum - nền tảng hợp đồng thông minh hàng đầu, những thách thức về mở rộng và giải pháp Layer 2.",
      },
    },
  ];

  const article = articles.find(article => article.id === articleId);

  if (!article) {
    return (
      <div className="py-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-6">
          {language === 'vi' ? 'Bài viết không tồn tại' : 'Article not found'}
        </h1>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          {language === 'vi' ? 'Quay lại trang chủ' : 'Back to home'}
        </Link>
      </div>
    );
  }

  const IconComponent = article.icon;
  const seoTitle = article.seo?.title || article.title;
  const seoDescription = article.seo?.description || article.content.substring(0, 160) + '...';
  const canonicalUrl = `https://b-node.com/article/${article.slug}`;

  // Schema.org data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": seoTitle,
    "description": seoDescription,
    "image": `https://b-node.com/${article.slug}-image.png`,
    "author": {
      "@type": "Organization",
      "name": "B.Node",
    },
    "publisher": {
      "@type": "Organization",
      "name": "B.Node",
      "logo": {
        "@type": "ImageObject",
        "url": "https://b-node.com/logo.png",
      },
    },
    "datePublished": "2025-04-02",
    "dateModified": "2025-04-02",
  };

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
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="py-8">
        <Link to="/" className="text-blue-400 hover:text-blue-300 mb-4 inline-block">
          ← {language === 'vi' ? 'Quay lại trang chủ' : 'Back to home'}
        </Link>

        <article className="bg-gray-800 rounded-lg shadow-lg p-6" itemScope itemType="https://schema.org/Article">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-700 p-4 rounded-full">
              <img
                src={IconComponent}
                alt={article.title}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-6 text-center" itemProp="headline">
            {article.title}
          </h1>

          <div className="text-gray-300" itemProp="articleBody">
            <p>{article.content}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleDetail;