// theme.js
const theme = {
  colors: {
    primary: "#93E7FB", // main brand color
    primaryTransparent: "rgba(0, 204, 255, 0.2)",
    inputPrimaryTransparent: "rgba(118, 212, 249, 0.3)",
    secondary: "#9333EA", // secondary accent
    success: "#10B981",
    danger: "#EF4444",
    warning: "#F59E0B",
    light: "#F3F4F6",
    dark: "#111827",
    layout: "#212c4c",
    text: {
      primary: "#111827",
      secondary: "#6B7280",
      inverted: "#FFFFFF",
    },
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "30px",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.15)",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export default theme;
