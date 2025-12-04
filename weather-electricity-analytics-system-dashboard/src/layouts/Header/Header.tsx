import theme from "../../assets/styles/theme";
import "./Header.css";
import Search from "../../components/Search/Search";

function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.primaryTransparent,
      }}
    >
      <div>
        <Search />
      </div>
    </header>
  );
}

export default Header;
