import React from 'react';

export default function Abs({left, top, right, bottom, children, style, zIndex = 100, ...props}) {
  return <div style={{position: 'absolute', left, top, right, bottom, zIndex, ...style}}  {...props}>
    {children}
  </div>;
}

// defaults moved to parameter destructuring





