import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { Helmet } from 'react-helmet';

const ZeroGArticle = () => {
  const { language } = useLanguage();
  const location = useLocation();

  // SEO data
  const seoTitle = language === 'vi'
    ? 'Bí Mật 0G (Zero Gravity): Khi AI Gặp Blockchain | B.Node'
    : 'The Secret of 0G (Zero Gravity): Where AI Meets Blockchain | B.Node';

  const seoDescription = language === 'vi'
    ? 'Khám phá câu chuyện về 0G – hệ điều hành AI phi tập trung đầu tiên trên blockchain, nơi AI trở thành tài sản công và tự do như không trọng lực.'
    : 'Discover the story of 0G – the first decentralized AI operating system on blockchain, where AI becomes a public good, free as zero gravity.';

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
    "datePublished": "2025-04-08", // Cập nhật ngày hiện tại
    "dateModified": "2025-04-08",
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
          ← {language === 'vi' ? 'Quay lại trang chủ' : 'Back to home'}
        </Link>

        <article className="bg-gray-800 rounded-xl shadow-lg overflow-hidden" itemScope itemType="https://schema.org/TechArticle">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl font-bold text-white mb-6 text-center" itemProp="headline">
              {language === 'vi'
                ? 'Bí Mật Dưới Lớp Không Trọng Lực: Hành Trình Của 0G'
                : 'The Secret Beneath Zero Gravity: The Journey of 0G'}
            </h1>

            <Logo0G />

            <div className="prose prose-lg prose-invert max-w-none" itemProp="articleBody">
              <p className="lead text-xl mb-6" itemProp="description">
                {language === 'vi'
                  ? 'Ở một góc xa xôi của thế giới số, nơi blockchain và AI giao thoa, 0G – Zero Gravity – lặng lẽ trỗi dậy như một giấc mơ táo bạo: biến trí tuệ nhân tạo thành thứ tự do như không khí, không còn bị giam trong lồng kính của các gã khổng lồ công nghệ.'
                  : 'In a distant corner of the digital realm, where blockchain and AI collide, 0G – Zero Gravity – quietly rises like a bold dream: turning artificial intelligence into something as free as air, no longer trapped in the cages of tech giants.'}
              </p>

              <h2>{language === 'vi' ? 'Hành Trình "Không Trọng Lực"' : 'The Zero Gravity Journey'}</h2>
              <p>
                {language === 'vi'
                  ? 'Hãy tưởng tượng một blockchain nhanh như chớp, tên là 0G Chain, nơi hàng nghìn giao dịch bay qua mỗi giây mà chẳng tốn mấy đồng phí. Dữ liệu không bị nhốt trong những kho lưu trữ đắt đỏ, mà tung tăng trong 0G Storage – một "đám mây phi tập trung" rẻ đến mức ai có laptop cũ cũng góp sức được. Nhưng điều làm mình rùng mình là cái ngày họ thả AI lên chuỗi khối: nó sống, nó đoán, từ dự báo giá coin đến điều khiển NPC trong game, tất cả trong một thế giới không ai kiểm soát tuyệt đối.'
                  : 'Picture a blockchain as swift as lightning, called 0G Chain, where thousands of transactions zip by every second for next to nothing in fees. Data isn’t locked in pricey vaults but dances freely in 0G Storage – a "decentralized cloud" so cheap even an old laptop can join in. But the real shiver came the day they unleashed AI onto the chain: it lives, it predicts, from forecasting coin prices to steering game NPCs, all in a world no one fully controls.'}
              </p>
              <p>
                {language === 'vi'
                  ? 'Rồi một hôm, mình thấy trên X: hơn 92.000 "nút giám sát" – AI Alignment Nodes – đã xuất hiện. Không phải máy móc lạnh lùng, mà là hàng chục nghìn con người khắp thế giới, cùng nhau giữ cho AI không "nổi loạn". Họ mơ về một thứ lớn lao: AI trung thực, minh bạch, và phục vụ tất cả.'
                  : 'Then one day, I spotted it on X: over 92,000 "watchdog nodes" – AI Alignment Nodes – had sprung up. Not cold machines, but tens of thousands of people worldwide, teaming up to stop AI from going rogue. They dream of something grand: an AI that’s honest, transparent, and serves everyone.'}
              </p>

              <h2>{language === 'vi' ? 'Cú "Wow" Đột Phá' : 'The Breakthrough "Wow"'}</h2>
              <p>
                {language === 'vi'
                  ? 'Nhưng khoảnh khắc làm mình há hốc mồm là khi nghe về kế hoạch của 0G: AI không chỉ chạy, mà còn "học" ngay trên blockchain. Một nhà phát triển ở Việt Nam có thể dạy AI hiểu tiếng Việt, một game thủ ở Mỹ có thể huấn luyện NPC thông minh hơn – chỉ với vài cú nhấp chuột, không cần siêu máy tính. Và cái đỉnh nhất? Dữ liệu khổng lồ để nuôi AI – hàng petabyte – được lưu bởi chính cộng đồng, không phải gã khổng lồ nào cả.'
                  : 'But the jaw-dropping moment came when I heard their plan: AI wouldn’t just run – it’d learn right on the blockchain. A developer in Vietnam could teach it Vietnamese, a gamer in the US could train smarter NPCs – all with a few clicks, no supercomputers needed. And the best part? The massive data feeding it – petabytes – is held by the community, not some corporate titan.'}
              </p>
              <p>
                {language === 'vi'
                  ? 'Mình tưởng tượng một NPC trong game, nhờ 0G, quay sang nói: "Hôm nay anh mua nhiều quá, giá tăng chút nhé!" – rồi cười toe toét. Hay một app DeFi nhỏ bé, dùng AI của 0G, âm thầm chọn pool ngon nhất, giúp mình kiếm thêm chục phần trăm mà chẳng cần động tay. Những điều đó không còn là viễn tưởng nữa.'
                  : 'I pictured an NPC in a game, powered by 0G, turning to me and saying, “You’re buying a lot today – price’s going up a bit!” with a cheeky grin. Or a tiny DeFi app, using 0G’s AI, quietly picking the best pool to earn me an extra ten percent without lifting a finger. That’s no longer sci-fi.'}
              </p>

              <h2>{language === 'vi' ? 'Bí Ẩn Chưa Lời Giải' : 'The Unanswered Mystery'}</h2>
              <p>
                {language === 'vi'
                  ? 'Không phải mọi thứ đều hoàn hảo. Làm sao để AI khổng lồ như GPT-3 chạy mượt trên blockchain? 0G có vượt qua được Fetch.ai hay OpenAI không? Chẳng ai biết chắc. Nhưng khi họ gom được 325 triệu USD từ Animoca Brands và hơn 450 ứng dụng nhảy vào, mình nghĩ: "Ừ, cái này không đùa được đâu."'
                  : 'Not everything’s perfect. How do you make a giant like GPT-3 run smoothly on a blockchain? Can 0G outpace Fetch.ai or OpenAI? No one knows for sure. But when they’ve pulled in $325 million from Animoca Brands and over 450 apps have jumped aboard, I thought, “Yeah, this isn’t a game.”'}
              </p>
              <p>
                {language === 'vi'
                  ? 'Đầu năm 2025, khi mạng chính của 0G cất cánh, mình tự hỏi liệu đó có phải khoảnh khắc "không trọng lực" thật sự – nơi AI thoát khỏi xiềng xích, bay lên, và trở thành thứ mà bất kỳ ai cũng chạm tới được. 0G không chỉ là dự án. Nó là một giấc mơ lơ lửng, chờ ngày hạ cánh.'
                  : 'In early 2025, when 0G’s mainnet takes off, I wonder if that’ll be the true “zero gravity” moment – where AI breaks free, soars, and becomes something anyone can touch. 0G isn’t just a project. It’s a dream floating out there, waiting to land.'}
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ZeroGArticle;