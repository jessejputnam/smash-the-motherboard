import styles from "./SearchResult.module.css";

const SearchResult = (props) => {
  return (
    <div className={styles.SearchResult}>
      <h3>{props.title}</h3>
      <p>{props.genre}</p>
      <p>{props.desc}</p>
      <button>Go To Page</button>
    </div>
  );
};

export default SearchResult;
