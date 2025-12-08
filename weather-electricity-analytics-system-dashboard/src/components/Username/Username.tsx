import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Username.css";

interface UsernameProps {
  text: string;
  color?: string;
  size?: number;
  onClick?: () => void;
}

const Username: React.FC<UsernameProps> = ({
  text,
  color = "#000",
  size = 16,
  onClick,
}) => {
  return (
    <div
      className="username-container"
      onClick={onClick}
      style={
        {
          "--username-color": color,
          "--username-size": `${size}px`,
        } as React.CSSProperties
      }
    >
      <p className="username-text">{text}</p>
      <FiChevronDown className="username-icon" />
    </div>
  );
};

export default Username;
