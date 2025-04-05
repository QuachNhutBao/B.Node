const Logo3D = ({ width = 36, height = 36, className = '' }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Định nghĩa gradient và filters */}
        <defs>
          <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
          </radialGradient>
  
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
  
        {/* Main sphere */}
        <circle cx="50" cy="50" r="35" fill="url(#sphereGradient)" filter="url(#glow)" />
  
        {/* Node particles */}
        <circle cx="32" cy="32" r="6" fill="#60a5fa" opacity="0.8" />
        <circle cx="72" cy="30" r="7" fill="#fcd34d" opacity="0.8" />
        <circle cx="30" cy="68" r="6" fill="#f3f4f6" opacity="0.8" />
        <circle cx="68" cy="72" r="7" fill="#60a5fa" opacity="0.8" />
        <circle cx="50" cy="20" r="5" fill="#f3f4f6" opacity="0.7" />
        <circle cx="80" cy="50" r="5" fill="#fcd34d" opacity="0.7" />
        <circle cx="50" cy="80" r="5" fill="#f3f4f6" opacity="0.7" />
        <circle cx="20" cy="50" r="5" fill="#fcd34d" opacity="0.7" />
  
        {/* Connecting lines with better styling */}
        <path d="M44 44 L35 35" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M56 44 L65 35" stroke="#fcd34d" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M44 56 L35 65" stroke="#f3f4f6" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M56 56 L65 65" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
  
        <path d="M50 45 L50 25" stroke="#f3f4f6" strokeWidth="1" strokeLinecap="round" />
        <path d="M55 50 L75 50" stroke="#fcd34d" strokeWidth="1" strokeLinecap="round" />
        <path d="M50 55 L50 75" stroke="#f3f4f6" strokeWidth="1" strokeLinecap="round" />
        <path d="M45 50 L25 50" stroke="#fcd34d" strokeWidth="1" strokeLinecap="round" />
  
        {/* Center hollow */}
        <circle cx="50" cy="50" r="15" fill="#1f2937" />
      </svg>
    );
  };
  
  const LogoWithText = ({ className = '' }) => {
    return (
      <div className={`flex items-center ${className}`}>
        <Logo3D className="mr-2" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          B.Node
        </span>
      </div>
    );
  };
  
  export { Logo3D, LogoWithText };