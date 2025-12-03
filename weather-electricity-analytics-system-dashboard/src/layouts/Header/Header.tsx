import theme from "../../assets/styles/theme";
import "./Header.css";
function Header() {
  return (
    <header
      className="header"
      style={{
        backgroundColor: theme.colors.primary,
      }}
    >
      Header
    </header>
  );
}

export default Header;
