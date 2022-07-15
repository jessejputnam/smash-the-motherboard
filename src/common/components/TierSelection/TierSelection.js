// Import Utilties
import { uuid } from "../../../backend/firebase";

// Import CSS
import styles from "./TierSelection.module.css";

const TierSelection = (props) => {
  // console.log(props);
  const tierRewards = props.tierRewards.map((reward) => (
    <li key={uuid()}>{reward}</li>
  ));

  return (
    <div className={styles.TierSelection}>
      <div className={styles.tierPrice}>
        <h3>${props.tierPrice}</h3>
      </div>
      <div className={styles.tierDesc}>
        <ul>{tierRewards}</ul>
      </div>
      <div className={styles.tierBtn}>
        <button>Select</button>
      </div>
    </div>
  );
};

export default TierSelection;
