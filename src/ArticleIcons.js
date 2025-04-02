import React from 'react';

// Icon cho bài viết về 0g
export const ZeroGIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <path 
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="currentColor"
    />
    <path 
      d="M6.5 9L12 4.5 17.5 9M17.5 15L12 19.5 6.5 15" 
      stroke="currentColor" 
      strokeWidth="1.5" 
    />
  </svg>
);

// Icon cho bài viết về Bitcoin
export const BitcoinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M15.5 10.5c0-1.8-1.6-3-3.5-3H9v6h3c1.9 0 3.5-1.2 3.5-3z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M15.5 13.5c0 1.8-1.6 3-3.5 3H9v-6"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <line x1="8" y1="7.5" x2="11" y2="7.5" stroke="currentColor" strokeWidth="1.5" />
    <line x1="8" y1="16.5" x2="11" y2="16.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Icon cho bài viết về Ethereum
export const EthereumIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L5 12.2L12 16L19 12.2L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12 16L5 12.2L12 22L19 12.2L12 16Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);