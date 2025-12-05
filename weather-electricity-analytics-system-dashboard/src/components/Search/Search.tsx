import theme from "../../assets/styles/theme";
import { FaSearch } from "react-icons/fa";

import "./Search.css";
function Search() {
  return (
    <div className="column-container">
      <input
        type="text"
        className="search"
        placeholder="Search"
        style={{ backgroundColor: theme.colors.inputPrimaryTransparent }}
      ></input>

      <button
        className="search-button"
        style={{ backgroundColor: theme.colors.inputPrimaryTransparent }}
      >
        <FaSearch size={13} style={{ color: theme.colors.primary }} />
      </button>
    </div>
  );
}

export default Search;
