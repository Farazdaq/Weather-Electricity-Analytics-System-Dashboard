import theme from "../../assets/styles/theme";
import "./Header.css";
import Search from "../../components/Search/Search";
import Profile from "../../components/Profile/Profile";

function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.primaryTransparent,
      }}
    >
      <div className="header-column-container">
        <Search />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
