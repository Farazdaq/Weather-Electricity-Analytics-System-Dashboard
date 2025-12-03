import Header from "../Header/Header";
import "./MainLayout.css";
function MainLayout() {
  return (
    <div className="layout-container" style={{ display: "flex" }}>
      {/* Header */}
      <Header />

      {/* Main section */}
      <div className="main-area"></div>
    </div>
  );
}
export default MainLayout;
