import theme from "../../assets/styles/theme";
import "./Header.css";
import Search from "../../components/Search/Search";
import Profile from "../../components/Profile/Profile";
import ResponsiveSpacer from "../../core/ResponsiveSpacer";

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
        <div className="right-elements">
          <div>
            <p> Farazdaq Ahmed </p>
          </div>
          <ResponsiveSpacer width={30} />
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
