import Header from "../Header/Header";
import theme from "../../assets/styles/theme";
import "./MainLayout.css";
function MainLayout() {
  return (
    <div
      className="layout-container"
      style={{ display: "flex", backgroundColor: theme.colors.layout }}
    >
      {/* Header */}
      <Header />

      {/* Main section */}
      <div className="main-area"></div>
    </div>
  );
}
export default MainLayout;
