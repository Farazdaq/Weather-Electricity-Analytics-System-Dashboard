import theme from "../../assets/styles/theme";
import "./Search.css";
function Search() {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search"
      style={{ backgroundColor: theme.colors.inputPrimaryTransparent }}
    ></input>
  );
}

export default Search;
