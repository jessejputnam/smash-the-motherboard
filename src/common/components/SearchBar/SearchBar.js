// Import Assets
import searchIcon from "../../../assets/icons/search-icon.svg";

// Import CSS
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  const getSearchTerm = (e) => {
    e.preventDefault();

    const searchValue = e.target.children[0].value;
    if (searchValue === "") return;

    props.getSearchResult(searchValue.toLowerCase().split(" "));
  };

  return (
    <form onSubmit={getSearchTerm} className={styles.SearchBar}>
      <input
        type='text'
        className={styles.searchInput}
        placeholder='Search for artists...'
      ></input>
      <button type='submit' className={styles.searchBtn}>
        <img className={styles.searchBtnImg} src={searchIcon} alt='Search' />
      </button>
    </form>
  );
};
export default SearchBar;
