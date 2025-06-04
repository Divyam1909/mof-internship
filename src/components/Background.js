import React from 'react';
import './Background.css'; // We'll create this CSS file next

const Background = ({ children }) => {
  return (
    <div className="app-background">
      {children}
    </div>
  );
};

export default Background;