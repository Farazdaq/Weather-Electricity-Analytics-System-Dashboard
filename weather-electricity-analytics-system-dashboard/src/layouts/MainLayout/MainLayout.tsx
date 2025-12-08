import Header from "../Header/Header";
import theme from "../../assets/styles/theme";
import Sidebar from "../Sidebar/Sidebar";
import "./MainLayout.css";
import { useState } from "react";

function MainLayout() {
  const [activePage, setActivePage] = useState("Item 1"); // Default selected

  const renderContent = () => {
    switch (activePage) {
      case "Item 1":
        return <h2>This is Item 1 content.</h2>;
      case "Item 2":
        return <h2>This is Item 2 content.</h2>;
      case "Item 3":
        return <h2>This is Item 3 content.</h2>;
      default:
        return <h2>Select an item...</h2>;
    }
  };

  return (
    <div
      className="layout-container"
      style={{ backgroundColor: theme.colors.layout }}
    >
      {/* Sidebar sends selected item to MainLayout */}
      <Sidebar onSelect={(item) => setActivePage(item)}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </Sidebar>

      {/* MAIN CONTENT AREA */}
      <div className="content-wrapper">
        <Header />

        <div className="main-area">{renderContent()}</div>
      </div>
    </div>
  );
}

export default MainLayout;
