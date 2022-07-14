import editIcon from "../../../../assets/icons/edit-icon.svg";

import styles from "./EditBtn.module.css";

const EditBtn = () => {
  const getEl = (e) => {
    console.log(e.target.parentElement);
  };

  return (
    <button onClick={getEl} className={styles.EditBtn}>
      <img src={editIcon} alt='Edit' />
    </button>
  );
};

export default EditBtn;
