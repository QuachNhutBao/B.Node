import React, { useState, useEffect } from 'react';

const Clock3D = () => {
  // State để lưu thời gian hiện tại
  const [time, setTime] = useState(new Date());
  const [hovering, setHovering] = useState(false);
  
  useEffect(() => {
    // Cập nhật ngay lập tức khi component mount
    setTime(new Date());
    
    // Cập nhật thời gian mỗi giây
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Dọn dẹp interval khi component unmount
    return () => clearInterval(interval);
  }, []);
  
  // Tính góc quay cho các kim đồng hồ
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  // Công thức tính góc quay
  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;
  
  return (
    <div 
      className="w-[380px] h-[380px] relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Nền đồng hồ */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-400 shadow-lg shadow-blue-500/30 flex justify-center items-center">
        {/* Hiệu ứng glow */}
        <div className="absolute w-full h-full rounded-full bg-blue-500/20 blur-xl"></div>
        
        {/* Các điểm nút xung quanh đồng hồ */}
        <div className="absolute w-9 h-9 rounded-full bg-blue-300 opacity-90" style={{ top: '15%', left: '15%' }}></div>
        <div className="absolute w-12 h-12 rounded-full bg-yellow-300 opacity-90" style={{ top: '15%', right: '15%' }}></div>
        <div className="absolute w-10 h-10 rounded-full bg-white opacity-90" style={{ bottom: '15%', left: '15%' }}></div>
        <div className="absolute w-11 h-11 rounded-full bg-blue-300 opacity-90" style={{ bottom: '15%', right: '15%' }}></div>
        
        <div className="absolute w-8 h-8 rounded-full bg-yellow-300 opacity-80" style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}></div>
        <div className="absolute w-8 h-8 rounded-full bg-blue-300 opacity-80" style={{ right: '5%', top: '50%', transform: 'translateY(-50%)' }}></div>
        <div className="absolute w-8 h-8 rounded-full bg-white opacity-80" style={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}></div>
        <div className="absolute w-8 h-8 rounded-full bg-yellow-300 opacity-80" style={{ left: '5%', top: '50%', transform: 'translateY(-50%)' }}></div>
        
        <div className="absolute w-6 h-6 rounded-full bg-white opacity-60" style={{ top: '20%', left: '30%' }}></div>
        <div className="absolute w-6 h-6 rounded-full bg-blue-300 opacity-60" style={{ top: '30%', right: '20%' }}></div>
        <div className="absolute w-6 h-6 rounded-full bg-yellow-300 opacity-60" style={{ bottom: '30%', right: '20%' }}></div>
        <div className="absolute w-6 h-6 rounded-full bg-white opacity-60" style={{ bottom: '20%', left: '30%' }}></div>
        
        {/* Đường kẻ kết nối */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
          <div className="absolute w-full h-[1px] bg-blue-300/30" style={{ transform: 'rotate(0deg)' }}></div>
          <div className="absolute w-full h-[1px] bg-blue-300/30" style={{ transform: 'rotate(45deg)' }}></div>
          <div className="absolute w-full h-[1px] bg-blue-300/30" style={{ transform: 'rotate(90deg)' }}></div>
          <div className="absolute w-full h-[1px] bg-blue-300/30" style={{ transform: 'rotate(135deg)' }}></div>
        </div>
        
        {/* Kim đồng hồ và tâm */}
        <div className="relative w-[65%] h-[65%] rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex justify-center items-center shadow-lg shadow-blue-500/50 z-10">
          {/* Kim giờ */}
          <div 
            className="absolute w-3 h-[40%] bg-yellow-300 rounded-full z-20 origin-bottom shadow shadow-yellow-300/50"
            style={{ 
              bottom: '50%', 
              left: '50%', 
              transform: `translateX(-50%) rotate(${hourAngle}deg)`,
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          ></div>
          
          {/* Kim phút */}
          <div 
            className="absolute w-2.5 h-[55%] bg-white rounded-full z-30 origin-bottom shadow shadow-white/50"
            style={{ 
              bottom: '50%', 
              left: '50%', 
              transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          ></div>
          
          {/* Kim giây */}
          <div 
            className="absolute w-1.5 h-[65%] bg-gray-100 rounded-full z-40 origin-bottom shadow shadow-gray-100/30"
            style={{ 
              bottom: '50%', 
              left: '50%', 
              transform: `translateX(-50%) rotate(${secondAngle}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          ></div>
          
          {/* Tâm đồng hồ */}
          <div className="w-[25%] h-[25%] rounded-full bg-gray-900 z-50 shadow-inner shadow-gray-700/20"></div>
        </div>
      </div>
      
      {/* Hiển thị thời gian số khi hover */}
      {hovering && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-navy-800/80 px-3 py-1 rounded-full text-white text-xs font-mono backdrop-blur-sm">
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>
      )}
    </div>
  );
};

export default Clock3D;