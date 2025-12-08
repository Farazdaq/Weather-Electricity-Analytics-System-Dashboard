// ResponsiveSpacer.tsx
import React from "react";

interface ResponsiveSpacerProps {
  width?: number; // base width in px
  height?: number; // base height in px
  min?: number; // optional min size
  max?: number; // optional max size
}

const ResponsiveSpacer: React.FC<ResponsiveSpacerProps> = ({
  width,
  height,
  min,
  max,
}) => {
  const style: React.CSSProperties = {};

  // Helper to create a responsive clamp formula
  const makeResponsive = (base: number, min?: number, max?: number) => {
    const minVal = min ?? base * 0.6; // default min: 60% of base
    const maxVal = max ?? base * 1.4; // default max: 140% of base
    const vwVal = base / 20; // smoother scaling factor ≈ 5% of base

    return `clamp(${minVal}px, ${vwVal}vw, ${maxVal}px)`;
  };

  if (width !== undefined) {
    style.width = makeResponsive(width, min, max);
    style.display = "inline-block";
  }

  if (height !== undefined) {
    style.height = makeResponsive(height, min, max);
    style.display = "block";
  }

  return <div style={style} />;
};

export default ResponsiveSpacer;
