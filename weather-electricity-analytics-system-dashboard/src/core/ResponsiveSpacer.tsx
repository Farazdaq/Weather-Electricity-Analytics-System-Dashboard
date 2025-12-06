// ResponsiveSpacer.tsx
import React from "react";

interface ResponsiveSpacerProps {
  width?: number; // horizontal spacing in px
  height?: number; // vertical spacing in px
  responsive?: boolean; // enable responsive clamp scaling
}

const ResponsiveSpacer: React.FC<ResponsiveSpacerProps> = ({
  width,
  height,
  responsive = true,
}) => {
  const style: React.CSSProperties = {};

  if (width !== undefined) {
    style.width = responsive
      ? `clamp(${width}px, ${width / 10}vw, ${width * 1.5}px)`
      : `${width}px`;
  }

  if (height !== undefined) {
    style.height = responsive
      ? `clamp(${height}px, ${height / 10}vw, ${height * 1.5}px)`
      : `${height}px`;
  }

  return <div style={style} />;
};

export default ResponsiveSpacer;
