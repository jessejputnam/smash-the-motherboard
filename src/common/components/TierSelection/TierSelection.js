// Import CSS
import styles from "./TierSelection.module.css";

const TierSelection = () => {
  return (
    <div className={styles.TierSelection}>
      <div className={styles.tierPrice}>
        <h3>$5</h3>
      </div>
      <div className={styles.tierDesc}>
        <ul>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </li>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </li>
        </ul>
      </div>
      <div className={styles.tierBtn}>
        <button>Select</button>
      </div>
    </div>
  );
};

export default TierSelection;
