import React from "react";
import "./Sidebar.css";
import theme from "../../assets/styles/theme";
interface SidebarProps {
  children?: React.ReactNode;
  onSelect?: (item: string) => void; // NEW
}

function Sidebar({ children, onSelect }: SidebarProps) {
  return (
    <aside
      style={{
        backgroundColor: theme.colors.primaryTransparent,
      }}
      className="sidebar"
    >
      {/* If children provided, wrap them so we can detect clicks */}
      <div className="sidebar-content">
        {children
          ? React.Children.map(children, (child: any) =>
              React.cloneElement(child, {
                onClick: () => onSelect && onSelect(child.props.children),
                style: { cursor: "pointer", padding: "8px 0" },
              })
            )
          : "Sidebar Content"}
      </div>
    </aside>
  );
}

export default Sidebar;
