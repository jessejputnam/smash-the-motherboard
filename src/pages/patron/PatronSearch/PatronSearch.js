// Import React tools
import { UseState } from "react";

// Import Components
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import SearchResult from "../../../common/components/SearchResult/SearchResult";
import Footer from "../../../common/components/Footer/Footer";

// Import CSS
import styles from "./PatronSearch.module.css";

const PatronSearch = (props) => {
  //! ADD MAP OF IMPORTED SEARCH RESULTS
  return (
    <div className={styles.PatronSearch}>
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      <div className={styles.resultsContainer}></div>
      <Footer />
    </div>
  );
};

export default PatronSearch;
