// Modern icon alternatives using Lucide React
import React from 'react';
import { 
  Minus, 
  Circle, 
  Square, 
  Triangle,
  PenTool,
  MousePointer,
  Ruler,
  RotateCcw,
  Move3D
} from 'lucide-react';

// Wrapper component to standardize icon size and styling
function ModernIcon({ Icon, size = 20, ...props }) {
  return (
    <Icon 
      size={size} 
      strokeWidth={1.5}
      {...props}
      style={{
        color: 'currentColor',
        ...props.style
      }}
    />
  );
}

// Modern tool icons
export function ModernLineToolIcon(props) {
  return <ModernIcon Icon={Minus} {...props} />;
}

export function ModernCircleToolIcon(props) {
  return <ModernIcon Icon={Circle} {...props} />;
}

export function ModernRectangleToolIcon(props) {
  return <ModernIcon Icon={Square} {...props} />;
}

export function ModernPointToolIcon(props) {
  return <ModernIcon Icon={MousePointer} {...props} />;
}

export function ModernBezierToolIcon(props) {
  return <ModernIcon Icon={PenTool} {...props} />;
}

export function ModernMeasureToolIcon(props) {
  return <ModernIcon Icon={Ruler} {...props} />;
}

export function ModernArcToolIcon(props) {
  return <ModernIcon Icon={RotateCcw} {...props} />;
}
