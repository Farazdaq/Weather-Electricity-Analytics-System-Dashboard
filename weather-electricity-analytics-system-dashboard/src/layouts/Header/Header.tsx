import theme from "../../assets/styles/theme";
import "./Header.css";
import Search from "../../components/Search/Search";
import Profile from "../../components/Profile/Profile";
import ResponsiveSpacer from "../../core/ResponsiveSpacer";
import Username from "../../components/Username/Username";
function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.primaryTransparent,
      }}
    >
      <div className="header-column-container">
        <div className="right-elements">
          <Search />
        </div>
        <ResponsiveSpacer width={400} min={20} max={500} />

        <div className="right-elements">
          <Username text="Farazdaq Ahmed" color="#93E7FB" size={14} />

          <ResponsiveSpacer width={100} min={20} max={500} />
          <Profile />
          <ResponsiveSpacer width={40} min={20} max={500} />
        </div>
      </div>
    </header>
  );
}

export default Header;
