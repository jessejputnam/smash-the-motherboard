// Import React tools
import { useEffect, useState } from "react";

// import Random Keygen
import { uuid } from "../../../backend/firebase";

// Import Backend functionality
import { findCreatorsByKeyword, db } from "../../../backend/firebase";

// Import Components
import SearchBar from "../../../common/components/SearchBar/SearchBar";
import SearchResult from "../../../common/components/SearchResult/SearchResult";
import Footer from "../../../common/components/Footer/Footer";

// Import CSS
import styles from "./PatronSearch.module.css";

const PatronSearch = () => {
  const [searchKeywords, setSearchKeywords] = useState([]);
  const [results, setResults] = useState([]);

  const handleSearchResult = (childData) => {
    console.log("Search Results:", childData);
    setSearchKeywords(childData);
    console.log();
  };

  useEffect(() => {
    if (searchKeywords.length > 0) {
      console.log("CHECK", searchKeywords);
      const creatorsFound = findCreatorsByKeyword(db, ["music"]);

      console.log(creatorsFound);
    }
  }, [searchKeywords]);

  return (
    <div className={styles.PatronSearch}>
      <div className={styles.searchBarWrapper}>
        <SearchBar getSearchResult={handleSearchResult} />
      </div>
      <div className={styles.resultsContainer}>
        {results.map((result) => {
          return (
            <SearchResult
              title={result.title}
              desc={result.desc}
              genre={result.genre}
              key={uuid()}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PatronSearch;
